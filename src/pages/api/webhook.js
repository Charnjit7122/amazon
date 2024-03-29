import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../Firebase/FirebasePermission.json");

//secure connectionto firebasefrom backend
const app = !admin.apps.length
  ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
  : admin.app();

//connection to stripe
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const endpointSecret = process.env.NEXT_PUBLIC_STRIPE_SIGNIN_SECRET;

const fulfillOrder = async (session) => {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(
        `success.........., Order ${session.id} added to firebase database`
      );
    });
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;
    // Verify that event is created from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("Error", err.message);
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
    //handle checkout.session.compeleted event
    if (event.type == "checkout.session.completed") {
      const session = event.data.object;
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

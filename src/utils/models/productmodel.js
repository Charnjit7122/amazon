const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  brand: String,
  rating: Number,
  reviews: Number,
  createdAt: Date,
});

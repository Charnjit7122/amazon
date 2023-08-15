import { Provider } from "react-redux";
import { store } from "../app/store";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import { RecoilRoot } from "recoil";

const progress = new ProgressBar({
  size: 4,
  color: "#FBBF24",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </RecoilRoot>
    </SessionProvider>
  );
};

export default MyApp;

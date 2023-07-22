import "@/styles/globals.css";
import Router from "next/router";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import ProgressBar from "@badrap/bar-of-progress";
import { store } from "@/utils/store";

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
    <RecoilRoot>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        </RecoilRoot>
  );
};

export default MyApp;
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppContext } from "@/context/StateContext";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext>
  );
}

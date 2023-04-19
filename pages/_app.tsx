import "@/styles/globals.css";
import type { AppProps } from "next/app";
//react-context
import { AppContext } from "@/context/StateContext";
//component
import Layout from "@/components/Layout";
//vercel
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Layout>
        <Component {...pageProps} />

        <Analytics />
      </Layout>
    </AppContext>
  );
}

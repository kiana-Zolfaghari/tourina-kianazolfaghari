import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { DialogProvider } from "@/components/partials/provider/DialogProdider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DialogProvider>
        <Head>
          <title>tourino</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
          <Toaster position="top-center" reverseOrder={false} />
        </Layout>
      </DialogProvider>
    </>
  );
}

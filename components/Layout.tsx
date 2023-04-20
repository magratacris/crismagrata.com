import React, { FC } from "react";
//next
import Head from "next/head";
//types
import { LayoutProps } from "@/Interfaces/LayoutProps";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Cris Magrata | Portfolio</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

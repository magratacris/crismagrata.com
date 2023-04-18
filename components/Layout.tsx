import React, { FC } from "react";
//next
import Head from "next/head";
//types
import { LayoutProps } from "@/Interfaces/LayoutProps";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout relative">
      <Head>
        <title>Cris Magrata | Portfolio</title>
      </Head>
      <main className="main-container">{children}</main>
    </div>
  );
};

export default Layout;

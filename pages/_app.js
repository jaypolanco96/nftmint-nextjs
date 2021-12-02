import React from "react";
import App from "next/app";
import Main from "../layouts/main";
import "../styles/globals.css";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Main />
        <Component {...pageProps} />
      </Layout>
    );
  }
}

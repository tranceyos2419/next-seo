import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import withGA from "next-ga";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withGA("UA-138515076-1", Router)(MyApp);
// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138515076-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', '');
// </script>

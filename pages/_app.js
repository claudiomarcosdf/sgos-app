import React from 'react';
import ReactDOM from 'react-dom';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ToastProvider } from 'react-toast-notifications';

import PageChange from 'components/PageChange/PageChange.js';

import 'assets/css/nextjs-material-dashboard.css?v=1.1.0';
import { AppContextProvider } from 'context/AppContextProvider';
//import HistoricoManutencaoProvider from 'hooks/HistoricoManutencaoContext';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add('body-page-transition');
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition')
  );
});
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(
      `NextJS with Material UI * Developer: Claudio Marcos`
    );
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <title>CMan - Centro de Manutenção</title>
          <script src='https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE'></script>
        </Head>
        <ToastProvider autoDismiss={true} autoDismissTimeout='4000'>
          <AppContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AppContextProvider>
        </ToastProvider>
      </React.Fragment>
    );
  }
}

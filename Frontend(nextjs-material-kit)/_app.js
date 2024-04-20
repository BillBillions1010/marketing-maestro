import React from "react";
import App from "next/app";
import Head from "next/head";

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`
        =========================================================
        * Market Maestro - Ecommerce Web App (https://github.com/billbillions1010/market-maestro)
        =========================================================
            Using: 
                * NextJS Material Kit (Frontend)
                * Medusajs  (Store Logic)
                * PostgreSQL (Database)
    
            * Product Page: https://www.creative-tim.com/product/nextjs-material-kit
            * Copyright 2024 BillBillions1010 (http://BillBillions1010.github.io)
            * Licensed under MIT (https://github.com/BillBillions1010/Market-Maestro/LICENSE.md)
        ==========================================================

            * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            
    `);
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
    
    return (
        <React.Fragment>
          <Head>
            <meta charset='UTF-8' />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
            />
            <title>Market Maestro</title>
          </Head>
          <Component {...pageProps} />
        </React.Fragment>
      );
    }
  }
  

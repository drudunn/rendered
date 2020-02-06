import App from 'next/app';
import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cabin:400,600|Modak&display=swap');

  * {
    box-sizing: border-box;
  }


  html {
    font-size: 16px;
  }

  body {
    font-family: 'Cabin', sans-serif;
  }

  h1 {
    font-family: 'Modak', sans-serif;
    font-weight: normal;
    line-height: 1;
    margin: 0 0 1.5rem;
  }

  p {
    margin-top: 0;
  }

  main {
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: ${theme.breakpoints.small}) {
      padding: 0 2rem;
    }
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

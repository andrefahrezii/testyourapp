import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // const router = useRouter();

  // useEffect(() => {
  //   // Redirect to the login page
  //   router.push('/login');
  // }, []);
  return (
    <NativeBaseProvider isSSR>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;

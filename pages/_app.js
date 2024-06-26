import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/google-analytics'

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    };

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return <>

  


    {/* google analytics / dados do site */}
    <Script src={`https://www.googletagmanager.com/gtag/js?id=G-JKS9H3R9MB`} strategy='afterInteractive' />
    <Script id="google-analytics" strategy='afterInteractive'>
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JKS9H3R9MB');
        `}
    </Script>


    {/* google ads / anuncios */}
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2417167677821960"
      crossorigin="anonymous"></Script>

    {/* <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2417167677821960"
      crossorigin="anonymous">
      {`

          (adsbygoogle = window.adsbygoogle || []).push({});

        `}

    </Script> */}


    <Component {...pageProps} />
  </>
};

export default MyApp;

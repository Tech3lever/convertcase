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

    <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} strategy='afterInteractive' />
    <Script id="google-analytics" strategy='afterInteractive'>
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
        `}
    </Script>

       <Script
          id="Adsense-id"
          data-ad-client="ca-pub-2417167677821960"
          async="true"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        
        <Script
          id="Adsense-id" async
          onError={(e) => { console.error("Script failed to load", e); }}
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2417167677821960"
          crossorigin="anonymous"
        />



    {/* ads */}


    <Component {...pageProps} />
  </>
};

export default MyApp;

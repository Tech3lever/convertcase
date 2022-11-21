import Head from 'next/head'
import Initial from './initial'

export default function Home() {
  return (
    <>
      <Head>
        <title>ConvertSmallCase - Letter and word conversion tool... The text tool takes all uppercase letters entered in the text area and converts them to lowercase letters, counts the number of characters entered in the text area, among other conversion features.</title>
        <meta name="description" content="Letter and word conversion tool... The text tool takes all uppercase letters entered in the text area and converts them to lowercase letters, counts the number of characters entered in the text area, among other conversion features." />
        <link rel="icon" href="/logo.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2417167677821960"
          crossorigin="anonymous"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X1QQPXFMKQ"></script>
        {/* <script>
          window.dataLayer = window.dataLayer || []
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-X1QQPXFMKQ');
        </script> */}
      </Head>
      <Initial />

    </>
  )
}

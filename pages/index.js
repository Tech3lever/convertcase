import Head from 'next/head'
import Initial from './initial'

export default function Home() {
  return (
    <>
      <Head>
        <title>ConvertSmallCase - Letter and word conversion tool... The text tool takes all uppercase letters entered in the text area and converts them to lowercase letters, counts the number of characters entered in the text area, among other conversion features.</title>
        <meta name="description" content="Letter and word conversion tool... The text tool takes all uppercase letters entered in the text area and converts them to lowercase letters, counts the number of characters entered in the text area, among other conversion features." />
        <link rel="icon" href="/logo.png" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2417167677821960"
          crossorigin="anonymous"></script>
      </Head>
      <Initial />
    </>
  )
}

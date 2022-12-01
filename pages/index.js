import Head from 'next/head'
import Initial from './initial'




export default function Home() {
  return (
    <>
      <Head>
        <title>Convert Small Case</title>
        <meta name="description" content="Letter and word conversion tool... The text tool takes all uppercase letters entered in the text area and converts them to lowercase letters, counts the number of characters entered in the text area, among other conversion features." />
        <meta charset="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Convert Small Case" />
        <meta property="og:description" content="Letter and word conversion tool... The text tool takes all uppercase letters entered in the text area and converts them to lowercase letters, counts the number of characters entered in the text area, among other conversion features." />
        <meta property="og:locale" content="pt_BR" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:url" content="https://convertsmallcase.online/" />
        <link rel="canonical" href="https://convertsmallcase.online/" />

        {/* icons */}
        <link rel="icon" href="/logo.png" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />

        {/* adss */}



     
      </Head>
      <Initial />
    </>
  )
}

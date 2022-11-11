import Head from 'next/head'
import Initial from './initial'

export default function Home() {
  return (
    <>
      <Head>
        <title>InnerCase</title>
        <meta name="description" content="Letter and word conversion tool... The text tool takes all uppercase letters entered in the text area and converts them to lowercase letters, counts the number of characters entered in the text area, among other conversion features." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Initial />

    </>
  )
}

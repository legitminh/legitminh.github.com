import Header from 'components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Minh's Homepage</title>
        <meta name="description" content="The best student ever in the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header active="home"></Header>
      <main>

      </main>
    </>
  )
}

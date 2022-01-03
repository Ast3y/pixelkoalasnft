import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pixel Koalas NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Pixel Koalas!" />
        <p className="description">
          An NFT collection centered around our love of Koalas!
        </p>
      </main>

      <Footer />
    </div>
  )
}

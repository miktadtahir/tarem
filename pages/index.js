import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tarem Mühendislik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Tarem - Yenileniyoruz!" />
        <p className="description">
          Çok Yakında<code>Burada.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

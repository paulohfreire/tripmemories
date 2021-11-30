import Head from 'next/head'
import Image from 'next/image'

export default function Home({title = "Minhas viagens"}) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          {title}
        </h1>

        
        
           
      </main>

      
    </div>
  )
}

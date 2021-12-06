import Head from 'next/head'
import HomeIndex from '../components/HomeIndex'
import Header from './../components/Header';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeIndex/>
      
    </div>
  )
}

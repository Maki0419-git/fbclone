import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import SideBar from '../components/SideBar'

export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>

      </Head>

      <Header />
      <main className="flex">
        <SideBar />
        <Feed />
        {/* widget */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // const session = await getSession(context);
  // console.log(res);
  // const session = JSON.parse(res)
  // return {
  //   props: {
  //     session
  //   }
  // }
  console.log(1)
  const session = 123;
  return {
    props: {
      session
    }
  }
}

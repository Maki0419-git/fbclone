import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'

export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div >
      <Head>
        <title>Facebook</title>

      </Head>

      <Header />
      <main>
        {/* sideBar */}
        {/* feed */}
        {/* widget */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // console.log(res);
  // const session = JSON.parse(res)
  return {
    props: {
      session
    }
  }
  // console.log(1)
  // const session = 123;
  // return {
  //   props: {
  //     // session
  //   }
  // }
}

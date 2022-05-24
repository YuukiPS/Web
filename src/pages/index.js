import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className="container">
        <Head>
          <title>Yuuki Private Server</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="title">
          Welcome to Yuuki Private Server
        </h1>

        <p className="description">
          This site is still under developer. please check regularly
        </p>

        <div className="grid">

          {allPostsData.map(({ id, date, title, short }) => (

            <a href={`/posts/${id}`} className="card">
              <h3>{title} &rarr;</h3>
              <p>{short}</p>
              {date}
            </a>

          ))}

        </div>

        <footer>Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </footer>

      </div>
    </Layout>
  )
}

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
      
      <Head>
        <title>Yuuki Private Server</title>
      </Head>

      <div class="home">

        <h1 class="title">
          Welcome to Yuuki Private Server
        </h1>

        <p class="description">
          This site is still under developer. please check regularly
        </p>

        <div class="grid">

          {allPostsData.map(({ id, date, title, short }) => (

            <a href={`/posts/${id}`} class="card">
              <h3>{title} &rarr;</h3>
              <p>{short}</p>
              {date}
            </a>

          ))}

        </div>
      </div>
    </Layout>
  )
}

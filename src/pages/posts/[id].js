import Layout, { siteTitle } from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (

    <Layout>

      <Head>
        <title>{postData.title} - {siteTitle}</title>
      </Head>

      <article class="container mx-auto">
        <h1 className={utilStyles.blog_judul}>{postData.title}</h1>        
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
      </article>      

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import Online from "../components/online";

import { getSortedPostsData } from "../lib/posts";

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
                <title>{siteTitle}</title>
            </Head>

            <h1 class="title">Welcome to {siteTitle}</h1>

            <p class="description">This site is still under developer. please check regularly</p>

            <div class="text-center py-3">
                <div class="stats bg-primary text-primary-content">
                    <Online server="sg" />
                    <Online server="eu" />
                    <Online server="tes" />
                </div>
            </div>

            <div class="grid">
                <div class="flex justify-center gap-2 py-3">
                    <a href="/command" class="btn btn-wide">
                        Web Command
                    </a>

                    <a href="/genshin" class="btn btn-wide">
                        Genshin Impact
                    </a>
                </div>

                <div class="flex justify-center gap-2 py-3">
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
    );
}

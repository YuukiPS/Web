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

            <h1 class="title py-10">Welcome to {siteTitle}</h1>

            <div class="text-center py-3">
                <div class="stats bg-primary text-primary-content">
                    <Online server="sg" />
                    <Online server="eu" />
                </div>
            </div>

            <div class="grid">
                <div class="flex justify-center gap-2">
                    <a href="/command" class="btn">
                        Web Command
                    </a>

                    <a href="/genshin" class="btn">
                        Genshin Impact
                    </a>

                    <a href="/starrail" class="btn">
                        Star Rail
                    </a>

                    <a href="https://github.com/akbaryahya/DockerGC" target="_blank" rel="sponsored" class="btn">
                        Create Server
                    </a>
                </div>

                <h2 class="text-center">Latest Announcement</h2>

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

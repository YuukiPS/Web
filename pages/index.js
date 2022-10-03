import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import Online from "../components/online";

export default function Home() {
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

                    <a href="https://github.com/akbaryahya/DockerGS" target="_blank" rel="sponsored" class="btn">
                        Create Server
                    </a>
                </div>

            </div>
        </Layout>
    );
}

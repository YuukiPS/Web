import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("/image/banner1.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl">Welcome to {siteTitle}</h1>
                        <p className="mb-5">
                            YuukiPS is a private server service where you can play other than the official server and
                            are freer to do anything.
                        </p>
                        <div class="flex justify-center gap-2">
                            <a href="/command" class="btn btn-primary">
                                Web Command
                            </a>

                            <a href="/genshin" class="btn btn-primary">
                                Play Genshin Impact
                            </a>

                            <a href="/starrail" class="btn btn-primary">
                                Play Star Rail
                            </a>

                            <a
                                href="https://github.com/akbaryahya/DockerGS"
                                target="_blank"
                                rel="sponsored"
                                class="btn btn-primary"
                            >
                                Create Server
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "YuukiPS";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Private Server Anime Game" />
                <script async src="https://arc.io/widget.min.js#CSTHLtEz"></script>
            </Head>

            {children}

            {home ? (
                <></>
            ) : (
                <>
                    <p class="text-center py-3">
                        <a href="/" class="btn btn-primary">
                            Back to Home
                        </a>
                    </p>
                </>
            )}

            <footer class="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>
                        <a class="float-left mr-2" href="https://discord.gg/tRYMG7Nm2D" target="_blank" rel="sponsored">
                            <img
                                src="https://discordapp.com/api/guilds/964119462188040202/widget.png?style=shield"
                                alt="DockerGS"
                            ></img>
                        </a>

                        <img class="float-left mr-2" src="//s4is.histats.com/stats/i/4713922.gif?4713922&103"></img>

                        <a href="https://stats.uptimerobot.com/L8Nx6FL4V" target="_blank" rel="sponsored">
                            <img
                                class="float-left"
                                alt="Uptime Robot ratio (30 days)"
                                src="https://img.shields.io/uptimerobot/ratio/m792813707-8d10db668102aad9bdb04f78?label=Server"
                            ></img>
                        </a>
                    </p>
                    <p>
                        <a href="https://yuuki.me/" target="_blank" rel="sponsored">
                            Made with <span class="heart">❤</span> in Indonesia,Makassar
                        </a>
                    </p>
                    <p>
                        Powered by{" "}
                        <a href="https://vercel.com/" target="_blank" rel="sponsored">
                            Vercel
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

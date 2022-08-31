import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "YuukiPS";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Private Server Anime Game" />
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

                        <img class="float-left mr-2" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fps.yuuki.me&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true"></img>

                        <a href="https://stats.uptimerobot.com/L8Nx6FL4V" target="_blank" rel="sponsored">
                            <img class="float-left" alt="Uptime Robot ratio (30 days)" src="https://img.shields.io/uptimerobot/ratio/m792377626-415dee0a93ca530b901863a7?label=Server"></img>
                        </a>

                    </p>
                    <p>
                        <a href="https://yuuki.me/" target="_blank" rel="sponsored">
                            Made with <span class="heart">❤</span> in Indonesia,Makassar
                        </a>
                    </p>
                    <p>
                        Powered by <a href="https://vercel.com/" target="_blank" rel="sponsored">Vercel</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

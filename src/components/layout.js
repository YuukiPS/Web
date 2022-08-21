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
                        <a href="https://discord.gg/tRYMG7Nm2D" target="_blank" rel="sponsored">
                            <img
                                src="https://discordapp.com/api/guilds/964119462188040202/widget.png?style=banner2" alt="DockerGS"
                            ></img>
                        </a>
                    </p>
                    <p>
                        <a href="https://yuuki.me/" target="_blank" rel="sponsored">
                            Made with <span class="heart">❤</span> in Indonesia,Makassar
                        </a>
                    </p>
                    <p>
                        Powered by Vercel |{" "}
                        <a href="https://stats.uptimerobot.com/L8Nx6FL4V" rel="nofollow" target="_blank">
                            Status Server
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

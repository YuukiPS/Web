import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Yuuki Server" />
            </Head>
            <header>

            </header>
            {children}
            {home ? (
                <>

                </>
            ) : (
                <>
                    <h3 class="text-center">
                        <Link href="/">
                            <button class="btn btn-primary">Back to Home</button>
                        </Link>
                    </h3>
                </>
            )}
            <footer class="text-center py-3">
                <p>
                    <a href="https://discord.gg/tRYMG7Nm2D">
                        <img src="https://discordapp.com/api/guilds/964119462188040202/widget.png?style=banner2" alt="DockerGC"></img>
                    </a>
                </p>
                <p class="mt-4">
                    <a href="https://yuuki.me/" target="_blank" rel="sponsored">Made with <span class="heart">❤</span> in Indonesia,Makassar</a>
                </p>
                <p>Powered by Vercel | <a href="https://stats.uptimerobot.com/L8Nx6FL4V" rel="nofollow" target="_blank">Status Server</a></p>

            </footer>
        </div>
    )
}
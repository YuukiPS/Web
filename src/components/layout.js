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
                <meta name="description" content="Learn how to build a personal website using Next.js" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>

                    </>
                ) : (
                    <>
                        <h3>
                            <Link href="/">
                                <a>Back to home</a>
                            </Link>
                        </h3>
                    </>
                )}
            </header>
            {children}
        </div>
    )
}
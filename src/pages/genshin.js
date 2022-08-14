import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function getLatest(region = "os") {
    const { data, error } = useSWR(`api/latest/${region}`, fetcher);
    return {
        info: data,
        isLoading: !error && !data,
        isError: error,
    };
}

export default function Genshin() {
    const raw_os = getLatest("os").info;
    const raw_cn = getLatest("cn").info;

    let version = "Unknown";

    let DL_OS = "#";
    let DL_CN = "#";

    // for OS
    if (raw_os) {
        if (raw_os.data) {
            if (raw_os.data.game) {
                if (raw_os.data.game.latest) {
                    var latest = raw_os.data.game.latest;

                    if (latest.version) {
                        version = latest.version;
                    }

                    if (latest.path) {
                        DL_OS = latest.path;
                    }
                }
            }
        }
    }

    // for CN
    if (raw_cn) {
        if (raw_cn.data) {
            if (raw_cn.data.game) {
                if (raw_cn.data.game.latest) {
                    var latest = raw_cn.data.game.latest;

                    if (latest.path) {
                        DL_CN = latest.path;
                    }
                }
            }
        }
    }

    return (
        <>
            <Layout genshin>
                <Head>
                    <title>
                        Download Genshin Impact {version} - {siteTitle}
                    </title>
                </Head>
                <h1 class="title">Genshin Impact</h1>
                <p class="description">Currently version {version}, download link below.</p>
                <div class="grid">
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN}`} class="btn btn-wide">
                            China
                        </a>
                    </div>
                </div>
                TODO
            </Layout>
        </>
    );
}

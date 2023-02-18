import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function getLatest(region = "os_cb") {
    return useSWR(`api/starrail/download/latest/${region}`, fetcher).data;
}

export default function Genshin() {    
    const raw_os_cb = getLatest("os_cb");

    //console.log(raw_os_cb);

    let version = "Unknown";

    let DL_CN = "#";
    let Decompressed_CN = "#";

    // for OS
    if (raw_os_cb) {
        if (raw_os_cb.data) {
            if (raw_os_cb.data.game) {
                if (raw_os_cb.data.game.latest) {
                    var latest = raw_os_cb.data.game.latest;

                    if (latest.version) {
                        version = latest.version;
                    }

                    if (latest.path) {
                        DL_CN = latest.path;
                    }

                    if (latest.decompressed_path) {
                        Decompressed_CN = latest.decompressed_path;
                    }
                }
            }
        }
    }

    // Server CloudFlare
    let Server1 = "https://file.yuuki.me/0:/Project/StarRail/Data";
    let Server1_CN_PC = Server1 + "/PC/" + version + "/Beta/Chinese";
    let DL_CN_Backup = Server1_CN_PC + "/" + DL_CN.substring(DL_CN.lastIndexOf("/") + 1);

    return (
        <>
            <Layout starrail>
                <Head>
                    <title>
                        Download Star Rail {version} - {siteTitle}
                    </title>
                </Head>

                <h1 class="title">Star Rail</h1>
                <p class="description">Currently version {version}, download link below.</p>

                <div class="container mx-sm">

                    <h3 class="text-center py-3">PC Full Data (DL: Server Original)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${DL_CN}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 class="text-center py-3">PC Full Data (DL: Server CF)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${DL_CN_Backup}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                </div>

            </Layout>
        </>
    );
}

import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function getLatest(region = "os") {
    return useSWR(`api/starrail/download/latest/${region}`, fetcher).data;
}

export default function Genshin() {    
    const raw_os = getLatest("os");

    //console.log(raw_os);

    let version = "Unknown";

    let DL_CN = "#";
    let Decompressed_CN = "#";

    let DL_OS = "#";
    let Decompressed_OS = "#";

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

                    if (latest.decompressed_path) {
                        Decompressed_OS = latest.decompressed_path;
                    }
                }
            }
        }
    }

    // Server CloudFlare
    let Server1 = "https://file2.yuuki.me/GD1/Project/StarRail/Data";
    let Server1_OS_PC = Server1 + "/PC/" + version + "/Global";
    let DL_OS_Backup = Server1_OS_PC + "/" + DL_OS.substring(DL_OS.lastIndexOf("/") + 1);

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
                        <a href={`${DL_OS}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 class="text-center py-3">PC Full Data (DL: Server CF)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_Backup}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                </div>

            </Layout>
        </>
    );
}

import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function getLatest(region = "os") {
    return useSWR(`api/latest/${region}`, fetcher).data;
}

export default function Genshin() {
    const raw_os = getLatest("os");
    const raw_cn = getLatest("cn");

    console.log(raw_os);

    let version = "Unknown";

    let DL_OS = "#";
    let DL_CN = "#";
    let Decompressed_OS = "#";
    let Decompressed_CN = "#";

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

    // for CN
    if (raw_cn) {
        if (raw_cn.data) {
            if (raw_cn.data.game) {
                if (raw_cn.data.game.latest) {
                    var latest = raw_cn.data.game.latest;

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

    let Server_PC = "https://file.yuuki.me/0:/Project/Grasscutter/Game%20Data/PC/";
    let Metadata_OS_PC_MOD = Server_PC + version + "/Release/Global/global-metadata.dat";
    let Metadata_CN_PC_MOD = Server_PC + version + "/Release/Chinese/global-metadata.dat";
    let DL_OS_Backup = Server_PC + version + "/Release/Global/" + DL_OS.substring(DL_OS.lastIndexOf("/") + 1);
    let DL_CN_Backup = Server_PC + version + "/Release/Chinese/" + DL_CN.substring(DL_CN.lastIndexOf("/") + 1);

    let Metadata_OS_PC_ORI = Decompressed_OS + "/GenshinImpact_Data/Native/Data/Metadata/global-metadata.dat";
    let Metadata_CN_PC_ORI = Decompressed_CN + "/GenshinImpact_Data/Native/Data/Metadata/global-metadata.dat";

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

                    <h3 class="text-center py-3">Full Version (Original)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 class="text-center py-3">Full Version (Alternative)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_Backup}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN_Backup}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 class="text-center py-3">Metadata (Patch)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${Metadata_OS_PC_MOD}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${Metadata_CN_PC_MOD}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 class="text-center py-3">Metadata (Original)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${Metadata_OS_PC_ORI}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${Metadata_CN_PC_ORI}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                </div>
            </Layout>
        </>
    );
}

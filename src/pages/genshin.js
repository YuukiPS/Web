import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function getLatest(region = "os") {
    return useSWR(`api/genshin/download/latest/${region}`, fetcher).data;
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

    // TODO: get api
    let Launcher_PC = "https://github.com/akbaryahya/YuukiLauncher/releases";
    let Launcher_PC2 = "https://github.com/Grasscutters/Cultivation/releases";

    // Server CloudFlare
    let Server1 = "https://file.yuuki.me/0:/Project/GenshinImpact/Data";

    let Server1_OS_PC = Server1 + "/PC/" + version + "/Release/Global";
    let Server1_CN_PC = Server1 + "/PC/" + version + "/Release/Chinese";

    let Server1_CN_AD = Server1 + "/Android/" + version + "/Release/Chinese";
    let Server1_OS_AD = Server1 + "/Android/" + version + "/Release/Global";

    let Metadata_OS_PC_MOD = Server1_OS_PC + "/Patch/global-metadata-patched.dat";
    let Metadata_CN_PC_MOD = Server1_CN_PC + "/Patch/global-metadata-patched.dat";

    let Metadata_OS_PC_ORI2 = Server1_OS_PC + "/Patch/global-metadata-original.dat";
    let Metadata_CN_PC_ORI2 = Server1_CN_PC + "/Patch/global-metadata-original.dat";

    // TODO: get version
    let DL_OS_AD = Server1_OS_AD + "/YuukiPS.apk";
    let DL_CN_AD = Server1_CN_AD + "/YuukiPS.apk";

    // Server Yuuki
    let Server2 = "https://drive.yuuki.me/api/public/dl/ZOrLF1E5/GenshinImpact/Data";

    let Server2_OS2 = Server2 + "/PC/" + version + "/Release/Global";
    let Server2_CN2 = Server2 + "/PC/" + version + "/Release/Chinese";

    let Server2_CN_AD = Server2 + "/Android/" + version + "/Release/Chinese";
    let Server2_OS_AD = Server2 + "/Android/" + version + "/Release/Global";

    let DL_OS_AD2 = Server2_OS_AD + "/YuukiPS.apk";
    let DL_CN_AD2 = Server2_CN_AD + "/YuukiPS.apk";

    let Metadata_OS_PC_MOD2 = Server2_OS2 + "/Patch/global-metadata-patched.dat";
    let Metadata_CN_PC_MOD2 = Server2_CN2 + "/Patch/global-metadata-patched.dat";

    let DL_OS_Backup = Server1_OS_PC + "/" + DL_OS.substring(DL_OS.lastIndexOf("/") + 1);
    let DL_CN_Backup = Server1_CN_PC + "/" + DL_CN.substring(DL_CN.lastIndexOf("/") + 1);

    // Server Official
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

                <div class="container mx-sm">
                    <h3 class="text-center py-3">PC Full Data (DL: Server Original)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 class="text-center py-3">PC Full Data (DL: Server CF)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_Backup}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN_Backup}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 class="text-center py-3">PC Launcher</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${Launcher_PC2}`} class="btn btn-wide">
                            Cultivation
                        </a>

                        <a href={`${Launcher_PC}`} class="btn btn-wide">
                            YuukiLauncher
                        </a>
                    </div>

                    <h3 class="text-center py-3">Android Launcher Mod No-Root (DL: Server Yuuki)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_AD2}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN_AD2}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 class="text-center py-3">Android Launcher Mod No-Root (DL: Server CF)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_AD}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN_AD}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h4 class="text-center py-3">
                        We recommend using Cultivation/YuukiLauncher instead using manual methods patch.
                    </h4>

                    <h3 class="text-center py-3">Metadata Patch (DL: Server Yuuki)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${Metadata_OS_PC_MOD2}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${Metadata_CN_PC_MOD2}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 class="text-center py-3">Metadata Patch (DL: Server CF)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${Metadata_OS_PC_MOD}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${Metadata_CN_PC_MOD}`} class="btn btn-wide">
                            China
                        </a>
                    </div>         

                    <h3 class="text-center py-3">Metadata (DL: Server Original)</h3>
                    <div class="flex justify-center gap-2 py-3">
                        <a href={`${Metadata_OS_PC_ORI}`} class="btn btn-wide">
                            Global
                        </a>

                        <a href={`${Metadata_CN_PC_ORI}`} class="btn btn-wide">
                            China
                        </a>
                    </div>

                    <p class="description">
                        <div className="new-line">
                            For downloading game data, we recommend always using original server instead Server CF
                            because it has a rate limit from Google Drive. and to download Launcher Mod use Yuuki
                            Server.
                        </div>
                        <div className="new-line">
                            Some links are also not available if that happens please wait for a few hours or contact
                            admin.
                        </div>
                    </p>
                </div>
            </Layout>
        </>
    );
}

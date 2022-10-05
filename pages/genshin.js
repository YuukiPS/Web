import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import useSWR, { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_OS = "https://ps.yuuki.me/api/genshin/download/latest/os";
const API_CN = "https://ps.yuuki.me/api/genshin/download/latest/cn";

// https://swr.vercel.app/examples/ssr
export async function getServerSideProps() {
    const repoInfo_OS = await fetcher(API_OS);
    const repoInfo_CN = await fetcher(API_CN);
    return {
        props: {
            fallback: {
                [API_OS]: repoInfo_OS,
                [API_CN]: repoInfo_CN,
            },
        },
    };
}

function Genshin() {
    const raw_os = useSWR(API_OS).data;
    const raw_cn = useSWR(API_CN).data;

    //console.log(raw_os);

    let version = "Unknown";

    let DL_OS = "#";
    let DL_CN = "#";
    let Decompressed_OS = "#";
    let Decompressed_CN = "#";
    let get_os;
    let get_cn;
    let IsPre = "";

    // for OS
    if (raw_os) {
        if (raw_os.data) {
            // check pre
            if (raw_os.data.pre_download_game) {
                get_os = raw_os.data.pre_download_game;
                IsPre = "(Preload)";
            } else {
                get_os = raw_os.data.game;
            }

            if (get_os) {
                if (get_os.latest) {
                    var latest = get_os.latest;

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
            // check pre
            if (raw_cn.data.pre_download_game) {
                get_cn = raw_cn.data.pre_download_game;
                IsPre = "(Preload)";
            } else {
                get_cn = raw_cn.data.game;
            }

            if (get_cn) {
                if (get_cn.latest) {
                    var latest = get_cn.latest;

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

    // URL Launcher
    let Launcher_PC = "https://github.com/akbaryahya/YuukiPS-Launcher/releases";
    let Launcher_PC2 = "https://github.com/Grasscutters/Cultivation/releases";

    // Server CloudFlare (Backup)
    let Server1 = "https://file.yuuki.me/0:/Project/GenshinImpact/Data";

    // Server Yuuki (Main)
    let Server2 = "https://drive.yuuki.me/api/public/dl/ZOrLF1E5/GenshinImpact/Data";

    // PC Server 1
    let Server1_OS_PC = Server1 + "/PC/" + version + "/Global";
    let Server1_CN_PC = Server1 + "/PC/" + version + "/Chinese";

    // PC Server 2
    let Server2_OS2 = Server2 + "/PC/" + version + "/Global";
    let Server2_CN2 = Server2 + "/PC/" + version + "/Chinese";

    // Android Server 1
    let Server1_CN_AD = Server1 + "/Android/" + version + "/Chinese";
    let Server1_OS_AD = Server1 + "/Android/" + version + "/Global";

    // Android Server 2
    let Server2_CN_AD = Server2 + "/Android/" + version + "/Chinese";
    let Server2_OS_AD = Server2 + "/Android/" + version + "/Global";

    // Metadata (PC)
    // - SV 1 (Patched)
    let Metadata_OS_PC_MOD = Server1_OS_PC + "/Patch/global-metadata-patched.dat";
    let Metadata_CN_PC_MOD = Server1_CN_PC + "/Patch/global-metadata-patched.dat";
    // - SV 1 (Original)
    let Metadata_OS_PC_ORI2 = Server1_OS_PC + "/Patch/global-metadata-original.dat";
    let Metadata_CN_PC_ORI2 = Server1_CN_PC + "/Patch/global-metadata-original.dat";
    // - SV 2 (Patched)
    let Metadata_OS_PC_MOD2 = Server2_OS2 + "/Patch/global-metadata-patched.dat";
    let Metadata_CN_PC_MOD2 = Server2_CN2 + "/Patch/global-metadata-patched.dat";

    // UserAssembly (PC)
    // - SV 1 (Patched)
    let UserAssembly_OS_PC_MOD = Server1_OS_PC + "/Patch/UserAssembly-patched.dll";
    let UserAssembly_CN_PC_MOD = Server1_CN_PC + "/Patch/UserAssembly-patched.dll";
    // - SV 1 (Original)
    let UserAssembly_OS_PC_ORI2 = Server1_OS_PC + "/Patch/UserAssembly-original.dll";
    let UserAssembly_CN_PC_ORI2 = Server1_CN_PC + "/Patch/UserAssembly-original.dll";
    // - SV 2 (Patched)
    let UserAssembly_OS_PC_MOD2 = Server2_OS2 + "/Patch/UserAssembly-patched.dll";
    let UserAssembly_CN_PC_MOD2 = Server2_CN2 + "/Patch/UserAssembly-patched.dll";

    // Launcher Android (Official)
    let DL_OS_AD = Server1_OS_AD + "/YuukiPS.apk";
    let DL_CN_AD = Server1_CN_AD + "/YuukiPS.apk";
    // Launcher Android (Unofficial)
    let DL_OS_AD_UNO = Server1_OS_AD + "/ChinaPS.apk";
    let DL_CN_AD_UNO  = Server1_CN_AD + "/ChinaPS.apk";   

    // Launcher Android (Official)
    let DL_OS_AD2 = Server2_OS_AD + "/YuukiPS.apk";
    let DL_CN_AD2 = Server2_CN_AD + "/YuukiPS.apk";
    // Launcher Android (Unofficial)
    let DL_OS_AD2_UNO = Server2_OS_AD + "/ChinaPS.apk";
    let DL_CN_AD2_UNO  = Server2_CN_AD + "/ChinaPS.apk";  

    let DL_OS_Backup = Server1_OS_PC + "/" + DL_OS.substring(DL_OS.lastIndexOf("/") + 1);
    let DL_CN_Backup = Server1_CN_PC + "/" + DL_CN.substring(DL_CN.lastIndexOf("/") + 1);

    // Server Official
    // Metadata
    let Metadata_OS_PC_ORI = Decompressed_OS + "/GenshinImpact_Data/Native/Data/Metadata/global-metadata.dat";
    let Metadata_CN_PC_ORI = Decompressed_CN + "/YuanShen_Data/Native/Data/Metadata/global-metadata.dat";
    // UserAssembly
    let UserAssembly_OS_PC_ORI = Decompressed_OS + "/GenshinImpact_Data/Native/UserAssembly.dll";
    let UserAssembly_CN_PC_ORI = Decompressed_CN + "/YuanShen_Data/Native/UserAssembly.dll";

    return (
        <>
            <Layout genshin>
                <Head>
                    <title>{"Download Genshin Impact " + version + " - " + siteTitle}</title>
                </Head>

                <h1 className="title">Genshin Impact</h1>
                <div className="description">
                    <div className="new-line">
                        Currently version {version} {IsPre}, download link below.
                    </div>
                    <div className="new-line">
                        <a href="https://www.yuuki.me/2022/09/how-to-connect-genshin-impact-private.html" target="_blank" rel="sponsored">
                            Tutorial Here
                        </a>
                    </div>
                </div>

                <div className="container mx-sm">
                    <h3 className="text-center py-3">PC Full Data (DL: Server Original)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN}`} className="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 className="text-center py-3">PC Full Data (DL: Server CF)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_Backup}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN_Backup}`} className="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 className="text-center py-3">PC Launcher</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${Launcher_PC2}`} className="btn btn-wide" target="_blank" rel="sponsored">
                            Cultivation
                        </a>

                        <a href={`${Launcher_PC}`} className="btn btn-wide" target="_blank" rel="sponsored">
                            YuukiPS-Launcher
                        </a>
                    </div>

                    <h3 className="text-center py-3">Android Launcher Mod No-Root (DL: Server Yuuki)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_AD2}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN_AD2}`} className="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 className="text-center py-3">Android Launcher Mod No-Root (DL: Server CF)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_AD}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN_AD}`} className="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h4 className="text-center py-3">
                        We recommend using Launcher instead using Manual Methods Patch.
                    </h4>

                    <h3 className="text-center py-3">UserAssembly Patch (DL: Server Yuuki)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${UserAssembly_OS_PC_MOD2}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${UserAssembly_CN_PC_MOD2}`} className="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 className="text-center py-3">UserAssembly Patch (DL: Server CF)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${UserAssembly_OS_PC_MOD}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${UserAssembly_CN_PC_MOD}`} className="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 className="text-center py-3">UserAssembly (DL: Server Original)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${UserAssembly_OS_PC_ORI}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${UserAssembly_CN_PC_ORI}`} className="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 className="text-center py-3">Metadata Patch (DL: Server Yuuki)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${Metadata_OS_PC_MOD2}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${Metadata_CN_PC_MOD2}`} className="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 className="text-center py-3">Metadata Patch (DL: Server CF)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${Metadata_OS_PC_MOD}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${Metadata_CN_PC_MOD}`} className="btn btn-wide">
                            China
                        </a>
                    </div>

                    <h3 className="text-center py-3">Metadata (DL: Server Original)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${Metadata_OS_PC_ORI}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${Metadata_CN_PC_ORI}`} className="btn btn-wide">
                            China
                        </a>
                    </div>

                    <div className="description">
                        <div className="new-line">
                            For downloading Game Data, we recommend always using Original Server instead Server CF
                            because it has a rate limit from Google Drive. and to download Launcher Mod use Yuuki
                            Server.
                        </div>
                        <div className="new-line">
                            Some links are also not available if that happens please wait for a few hours or contact
                            admin.Every time there is an update, link will be updated here so always check.
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default function App({ fallback }) {
    return (
        <SWRConfig value={{ fallback }}>
            <Genshin />
        </SWRConfig>
    );
}

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
    let Launcher_PC = "https://github.com/YuukiPS/Launcher-PC/releases";
    let Launcher_PC2 = "https://github.com/Grasscutters/Cultivation/releases";

    // Server CloudFlare (Backup)
    let Server1 = "https://file.yuuki.me/0:/Project/GenshinImpact/Data";

    // Server Yuuki 2
    let Server3 = "https://file2.yuuki.me/GD1/Project/GenshinImpact/Data";

    // Server Yuuki (Local)
    let Server2 = "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data";

    // PC Server 1
    let Server1_OS_PC = Server1 + "/PC/" + version + "/Global";
    let Server1_CN_PC = Server1 + "/PC/" + version + "/Chinese";

    // PC Server 2
    let Server2_OS2 = Server2 + "/PC/" + version + "/Global";
    let Server2_CN2 = Server2 + "/PC/" + version + "/Chinese";

    // PC Server 3
    let Server3_OS_PC = Server3 + "/PC/" + version + "/Global";
    let Server3_CN_PC = Server3 + "/PC/" + version + "/Chinese";

    let android_hack = version; //"3.2.0";

    // Android Server 1
    let Server1_CN_AD = Server1 + "/Android/" + android_hack + "/Chinese";
    let Server1_OS_AD = Server1 + "/Android/" + android_hack + "/Global";

    // Android Server 2
    let Server2_CN_AD = Server2 + "/Android/" + android_hack + "/Chinese";
    let Server2_OS_AD = Server2 + "/Android/" + android_hack + "/Global";

    // Android Server 3
    let Server3_CN_AD = Server3 + "/Android/" + android_hack + "/Chinese";
    let Server3_OS_AD = Server3 + "/Android/" + android_hack + "/Global";

    // iOS Server 2
    let Server2_CN_iOS = Server2 + "/IOS/" + version + "/Chinese";
    let Server2_OS_iOS = Server2 + "/IOS/" + version + "/Global";

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

    // RSA
    let RSA_OS_PC_MOD = Server2_OS2 + "/Patch/RSAPatch.dll";
    let RSA_CN_PC_MOD = Server2_CN2 + "/Patch/RSAPatch.dll";

    // Launcher Android (Official)
    let DL_OS_AD_MOD1 = Server1_OS_AD + "/YuukiPS.apk";
    let DL_OS_AD_MOD2 = Server1_OS_AD + "/YuukiPS_V2.apk";

    let DL_CN_AD = Server1_CN_AD + "/YuukiPS.apk";
    // Launcher Android (Unofficial)
    let DL_OS_AD_UNO = Server1_OS_AD + "/ChinesePS.apk";
    let DL_CN_AD_UNO = Server1_CN_AD + "/ChinesePS.apk";

    // Launcher Android (Official)
    let DL_OS_AD2_MOD1 = Server2_OS_AD + "/YuukiPS.apk";
    let DL_OS_AD2_MOD2 = Server2_OS_AD + "/YuukiPS_V2.apk";

    let DL_OS_iOS2_MOD1 = Server2_OS_iOS + "/YuukiPS.ipa";

    let DL_CN_AD2_MOD1 = Server2_CN_AD + "/YuukiPS.apk";
    let DL_CN_AD2_MOD2 = Server2_CN_AD + "/YuukiPS_V2.apk";

    // Launcher Android (Unofficial)
    let DL_OS_AD2_UNO = Server2_OS_AD + "/ChinesePS.apk";
    let DL_CN_AD2_UNO = Server2_CN_AD + "/ChinesePS.apk";

    // Data
    let DL_OS_AD3_DATA = Server3_OS_AD + "/Part";

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
                </div>

                <h3 className="text-center py-3">To connect to our server, please select device you are using</h3>

                <div className="flex justify-center gap-2 py-3">
                    <a
                        href={`https://doc.yuuki.me/docs/category/pc`}
                        className="btn btn-wide"
                        target="_blank"
                        rel="sponsored"
                    >
                        PC
                    </a>

                    <a
                        href={`https://doc.yuuki.me/docs/category/android`}
                        className="btn btn-wide"
                        target="_blank"
                        rel="sponsored"
                    >
                        Android
                    </a>

                    <a
                        href={`https://doc.yuuki.me/docs/tutorial-connect/ios`}
                        className="btn btn-wide"
                        target="_blank"
                        rel="sponsored"
                    >
                        iOS
                    </a>
                </div>
                <div className="flex justify-center gap-2 py-3">
                    <a
                        href={`https://file2.yuuki.me/Local_EU/Project/GenshinImpact/Tutorial`}
                        className="btn btn-wide"
                        target="_blank"
                        rel="sponsored"
                    >
                        Video Tutorial
                    </a>

                    <a
                        href={`https://ps2.yuuki.me/game/genshin`}
                        className="btn btn-wide"
                        target="_blank"
                        rel="sponsored"
                    >
                        Stats Server
                    </a>
                </div>

                <div className="container mx-sm">
                    <h3 className="text-center py-3">PC Launcher</h3>
                    <h4 className="text-center py-1">
                        Cultivation requires manual patch RSAPatch. (scroll down)
                        <br />
                        YuukiPS Launcher requires{" "}
                        <a
                            href={`https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime`}
                            target="_blank"
                            rel="sponsored"
                        >
                            NET 6 installation
                        </a>
                        .
                    </h4>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${Launcher_PC2}`} className="btn btn-wide" target="_blank" rel="sponsored">
                            Cultivation
                        </a>

                        <a href={`${Launcher_PC}`} className="btn btn-wide" target="_blank" rel="sponsored">
                            YuukiPS-Launcher
                        </a>
                    </div>

                    <h3 className="text-center py-3">Android Launcher</h3>
                    <h4 className="text-center py-1">
                        V1 Support Download Game Data directly and Clone but not support Localhost.
                        <br />
                        V2 Supports Direct Download, Localhost, Clone. (SOON)
                        <br />
                        (Google,Facebook login not working && can't play official server)
                    </h4>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_AD2_MOD1}`} className="btn btn-wide">
                            V1 (Global)
                        </a>
                        <a href={`${DL_CN_AD2_MOD1}`} className="btn btn-wide">
                            V1 (China)
                        </a>
                    </div>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_AD2_MOD2}`} className="btn btn-wide">
                            V2 (Global)
                        </a>
                        <a href={`${DL_CN_AD2_MOD2}`} className="btn btn-wide">
                            V2 (China)
                        </a>
                    </div>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_AD3_DATA}`} className="btn btn-wide">
                            Data Game (DL3)
                        </a>
                    </div>


                    <h4 className="text-center py-3">
                        We recommend using Launcher instead using manual methods!.
                        <br />
                        The list below is for people with experience in copying/pasting. if you don't understand don't
                        use/download.
                    </h4>

                    <h3 className="text-center py-3">PC Full Data (DL: Server Original)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS}`} className="btn btn-wide">
                            Global
                        </a>

                        <a href={`${DL_CN}`} className="btn btn-wide">
                            Chinese
                        </a>
                    </div>

                    <h3 className="text-center py-3">PC Full Data (DL: Server CF)</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${DL_OS_Backup}`} className="btn btn-wide">
                            Global
                        </a>
                        <a href={`${DL_CN_Backup}`} className="btn btn-wide">
                            Chinese
                        </a>
                    </div>

                    <h4 className="text-center py-3">
                        You don't need to download game data if you already have latest official version.
                    </h4>

                    <h3 className="text-center py-3">RSAPatch Patch for 3.3+</h3>
                    <div className="flex justify-center gap-2 py-3">
                        <a href={`${RSA_OS_PC_MOD}`} className="btn btn-wide">
                            Global
                        </a>
                    </div>

                    <div className="description">
                        <div className="new-line">
                            For downloading Game Data, we recommend always using Original Server instead Server CF
                            because it has a rate limit from Google Drive. and to download Launcher use Yuuki Server
                            (YK).
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

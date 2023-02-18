export default function handler(req, res) {
    // Requires a key from beta account, if you have one please contact me (me@yuuki.me) to help backup/mirror files from our server.
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.4.54",
                    path: "https://osbetadownload.yuanshen.com/client_app/download/beta_pc/20230209104617_EcFDKYaUedEM65rs/GenshinImpact_3.4.54_beta.zip",
                    size: "95573508096",
                    md5: "43572919ee80acc5b5bc4f1cc55fd5ba",
                    entry: "GenshinImpact.exe",
                    voice_packs: [],
                    decompressed_path: "",
                    segments: [],
                    package_size: "47781511168",
                },
                diffs: [
                    {
                        name: "game_3.4.52_3.4.54_hdiff_maQShsU0AowZguJr.zip",
                        version: "3.4.52",
                        path: "https://osbetadownload.yuanshen.com/client_app/beta_update/private/hk4e_global/44/game_3.4.52_3.4.54_hdiff_maQShsU0AowZguJr.zip",
                        size: "5015024519",
                        md5: "9D6FAE7B0B49367217365E246AB6D404",
                        is_recommended_update: false,
                        voice_packs: [],
                        package_size: "2317775235",
                    },
                    {
                        name: "game_3.4.53_3.4.54_hdiff_eNoOX40IQLf85db1.zip",
                        version: "3.4.53",
                        path: "https://osbetadownload.yuanshen.com/client_app/beta_update/private/hk4e_global/44/game_3.4.53_3.4.54_hdiff_eNoOX40IQLf85db1.zip",
                        size: "2243142487",
                        md5: "D15D23551838DD889DA4B9603A0CF4E5",
                        is_recommended_update: false,
                        voice_packs: [],
                        package_size: "950581658",
                    },
                ],
            },
            plugin: {
                plugins: [
                    {
                        name: "DXSETUP.zip",
                        version: "",
                        path: "https://autopatchhk.yuanshen.com/client_app/plugins/DXSETUP.zip",
                        size: "100647892",
                        md5: "CA2AC3835D7D7DA6CB8624FEFB177083",
                        entry: "",
                    },
                ],
                version: "1",
            },
            web_url: "https://betalauncher-os.hoyoverse.com/genshin",
            force_update: null,
            pre_download_game: null,
            deprecated_packages: [
                { name: "game_3.4.51_3.4.53_hdiff_EhgG7xsQAFWB5a16.zip", md5: "FBF52838EBC50C9671504C52285B990A" },
                { name: "game_3.4.52_3.4.53_hdiff_Ld9HnERiVy3peTwC.zip", md5: "27002DB23A693969FFC5E0A66084EE33" },
                { name: "GenshinImpact_3.4.53_beta.zip", md5: "b25cd5797c77822746ccd5e50ac8fdb4" },
                { name: "game_3.4.51_3.4.52_hdiff_roxk3S7cOpMm4fHb.zip", md5: "2AECC9680366428CE21015ED48532549" },
                { name: "GenshinImpact_3.4.52_beta.zip", md5: "49a57614080d83d3ee81817d58a0a87c" },
                { name: "GenshinImpact_3.4.52_beta.zip.001", md5: "ab3565f27f7bf557dc37429480108737" },
                { name: "GenshinImpact_3.4.52_beta.zip.002", md5: "ca4d73400798dafb84f017aa6aeaeb86" },
                { name: "GenshinImpact_3.4.52_beta.zip.003", md5: "1541d216a8960656cdd9d4c000e7c39c" },
                { name: "GenshinImpact_3.4.52_beta.zip.004", md5: "bea267f398137d69209aca384b67880e" },
                { name: "GenshinImpact_3.4.52_beta.zip.005", md5: "920a284d7ab4db96daed6afcb3f297c8" },
                { name: "game_3.4.50_3.4.51_hdiff_ton1qWYHUOFPjR93.zip", md5: "AC91AE93EAA5BAC4A64520971D3069AF" },
                { name: "GenshinImpact_3.4.51_beta.zip", md5: "a86c34328fead6ee18cc913098894a96" },
                { name: "GenshinImpact_3.4.50_beta.zip", md5: "22ed4d7824b1a2c711d6a3e2aa090c8d" },
            ],
            sdk: null,
            deprecated_files: [{ name: "GenshinImpact_Data/Plugins/PCGameSDK.dll", md5: "" }],
        },
    });
}

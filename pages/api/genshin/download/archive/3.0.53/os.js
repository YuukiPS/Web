export default function handler(req, res) {
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.0.53",
                    path: "https://autopatchhkbeta.yuanshen.com/client_app/download/beta_pc/20220908223037_qbm74bk1YwphAPhm/GenshinImpact_3.0.53_beta.zip",
                    size: "79467380736",
                    md5: "0e1581417956c99ec37b62c8d54b116e",
                    entry: "GenshinImpact.exe",
                    voice_packs: [],
                    decompressed_path:
                        "https://autopatchhkbeta.yuanshen.com/client_app/download/beta_pc/20220908223037_qbm74bk1YwphAPhm/ScatteredFiles",
                    segments: [],
                    package_size: "39728447488",
                },
                diffs: [
                    {
                        name: "game_3.0.52_3.0.53_hdiff_FbEqjLW1Unw3S6DK.zip",
                        version: "3.0.52",
                        path: "https://autopatchhkbeta.yuanshen.com/client_app/beta_update/hk4e_global/34/game_3.0.52_3.0.53_hdiff_FbEqjLW1Unw3S6DK.zip",
                        size: "4186640339",
                        md5: "F23FE1838DE5BA1727B61A7A1A6D6BFB",
                        is_recommended_update: false,
                        voice_packs: [],
                        package_size: "1887094264",
                    },
                    {
                        name: "game_3.0.51_3.0.53_hdiff_L1OXK2aZSJPApYwD.zip",
                        version: "3.0.51",
                        path: "https://autopatchhkbeta.yuanshen.com/client_app/beta_update/hk4e_global/34/game_3.0.51_3.0.53_hdiff_L1OXK2aZSJPApYwD.zip",
                        size: "7342846197",
                        md5: "827CF75BB5034BEBF4887F4FBD8CCCBC",
                        is_recommended_update: false,
                        voice_packs: [],
                        package_size: "3448881566",
                    },
                ],
            },
            plugin: {
                plugins: [
                    {
                        name: "DXSETUP.zip",
                        version: "",
                        path: "https://autopatchhkbeta.yuanshen.com/client_app/plugins/DXSETUP.zip",
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
                { name: "game_3.0.50_3.0.52_hdiff_ClZTokKnXhJapm3Q.zip", md5: "BFB90941ABE40424F5919FF3AC5E2784" },
                { name: "game_3.0.51_3.0.52_hdiff_9MdhNfQS6yn7TXml.zip", md5: "B6152DDAD60835CA1F907839AF1F63B4" },
                { name: "GenshinImpact_3.0.52_beta.zip", md5: "d67048c984c0602745d762cbb9ebe315" },
                { name: "GenshinImpact_3.0.52_beta.zip.001", md5: "6f6549ebebe90a36dd65655a7bb134c7" },
                { name: "GenshinImpact_3.0.52_beta.zip.002", md5: "68bfb0b0f560dd633076a63c02d66db1" },
                { name: "GenshinImpact_3.0.52_beta.zip.003", md5: "70d68ca4a6b216013a3e79732a2e1610" },
                { name: "GenshinImpact_3.0.52_beta.zip.004", md5: "d4e103e394b628ce5d0c7ca0b0c2f5c9" },
                { name: "game_3.0.50_3.0.51_hdiff_XoHbpS403sPYEw9K.zip", md5: "4E858FB0C0939827270936C66EE9EA95" },
                { name: "GenshinImpact_3.0.51_beta.zip", md5: "3729dc75e0df99459282f89b97eba5dd" },
                { name: "GenshinImpact_3.0.50_beta.zip", md5: "34f71441e4fce7756aa5a6a564f961a3" },
                { name: "GenshinImpact_3.0.50_beta.zip", md5: "a5685a02dda36d48f7ff027a506fc81a" },
            ],
            sdk: null,
            deprecated_files: [{ name: "GenshinImpact_Data/Plugins/PCGameSDK.dll", md5: "" }],
        },
    });
}

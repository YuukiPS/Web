export default function handler(req, res) {
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.0.53",
                    path: "https://autopatchcn.yuanshen.com/client_app/download/beta_pc/20220908212553_Eoy2bfeYCRwPXLd5/YuanShen_3.0.53_beta.zip",
                    size: "79467380736",
                    md5: "3846d2bb3828c84a85ce21e0fda37153",
                    entry: "YuanShen.exe",
                    voice_packs: [],
                    decompressed_path:
                        "https://autopatchcn.yuanshen.com/client_app/download/beta_pc/20220908212553_Eoy2bfeYCRwPXLd5/ScatteredFiles",
                    segments: [],
                    package_size: "39728447488",
                },
                diffs: [
                    {
                        name: "game_3.0.52_3.0.53_hdiff_MILey4lRX3kuD27j.zip",
                        version: "3.0.52",
                        path: "https://autopatchcn.yuanshen.com/client_app/beta_update/hk4e_cn/31/game_3.0.52_3.0.53_hdiff_MILey4lRX3kuD27j.zip",
                        size: "3940785219",
                        md5: "038351E397173D578376E699CDEFC1AD",
                        is_recommended_update: false,
                        voice_packs: [],
                        package_size: "1812204825",
                    },
                    {
                        name: "game_3.0.51_3.0.53_hdiff_ouj9gnz13GXQpyWd.zip",
                        version: "3.0.51",
                        path: "https://autopatchcn.yuanshen.com/client_app/beta_update/hk4e_cn/31/game_3.0.51_3.0.53_hdiff_ouj9gnz13GXQpyWd.zip",
                        size: "7093093642",
                        md5: "90B55193A5B6D775C5044DB13757CB66",
                        is_recommended_update: false,
                        voice_packs: [],
                        package_size: "3372229427",
                    },
                ],
            },
            plugin: {
                plugins: [
                    {
                        name: "DXSETUP.zip",
                        version: "",
                        path: "https://autopatchcn.yuanshen.com/client_app/plugins/DXSETUP.zip",
                        size: "100647892",
                        md5: "CA2AC3835D7D7DA6CB8624FEFB177083",
                        entry: "",
                    },
                ],
                version: "1",
            },
            web_url: "https://betalauncher.mihoyo.com/yuanshen",
            force_update: null,
            pre_download_game: null,
            deprecated_packages: [
                { name: "game_3.0.50_3.0.52_hdiff_ghnvHM2ECipskFUP.zip", md5: "5AE3EAA67CD8468D845F125D22CED68B" },
                { name: "game_3.0.51_3.0.52_hdiff_c71vLnGDot9AXYNT.zip", md5: "596F5C67DED521B955595437504A2B71" },
                { name: "YuanShen_3.0.52_beta.zip", md5: "8e489105321412f8b0dae67a702447cd" },
                { name: "YuanShen_3.0.52_beta.zip.001", md5: "9f07c27957c4c335698486ca88edad81" },
                { name: "YuanShen_3.0.52_beta.zip.002", md5: "f9d8f10b5c2a5102974f2a5ab1fef8b5" },
                { name: "YuanShen_3.0.52_beta.zip.003", md5: "e16cd669f5ff7836e41faef103333ae6" },
                { name: "YuanShen_3.0.52_beta.zip.004", md5: "c656995035bb404d60c03ff4c838bfbb" },
                { name: "game_3.0.50_3.0.51_hdiff_RXxvAHig5TVNarwL.zip", md5: "FF37AA3A5A101C8B9783CD61FE3A9F30" },
                { name: "YuanShen_3.0.51_beta.zip", md5: "5408f6159fbe936a2d5fb428f4c5bc30" },
                { name: "YuanShen_3.0.50_beta.zip", md5: "58581d133a9b03cbd4275c7ecf1bed3f" },
                { name: "YuanShen_3.0.50_beta.zip", md5: "3d497468390c9806f14730e67f1e40cf" },
            ],
            sdk: null,
            deprecated_files: [{ name: "YuanShen_Data/Plugins/PCGameSDK.dll", md5: "" }],
        },
    });
}

export default function handler(req, res) {
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "2.7.54",
                    path: "https://autopatchhkbeta.yuanshen.com/client_app/download/beta_pc/20220609103834_Nwav7NbgEAOWS3b2/GenshinImpact_2.7.54_beta.zip",
                    size: "60140027904",
                    md5: "be92e533156578b6d82839768a52eeb7",
                    entry: "GenshinImpact.exe",
                    voice_packs: [],
                    decompressed_path:
                        "https://autopatchhkbeta.yuanshen.com/client_app/download/beta_pc/20220609103834_Nwav7NbgEAOWS3b2/ScatteredFiles",
                    segments: [],
                    package_size: "30064771072",
                },
                diffs: [
                    {
                        name: "game_2.7.53_2.7.54_hdiff_WowROmNAziS2VQqP.zip",
                        version: "2.7.53",
                        path: "https://autopatchhkbeta.yuanshen.com/client_app/beta_update/hk4e_global/30/game_2.7.53_2.7.54_hdiff_WowROmNAziS2VQqP.zip",
                        size: "2639902017",
                        md5: "8E4D6C92813A6A6F86289BBDE3F2C347",
                        is_recommended_update: false,
                        voice_packs: [],
                        package_size: "1131182834",
                    },
                    {
                        name: "game_2.7.52_2.7.54_hdiff_Wqnj3HkvJsbXRAYf.zip",
                        version: "2.7.52",
                        path: "https://autopatchhkbeta.yuanshen.com/client_app/beta_update/hk4e_global/30/game_2.7.52_2.7.54_hdiff_Wqnj3HkvJsbXRAYf.zip",
                        size: "3126207765",
                        md5: "599C9F49FEFB9F379F55D9D347CDCD60",
                        is_recommended_update: false,
                        voice_packs: [],
                        package_size: "1373676572",
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
                { name: "game_2.7.51_2.7.53_hdiff_KTvacLbt95FysqSP.zip", md5: "4FCFAB6C0541551B3D2BC6EC76163E37" },
                { name: "game_2.7.52_2.7.53_hdiff_1YsFV6ErTaj4gyIK.zip", md5: "24D49B083A215E3D6910C736C06B0853" },
                { name: "GenshinImpact_2.7.53_beta.zip", md5: "81ec73e8b6dda9f9885653d92cdc0a48" },
                { name: "game_2.7.50_2.7.52_hdiff_V6en1IxgbrshzAR4.zip", md5: "22DF5FB99283B0DE612520AE71CE8A97" },
                { name: "game_2.7.51_2.7.52_hdiff_XaEvVTkF761R5PcN.zip", md5: "96DB3D38458046DC7B4B1B3E911CBB67" },
                { name: "GenshinImpact_2.7.52_beta.zip", md5: "31253e76816d6d802c98b32849624029" },
                { name: "GenshinImpact_2.7.52beta.zip.001", md5: "B74E902DDEC9C84C7BDB341D72B0E95F" },
                { name: "GenshinImpact_2.7.52beta.zip.002", md5: "BB06607F15FB6D7E7599B808CF43BB29" },
                { name: "GenshinImpact_2.7.52beta.zip.003", md5: "19E618B8B7A525041362326CF7288137" },
                { name: "game_2.7.50_2.7.51_hdiff_xP1tX2wvcYJiAkmS.zip", md5: "05C40C08F5FF3FB5990FAAE68A754CB1" },
                { name: "GenshinImpact_2.7.51_beta.zip", md5: "30798187729787a58e8b644e42738a46" },
                { name: "GenshinImpact_2.7.51beta.zip.001", md5: "9FEBFE09E224A28DFD3E99445D0BBBDD" },
                { name: "GenshinImpact_2.7.51beta.zip.002", md5: "A540610542D9FCC4BE39C561A1F86B63" },
                { name: "GenshinImpact_2.7.51beta.zip.003", md5: "9AD87BA47199D01042ACE1B16217115F" },
            ],
            sdk: null,
            deprecated_files: [{ name: "GenshinImpact_Data/Plugins/PCGameSDK.dll", md5: "" }],
        },
    });
}

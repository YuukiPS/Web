export default function handler(req, res) {
    //TODO: add auto update from dump postman
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "2.8.0",
                    path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220625012443_r2qBGYstD0u3Q9xK/GenshinImpact_2.8.0.zip",
                    size: "63618951412",
                    md5: "9515dedb7bdb9f845eda89eb720acc46",
                    entry: "GenshinImpact.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220625012443_r2qBGYstD0u3Q9xK/Audio_Chinese_2.8.0.zip",
                            size: "14892547440",
                            md5: "41b6406ecf5346601d3da7f56b898bf1",
                            package_size: "7441030840",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220625012443_r2qBGYstD0u3Q9xK/Audio_English(US)_2.8.0.zip",
                            size: "17168880106",
                            md5: "9a7e0ce110b7ada14ea789e9f25f41fe",
                            package_size: "8579197173",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220625012443_r2qBGYstD0u3Q9xK/Audio_Japanese_2.8.0.zip",
                            size: "18736543170",
                            md5: "c5a654755090b7e31de06a3b63042ad0",
                            package_size: "9363028705",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220625012443_r2qBGYstD0u3Q9xK/Audio_Korean_2.8.0.zip",
                            size: "14570424892",
                            md5: "0ce2f7dc9b109d0fcfd78ea026c511ca",
                            package_size: "7279969566",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220625012443_r2qBGYstD0u3Q9xK/ScatteredFiles",
                    segments: [],
                    package_size: "31804232826",
                },
                diffs: [
                    {
                        name: "game_2.7.0_2.8.0_hdiff_JvqEs0RiP9OrAbY7.zip",
                        version: "2.7.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_2.7.0_2.8.0_hdiff_JvqEs0RiP9OrAbY7.zip",
                        size: "9731057814",
                        md5: "DE4A307835CA6360772B1193D25BBBD3",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_2.7.0_2.8.0_hdiff_r7VPXQ36dRabwK2s.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_2.7.0_2.8.0_hdiff_r7VPXQ36dRabwK2s.zip",
                                size: "1735218876",
                                md5: "85D2435C4872DBA09418076C39D10607",
                                package_size: "807183319",
                            },
                            {
                                language: "en-us",
                                name: "en-us_2.7.0_2.8.0_hdiff_UXsOvlyKdAijwHhI.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_2.7.0_2.8.0_hdiff_UXsOvlyKdAijwHhI.zip",
                                size: "2061251270",
                                md5: "C8A53A870B36596BCC3D3C5B948F40EC",
                                package_size: "983416624",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_2.7.0_2.8.0_hdiff_ozU04InEe5NDf9RJ.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_2.7.0_2.8.0_hdiff_ozU04InEe5NDf9RJ.zip",
                                size: "1989050587",
                                md5: "30C7115D4D11BA012241F1EDB944F579",
                                package_size: "884419952",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_2.7.0_2.8.0_hdiff_YB9GdcHPnj4KisZo.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_2.7.0_2.8.0_hdiff_YB9GdcHPnj4KisZo.zip",
                                size: "1709920051",
                                md5: "5E97BFE5467897158D0A62A2D0702317",
                                package_size: "799861392",
                            },
                        ],
                        package_size: "4626132295",
                    },
                    {
                        name: "game_2.6.0_2.8.0_hdiff_CmcT2Qur7R3tM0hU.zip",
                        version: "2.6.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_2.6.0_2.8.0_hdiff_CmcT2Qur7R3tM0hU.zip",
                        size: "14520114359",
                        md5: "74DD4CB53CD9324FB10FD9AA4F3E3040",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_2.6.0_2.8.0_hdiff_s8EPzuG5wiTS4q3o.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_2.6.0_2.8.0_hdiff_s8EPzuG5wiTS4q3o.zip",
                                size: "12878989042",
                                md5: "620D748290EE67A3A093FB579F2E45A8",
                                package_size: "5997133811",
                            },
                            {
                                language: "en-us",
                                name: "en-us_2.6.0_2.8.0_hdiff_PLEAWdHpRrBMkYIc.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_2.6.0_2.8.0_hdiff_PLEAWdHpRrBMkYIc.zip",
                                size: "15238659422",
                                md5: "26E6BA3F0212D4374A235112A8A10DAE",
                                package_size: "7304927784",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_2.6.0_2.8.0_hdiff_pWurcwZs9FYNgxE8.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_2.6.0_2.8.0_hdiff_pWurcwZs9FYNgxE8.zip",
                                size: "15531165534",
                                md5: "F72E6B181591639252FB9A41E75BAC77",
                                package_size: "7043074291",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_2.6.0_2.8.0_hdiff_nYO46PmHztpgDBJZ.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_2.6.0_2.8.0_hdiff_nYO46PmHztpgDBJZ.zip",
                                size: "12564283512",
                                md5: "8D73AD4703B32DD82BF875803FBA28B0",
                                package_size: "5915987589",
                            },
                        ],
                        package_size: "7003836275",
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
            web_url: "https://genshin.hoyoverse.com/launcher",
            force_update: null,
            pre_download_game: null,
            deprecated_packages: [
                {
                    name: "game_2.5.0_2.7.0_hdiff_HteQ6VmOcgy1PYxw.zip",
                    md5: "60D6BD2FDEF9B1871D001CC1D1BB7649",
                },
                {
                    name: "zh-cn_2.5.0_2.7.0_hdiff_26vALtSnHzYTIopE.zip",
                    md5: "FDBD140A27DEE93DB9BDF9D9FC95DED1",
                },
                {
                    name: "en-us_2.5.0_2.7.0_hdiff_tTJgcA4QIPOHBpkS.zip",
                    md5: "B374AAAB4F443573C623EDFEE882CA6D",
                },
                {
                    name: "ja-jp_2.5.0_2.7.0_hdiff_CArIRcsvPhTtWqow.zip",
                    md5: "C0D9EB8E2AC29F54B10018FF35210C28",
                },
                {
                    name: "ko-kr_2.5.0_2.7.0_hdiff_wSYkWPafc6OUxILt.zip",
                    md5: "18F4E522ED93DC101ED7BE84231768CA",
                },
                {
                    name: "game_2.6.0_2.7.0_hdiff_zfS2oacTJG7DlBER.zip",
                    md5: "E32A59D9BD3D69E3064C3AD8782500A2",
                },
                {
                    name: "zh-cn_2.6.0_2.7.0_hdiff_QWVgNjwzprHPRKxL.zip",
                    md5: "E5E06F8D43968D435988DEDF08190166",
                },
                {
                    name: "en-us_2.6.0_2.7.0_hdiff_QscinXF9ASaB2POU.zip",
                    md5: "511A46CA5F0018F91E851A8A3B71CD95",
                },
                {
                    name: "ja-jp_2.6.0_2.7.0_hdiff_5yDzjBLv08wFRsmx.zip",
                    md5: "524FCE920566FAFA509CAE871CBFC18D",
                },
                {
                    name: "ko-kr_2.6.0_2.7.0_hdiff_GnYMmTClWghVKSQk.zip",
                    md5: "5CB6C9E7D02FF666C7C0D2A31A6058C0",
                },
                {
                    name: "GenshinImpact_2.7.0.zip",
                    md5: "17393ab15abde52b558569ff8f23f6fb",
                },
                {
                    name: "Audio_Chinese_2.7.0.zip",
                    md5: "a8eb4a8592708cf15ba936df4cc2f6da",
                },
                {
                    name: "Audio_English(US)_2.7.0.zip",
                    md5: "0428506078bab75030905b8fe9523e50",
                },
                {
                    name: "Audio_Japanese_2.7.0.zip",
                    md5: "13a596406adf91fbe229116bf572b366",
                },
                {
                    name: "Audio_Korean_2.7.0.zip",
                    md5: "e9c56a3ce4f848e717c6b98fa46b5109",
                },
                {
                    name: "game_2.4.0_2.6.0_hdiff_IzpvafMJqow6lB2U.zip",
                    md5: "4DA11D3D35F0BB57DEF558FD7A6F7E9A",
                },
                {
                    name: "zh-cn_2.4.0_2.6.0_hdiff_g8JQpXKHxcwSYTGn.zip",
                    md5: "EF110C07A6EF00B9087DE3ABA7B23F84",
                },
                {
                    name: "en-us_2.4.0_2.6.0_hdiff_1qv4AlX5YUhtgRbf.zip",
                    md5: "37AA00ADD23D6689FDA175C42614D740",
                },
                {
                    name: "ja-jp_2.4.0_2.6.0_hdiff_P5fa2yuwXFYKEnHN.zip",
                    md5: "405D17712B7A99A242D2ED6A4E4FEF1A",
                },
                {
                    name: "ko-kr_2.4.0_2.6.0_hdiff_sYVhI9LJd3yTe5EU.zip",
                    md5: "7D00D3DE1229B31D74B382BB8E09CEE7",
                },
                {
                    name: "game_2.5.0_2.6.0_hdiff_qr9GvX8ALUe6Puk3.zip",
                    md5: "F88329DBEB6BD6C9FF4B0960F3C715B2",
                },
                {
                    name: "zh-cn_2.5.0_2.6.0_hdiff_TMDQ3PkIdt4ABcXZ.zip",
                    md5: "BDBE3CA6D6C9ACA7BDCE0C283A81AAF7",
                },
                {
                    name: "en-us_2.5.0_2.6.0_hdiff_cTrqX6uxY1IH7zVs.zip",
                    md5: "1376CB2F948C6BE73533C7E69BF257FA",
                },
                {
                    name: "ja-jp_2.5.0_2.6.0_hdiff_gRwTfd4VsJXLv9uY.zip",
                    md5: "0525112A7CCCBF308559D18D3F990F0B",
                },
                {
                    name: "ko-kr_2.5.0_2.6.0_hdiff_20EY6qkb8IetwBK9.zip",
                    md5: "8B57824F9A11B28874672AA5AC418CFA",
                },
                {
                    name: "GenshinImpact_2.6.0.zip",
                    md5: "46a004aaf95c93311eb648a224cc2893",
                },
                {
                    name: "Audio_Chinese_2.6.0.zip",
                    md5: "6fcd939e55364f5708d4d74fcb278d45",
                },
                {
                    name: "Audio_English(US)_2.6.0.zip",
                    md5: "a5b0107483063799773dd0999b64074c",
                },
                {
                    name: "Audio_Japanese_2.6.0.zip",
                    md5: "8d4ccfb294e1e7f4f0de7085b49bd83e",
                },
                {
                    name: "Audio_Korean_2.6.0.zip",
                    md5: "45555740e4b8ff764c575a88161e61b6",
                },
                {
                    name: "game_2.3.0_2.5.0_hdiff_DFWAwSmaTj7n90Ru.zip",
                    md5: "1783AE2A17664EB4D2196E28F4994DA8",
                },
                {
                    name: "zh-cn_2.3.0_2.5.0_hdiff_6Y1XIaq27jKkMGsz.zip",
                    md5: "87799D22B33941A33CC0DB4BE6115B71",
                },
                {
                    name: "en-us_2.3.0_2.5.0_hdiff_5Mx1uveJjTQz9w3r.zip",
                    md5: "8051F53C1496C1210D97028F7E0E0234",
                },
                {
                    name: "ja-jp_2.3.0_2.5.0_hdiff_BA6UcSsKf2VRpLFH.zip",
                    md5: "7AEAEF6EDCD8503CA77A7A7E0EE89D2A",
                },
                {
                    name: "ko-kr_2.3.0_2.5.0_hdiff_7iPhaQjMp3fsRGdX.zip",
                    md5: "3B8C0FE950D41F3A0B81944BBD193E6C",
                },
                {
                    name: "game_2.4.0_2.5.0_hdiff_G7AskHSpFPiXwRyU.zip",
                    md5: "569330CC4968965AAE1D22BC4818C416",
                },
                {
                    name: "zh-cn_2.4.0_2.5.0_hdiff_Tx1P3el0KJ68Vu4Z.zip",
                    md5: "C9D7001F7092DD1339D7BC4277BDC46A",
                },
                {
                    name: "en-us_2.4.0_2.5.0_hdiff_FGN5bsVa0BZLKqEA.zip",
                    md5: "E2DCA89D1778D6BFEEC53CAC71D3F007",
                },
                {
                    name: "ja-jp_2.4.0_2.5.0_hdiff_t0MU7XpPc3ofbYwD.zip",
                    md5: "73838391BE6180DD5E31460D85EC1F3D",
                },
                {
                    name: "ko-kr_2.4.0_2.5.0_hdiff_0BLZeojnu59RDlx4.zip",
                    md5: "56187D555B09407D46547C862DCDCD76",
                },
                {
                    name: "GenshinImpact_2.5.0.zip",
                    md5: "b0cb5fcd518e5f5683ab6584402dbbdd",
                },
                {
                    name: "Audio_Chinese_2.5.0.zip",
                    md5: "472b1fea14214189a4798edbd2768114",
                },
                {
                    name: "Audio_English(US)_2.5.0.zip",
                    md5: "d16225a83dfd7ddc30ac038a6360e368",
                },
                {
                    name: "Audio_Japanese_2.5.0.zip",
                    md5: "1c459524cf7e7af831265d5d91c1c9da",
                },
                {
                    name: "Audio_Korean_2.5.0.zip",
                    md5: "b04409d31e728035adde08e18d30ef03",
                },
            ],
            sdk: null,
            deprecated_files: [
                {
                    name: "/GenshinImpact_Data/Plugins/PCGameSDK.dll",
                    md5: "",
                },
            ],
        },
    });
}

export default function handler(req, res) {
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.6.0",
                    path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/YuanShen_3.6.0.zip",
                    size: "102273657078",
                    md5: "a68674c957384fa6c23b3dee546b0513",
                    entry: "YuanShen.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/Audio_Chinese_3.6.0.zip",
                            size: "19273414084",
                            md5: "735e07c0825de173845c74e6c8df93f8",
                            package_size: "9631464162",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/Audio_English(US)_3.6.0.zip",
                            size: "22086617662",
                            md5: "7fc705925347051e2b024a96eb0b17a9",
                            package_size: "11038065951",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/Audio_Japanese_3.6.0.zip",
                            size: "24835396732",
                            md5: "451a6c6e14af2b27f8f65fc450d24896",
                            package_size: "12412455486",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/Audio_Korean_3.6.0.zip",
                            size: "18886867026",
                            md5: "a6632d2b3330ee25903ab554a1317c7c",
                            package_size: "9438190633",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/ScatteredFiles",
                    segments: [
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/YuanShen_3.6.0.zip.001",
                            md5: "80dd1cf9fed1b5de48e666f1185edb59",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/YuanShen_3.6.0.zip.002",
                            md5: "b8d925fc0541c2f1657603dda87b8572",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/YuanShen_3.6.0.zip.003",
                            md5: "5ff7ae3f0486fe4bea077619a1955ba6",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/YuanShen_3.6.0.zip.004",
                            md5: "35d0aa6d3497189f0277ee595691a118",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/YuanShen_3.6.0.zip.005",
                            md5: "fce6070e2603558653a44d5aa7a15667",
                        },
                    ],
                    package_size: "51131585659",
                },
                diffs: [
                    {
                        name: "game_3.5.0_3.6.0_hdiff_PA5aVIjrQcOsB0Dl.zip",
                        version: "3.5.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_3.5.0_3.6.0_hdiff_PA5aVIjrQcOsB0Dl.zip",
                        size: "21400234284",
                        md5: "200FD2B312EE6320CC7D08E379B8E836",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.5.0_3.6.0_hdiff_T42SJ6kBhvVtmXyW.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_3.5.0_3.6.0_hdiff_T42SJ6kBhvVtmXyW.zip",
                                size: "1057862555",
                                md5: "A957C0076230317F4774564F14C6FADA",
                                package_size: "487903852",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.5.0_3.6.0_hdiff_qXM2BUotFvT4k8CZ.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_3.5.0_3.6.0_hdiff_qXM2BUotFvT4k8CZ.zip",
                                size: "1626771268",
                                md5: "770B3658C6525ED310181847BD678C6A",
                                package_size: "776090972",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.5.0_3.6.0_hdiff_o7FRXhAymwkjE0ca.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_3.5.0_3.6.0_hdiff_o7FRXhAymwkjE0ca.zip",
                                size: "1296567234",
                                md5: "B2E0F4B753775ED44DA9F5E8E8FFF0C8",
                                package_size: "572455553",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.5.0_3.6.0_hdiff_SFVEzqZksLOboJ05.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_3.5.0_3.6.0_hdiff_SFVEzqZksLOboJ05.zip",
                                size: "1095410932",
                                md5: "2EFB252D51B82ACC7D128D83E16E4CDE",
                                package_size: "506102604",
                            },
                        ],
                        package_size: "10530979257",
                    },
                    {
                        name: "game_3.4.0_3.6.0_hdiff_eVodFPvQatMlri6O.zip",
                        version: "3.4.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_3.4.0_3.6.0_hdiff_eVodFPvQatMlri6O.zip",
                        size: "24214744779",
                        md5: "769FFADA3E283205E1475A91E3C268F3",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.4.0_3.6.0_hdiff_r6IoKGOdHtJEgq3N.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_3.4.0_3.6.0_hdiff_r6IoKGOdHtJEgq3N.zip",
                                size: "2087951785",
                                md5: "EBC49815FF5B34CE1F955C5F57410951",
                                package_size: "964244096",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.4.0_3.6.0_hdiff_2OStvF0rq5Py7pgz.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_3.4.0_3.6.0_hdiff_2OStvF0rq5Py7pgz.zip",
                                size: "2849058788",
                                md5: "6CE8F4697F9AF952DDD9E78C9A26F7D3",
                                package_size: "1361754644",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.4.0_3.6.0_hdiff_ouDVkZfasbgXl0N8.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_3.4.0_3.6.0_hdiff_ouDVkZfasbgXl0N8.zip",
                                size: "2569866562",
                                md5: "A2A6223FDBBFD89A5CBFABD5918C8BC0",
                                package_size: "1141821035",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.4.0_3.6.0_hdiff_VtIaTP8rwyOkuceE.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_3.4.0_3.6.0_hdiff_VtIaTP8rwyOkuceE.zip",
                                size: "2066499891",
                                md5: "2E828A54CA36548A701C993D3F5B4ABC",
                                package_size: "961778757",
                            },
                        ],
                        package_size: "11928588593",
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
            web_url: "https://ys.mihoyo.com/launcher",
            force_update: null,
            pre_download_game: {
                latest: {
                    name: "",
                    version: "3.7.0",
                    path: "",
                    size: "104378191054",
                    md5: "fb6039b653a5bfef4f70c23f17e0ed0b",
                    entry: "YuanShen.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/Audio_Chinese_3.7.0.zip",
                            size: "20153882380",
                            md5: "51d33e1e8067663c3f09fb7956fcec9e",
                            package_size: "10071698310",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/Audio_English(US)_3.7.0.zip",
                            size: "23181834322",
                            md5: "3ebab2e1fc91d01472ea810734cce597",
                            package_size: "11585674281",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/Audio_Japanese_3.7.0.zip",
                            size: "26102412084",
                            md5: "a3d14db529efa82bab3387ed1c6c2fa7",
                            package_size: "13045963162",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/Audio_Korean_3.7.0.zip",
                            size: "19724385650",
                            md5: "84892065eb6b2956caea2437b567e216",
                            package_size: "9856949945",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/ScatteredFiles",
                    segments: [
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/YuanShen_3.7.0.zip.001",
                            md5: "dc834ce6ae9dcaa270e8df47ffebc9b3",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/YuanShen_3.7.0.zip.002",
                            md5: "e75a932291593e7319624849ea0eae5c",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/YuanShen_3.7.0.zip.003",
                            md5: "07667eeebda9240d2bb2ad8139488500",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/YuanShen_3.7.0.zip.004",
                            md5: "aa9acc488bcc361ae25d75dbe6b9dff2",
                        },
                        {
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/YuanShen_3.7.0.zip.005",
                            md5: "8174ee47faa8dd5d2d4f9b13dc31ac50",
                        },
                    ],
                    package_size: "52183852647",
                },
                diffs: [
                    {
                        name: "game_3.6.0_3.7.0_hdiff_Hg6VUMKer0GyQzCs.zip",
                        version: "3.6.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_3.6.0_3.7.0_hdiff_Hg6VUMKer0GyQzCs.zip",
                        size: "18085330245",
                        md5: "E288D24871DE0262E09E7A59F7625FC5",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.6.0_3.7.0_hdiff_C2NJzhwt7iMx6I81.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_3.6.0_3.7.0_hdiff_C2NJzhwt7iMx6I81.zip",
                                size: "847108148",
                                md5: "48094077ADD9248C6106437CC04BAB7E",
                                package_size: "389158547",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.6.0_3.7.0_hdiff_1u8DG2WYrObnS3kZ.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_3.6.0_3.7.0_hdiff_1u8DG2WYrObnS3kZ.zip",
                                size: "1064820197",
                                md5: "AFE598760148732302D4917F4F2D8437",
                                package_size: "505993227",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.6.0_3.7.0_hdiff_ph64UKxvw7Nl3trV.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_3.6.0_3.7.0_hdiff_ph64UKxvw7Nl3trV.zip",
                                size: "1107811824",
                                md5: "F2009C6E61BD8636A01B182FFB79F6F4",
                                package_size: "503622090",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.6.0_3.7.0_hdiff_jH7oESbhKdvg9i2Z.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_3.6.0_3.7.0_hdiff_jH7oESbhKdvg9i2Z.zip",
                                size: "797499945",
                                md5: "DD0B96337AE148DDD641CB6CC70DCFE8",
                                package_size: "370203861",
                            },
                        ],
                        package_size: "8889209881",
                    },
                    {
                        name: "game_3.5.0_3.7.0_hdiff_nCAjMWYZUqVxTOPr.zip",
                        version: "3.5.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_3.5.0_3.7.0_hdiff_nCAjMWYZUqVxTOPr.zip",
                        size: "25982047713",
                        md5: "9A93315ED0EA7A74B6C37C2B90F3DCF1",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.5.0_3.7.0_hdiff_f3sMtjxaJK2TVFZ8.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_3.5.0_3.7.0_hdiff_f3sMtjxaJK2TVFZ8.zip",
                                size: "1894167705",
                                md5: "14FDF118FD70B2F7AA752C1FFF1579F7",
                                package_size: "876998841",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.5.0_3.7.0_hdiff_kmIFQdPJ5Ds7vKpa.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_3.5.0_3.7.0_hdiff_kmIFQdPJ5Ds7vKpa.zip",
                                size: "2679680874",
                                md5: "5C854BCF8F4CC3A7577B76AE311EE36B",
                                package_size: "1281449277",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.5.0_3.7.0_hdiff_r5SoMDPyCOcHuex4.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_3.5.0_3.7.0_hdiff_r5SoMDPyCOcHuex4.zip",
                                size: "2393818764",
                                md5: "93FF7FD91E446D2298692E0109398C2B",
                                package_size: "1076059110",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.5.0_3.7.0_hdiff_t70NsDQgMXxS9BE5.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_3.5.0_3.7.0_hdiff_t70NsDQgMXxS9BE5.zip",
                                size: "1882064745",
                                md5: "08C1E62C25E4CD36DDBCDB8CBE3DE02C",
                                package_size: "876165107",
                            },
                        ],
                        package_size: "12823632688",
                    },
                ],
            },
            deprecated_packages: [
                {
                    name: ".",
                    md5: "fb6039b653a5bfef4f70c23f17e0ed0b",
                },
                {
                    name: "YuanShen_3.7.0.zip.001",
                    md5: "dc834ce6ae9dcaa270e8df47ffebc9b3",
                },
                {
                    name: "YuanShen_3.7.0.zip.002",
                    md5: "e75a932291593e7319624849ea0eae5c",
                },
                {
                    name: "YuanShen_3.7.0.zip.003",
                    md5: "07667eeebda9240d2bb2ad8139488500",
                },
                {
                    name: "YuanShen_3.7.0.zip.004",
                    md5: "aa9acc488bcc361ae25d75dbe6b9dff2",
                },
                {
                    name: "YuanShen_3.7.0.zip.005",
                    md5: "8174ee47faa8dd5d2d4f9b13dc31ac50",
                },
                {
                    name: "Audio_Chinese_3.7.0.zip",
                    md5: "51d33e1e8067663c3f09fb7956fcec9e",
                },
                {
                    name: "Audio_English(US)_3.7.0.zip",
                    md5: "3ebab2e1fc91d01472ea810734cce597",
                },
                {
                    name: "Audio_Japanese_3.7.0.zip",
                    md5: "a3d14db529efa82bab3387ed1c6c2fa7",
                },
                {
                    name: "Audio_Korean_3.7.0.zip",
                    md5: "84892065eb6b2956caea2437b567e216",
                },
                {
                    name: "game_3.3.0_3.5.0_hdiff_NdjQTeCvMbqKpJPU.zip",
                    md5: "5542ED38164E623AED5E3DEA246F7544",
                },
                {
                    name: "zh-cn_3.3.0_3.5.0_hdiff_jzV0to5Q8y7E3FSu.zip",
                    md5: "CDB9CC6870B625DFB150A1DE404A7561",
                },
                {
                    name: "en-us_3.3.0_3.5.0_hdiff_kGLoDHenSgAJXIMi.zip",
                    md5: "1E3C9B22C9B10579EC6C52EB0F67959D",
                },
                {
                    name: "ja-jp_3.3.0_3.5.0_hdiff_YwCEOIdHamGMU5QL.zip",
                    md5: "F170EC24E77EEA5D8F45A2F89A345D0A",
                },
                {
                    name: "ko-kr_3.3.0_3.5.0_hdiff_IR2VGLNCd5eEpo7K.zip",
                    md5: "99E684C156079F249BFDCAED51F7A322",
                },
                {
                    name: "game_3.4.0_3.5.0_hdiff_RBj0E9Uo1POz7Yhv.zip",
                    md5: "1E83F87C5442A0295B723B7792D6B51B",
                },
                {
                    name: "zh-cn_3.4.0_3.5.0_hdiff_w4jItV7RJfQv3hgk.zip",
                    md5: "F412D355608E37AE39FA82C2E559371E",
                },
                {
                    name: "en-us_3.4.0_3.5.0_hdiff_nre0EBZXk6h8FLqW.zip",
                    md5: "11E12A906C92146D5B42F86B41E2F0F1",
                },
                {
                    name: "ja-jp_3.4.0_3.5.0_hdiff_RlTo2m4S6jdhJNrE.zip",
                    md5: "8859D71F34B2ACDB7D1B68584A297E40",
                },
                {
                    name: "ko-kr_3.4.0_3.5.0_hdiff_7sHCG30hR4VjuplP.zip",
                    md5: "9FC0CEF6828CE2EA9C3A60521C1E107C",
                },
                {
                    name: "YuanShen_3.5.0.zip",
                    md5: "11f9a0d145f5d9b48e16ce6365797fd0",
                },
                {
                    name: "YuanShen_3.5.0.zip.001",
                    md5: "0698a108cc1e2e6499b7332413ef8e4d",
                },
                {
                    name: "YuanShen_3.5.0.zip.002",
                    md5: "d57010e12344277390536de067e10caf",
                },
                {
                    name: "YuanShen_3.5.0.zip.003",
                    md5: "540e2a579f5fb66ec98a2b98db752065",
                },
                {
                    name: "YuanShen_3.5.0.zip.004",
                    md5: "dce694e4057b5857c8f2b0d30c4d8b58",
                },
                {
                    name: "YuanShen_3.5.0.zip.005",
                    md5: "d8383a9a7ca41c6ce32dc74fa6e7a13f",
                },
                {
                    name: "Audio_Chinese_3.5.0.zip",
                    md5: "72f11e238fb121676e1d7763fc92f934",
                },
                {
                    name: "Audio_English(US)_3.5.0.zip",
                    md5: "846214c62cbfc3d832cfd0f740c45956",
                },
                {
                    name: "Audio_Japanese_3.5.0.zip",
                    md5: "0db0c92557bf4601bc93e564a22fa38f",
                },
                {
                    name: "Audio_Korean_3.5.0.zip",
                    md5: "a333211d84effc592f34f81335265555",
                },
                {
                    name: "game_3.2.0_3.4.0_hdiff_tSlT9q25dMCs4iR1.zip",
                    md5: "79F32D1BC496C05584F6A9A455AA2340",
                },
                {
                    name: "zh-cn_3.2.0_3.4.0_hdiff_8HCnhOvVDjYPZJpX.zip",
                    md5: "26281EB3156F06A8CCE542FA44EE926A",
                },
                {
                    name: "en-us_3.2.0_3.4.0_hdiff_1IavOL7mSrCybnt4.zip",
                    md5: "FAD6D46EAC3246FA0261C990A708FA8B",
                },
                {
                    name: "ja-jp_3.2.0_3.4.0_hdiff_p9ZDjlyLHOMsz2XU.zip",
                    md5: "6FEA878B10D70B436935398514C2D2E0",
                },
                {
                    name: "ko-kr_3.2.0_3.4.0_hdiff_vspbr2FeNV3GIOf6.zip",
                    md5: "325E73B52F698760E2DC39E086AF0CBA",
                },
                {
                    name: "game_3.3.0_3.4.0_hdiff_DaEKFYMVbz81ef7L.zip",
                    md5: "017E260FF59BDD15B2574E43A0A35584",
                },
                {
                    name: "zh-cn_3.3.0_3.4.0_hdiff_3thzDy9FfUIjxplW.zip",
                    md5: "FAF43839C1083FFC47164C177A22558E",
                },
                {
                    name: "en-us_3.3.0_3.4.0_hdiff_D9chslZxCk85QAPN.zip",
                    md5: "7F4095C270EC96D7C0335B79FEB4ACB6",
                },
                {
                    name: "ja-jp_3.3.0_3.4.0_hdiff_RyhFwbu8xqUVTgcL.zip",
                    md5: "C7903419597C54A67E286D1F50AC24A2",
                },
                {
                    name: "ko-kr_3.3.0_3.4.0_hdiff_I9asKmLXGcPgNuyq.zip",
                    md5: "BE59F12D59390E23DCF10A56738E765C",
                },
                {
                    name: "YuanShen_3.4.0.zip",
                    md5: "a04c6e422656a44924bad95f8648cf9e",
                },
                {
                    name: "YuanShen_3.4.0.zip.001",
                    md5: "c6dffa721b9610a84652258b66402475",
                },
                {
                    name: "YuanShen_3.4.0.zip.002",
                    md5: "fbd1f0dfac83ca48fda7cf49ccb40052",
                },
                {
                    name: "YuanShen_3.4.0.zip.003",
                    md5: "157aced7e87c852a5af4fc617fd85f55",
                },
                {
                    name: "YuanShen_3.4.0.zip.004",
                    md5: "22a2d144a7cc4af59aa401f3c0eff733",
                },
                {
                    name: "YuanShen_3.4.0.zip.005",
                    md5: "10129a5815eadf8a4571b8652c51c092",
                },
                {
                    name: "Audio_Chinese_3.4.0.zip",
                    md5: "56dce864d6eb4780fd2f055263b1ca39",
                },
                {
                    name: "Audio_English(US)_3.4.0.zip",
                    md5: "06ca7f33819fbe54f84a3327a927e92d",
                },
                {
                    name: "Audio_Japanese_3.4.0.zip",
                    md5: "ebd0a2fbeff04a2a36ad9d219c054a91",
                },
                {
                    name: "Audio_Korean_3.4.0.zip",
                    md5: "c93a3cd67024cdc061b87a8c4d5636e6",
                },
            ],
            sdk: null,
            deprecated_files: [
                {
                    name: "YuanShen_Data/Plugins/d3dcompiler_43.dll",
                    md5: "",
                },
                {
                    name: "YuanShen_Data/Plugins/PCGameSDK.dll",
                    md5: "",
                },
                {
                    name: "YuanShen_Data/Plugins/sqlite3.dll",
                    md5: "",
                },
                {
                    name: "YuanShen_Data/Plugins/InControlNative.dll",
                    md5: "",
                },
                {
                    name: "YuanShen_Data/Plugins/widevinecdmadapter.dll",
                    md5: "",
                },
                {
                    name: "YuanShen_Data/Plugins/XInputInterface64.dll",
                    md5: "",
                },
                {
                    name: "mhyprot2.Sys",
                    md5: "",
                },
                {
                    name: "YuanShen_Data/Plugins/metakeeper.dll",
                    md5: "",
                },
            ],
        },
    });
}

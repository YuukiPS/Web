export default function handler(req, res) {
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.6.0",
                    path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/GenshinImpact_3.6.0.zip",
                    size: "102273657078",
                    md5: "2686795437c83749e975333216d99edf",
                    entry: "GenshinImpact.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/Audio_Chinese_3.6.0.zip",
                            size: "19273414084",
                            md5: "69a082ebb35929d1392318c2c4ec045c",
                            package_size: "9631464162",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/Audio_English(US)_3.6.0.zip",
                            size: "22086617662",
                            md5: "91efd98ed1eb3b39ab93588789d402da",
                            package_size: "11038065951",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/Audio_Japanese_3.6.0.zip",
                            size: "24835396732",
                            md5: "565cb3fddbe213c49308749b44e9a562",
                            package_size: "12412455486",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/Audio_Korean_3.6.0.zip",
                            size: "18886867026",
                            md5: "7fc1859050f138fb13fe4eb6e2fb8573",
                            package_size: "9438190633",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/ScatteredFiles",
                    segments: [
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/GenshinImpact_3.6.0.zip.001",
                            md5: "dfb4a52b7c1df52b575399c88387a834",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/GenshinImpact_3.6.0.zip.002",
                            md5: "732de764330a7e91caf797ea42d033eb",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/GenshinImpact_3.6.0.zip.003",
                            md5: "996ba698498e61f5c17e3930a34611a1",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/GenshinImpact_3.6.0.zip.004",
                            md5: "6af5899787aa820f55b03a2778a99d3e",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/GenshinImpact_3.6.0.zip.005",
                            md5: "4270ab2beb4fbeec4b97018c3c4dc66a",
                        },
                    ],
                    package_size: "51131585659",
                },
                diffs: [
                    {
                        name: "game_3.5.0_3.6.0_hdiff_70c4ojbL1mfTwY3Q.zip",
                        version: "3.5.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_3.5.0_3.6.0_hdiff_70c4ojbL1mfTwY3Q.zip",
                        size: "21666517915",
                        md5: "CE07ABFA216757B35DA43401868DC65E",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.5.0_3.6.0_hdiff_hJrb6Zzsq0m7GQHK.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_3.5.0_3.6.0_hdiff_hJrb6Zzsq0m7GQHK.zip",
                                size: "1057863658",
                                md5: "FA4420603967AAE67451050B5A61C806",
                                package_size: "487904230",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.5.0_3.6.0_hdiff_xS3HAI51ksDQOl8c.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_3.5.0_3.6.0_hdiff_xS3HAI51ksDQOl8c.zip",
                                size: "1626772501",
                                md5: "500FA465149A7DCC6A7A72B859B82302",
                                package_size: "776091435",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.5.0_3.6.0_hdiff_6ewT53aBmuNbdPJE.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_3.5.0_3.6.0_hdiff_6ewT53aBmuNbdPJE.zip",
                                size: "1296568385",
                                md5: "432385E20612038143E664AE6717E16D",
                                package_size: "572455964",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.5.0_3.6.0_hdiff_GDlPHvUgyXQwje9C.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_3.5.0_3.6.0_hdiff_GDlPHvUgyXQwje9C.zip",
                                size: "1095412092",
                                md5: "30E21B012374F55FD5D123A2840A2E04",
                                package_size: "506103019",
                            },
                        ],
                        package_size: "10611646760",
                    },
                    {
                        name: "game_3.4.0_3.6.0_hdiff_t30d4K7DUnwNcmja.zip",
                        version: "3.4.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_3.4.0_3.6.0_hdiff_t30d4K7DUnwNcmja.zip",
                        size: "24460086311",
                        md5: "69609F7A420B46EBE8DDD256625BED63",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.4.0_3.6.0_hdiff_wsQFNvrIdV4qLKCG.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_3.4.0_3.6.0_hdiff_wsQFNvrIdV4qLKCG.zip",
                                size: "2087952933",
                                md5: "62780D82AF053E46483B2F7B3F3148C0",
                                package_size: "964244514",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.4.0_3.6.0_hdiff_gmhB8dVWQJRKlyLj.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_3.4.0_3.6.0_hdiff_gmhB8dVWQJRKlyLj.zip",
                                size: "2849060049",
                                md5: "146CCE1F94FF0499E582666C066F59AD",
                                package_size: "1361755135",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.4.0_3.6.0_hdiff_akC64FrYKsS3ow5M.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_3.4.0_3.6.0_hdiff_akC64FrYKsS3ow5M.zip",
                                size: "2569867756",
                                md5: "AC2BD9BCDAE4185766F3A27AC5E206D9",
                                package_size: "1141821484",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.4.0_3.6.0_hdiff_bf2wae6FH7npkOgt.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_3.4.0_3.6.0_hdiff_bf2wae6FH7npkOgt.zip",
                                size: "2066501201",
                                md5: "9C5A77C7CB77DA697764B5E57EE5D69C",
                                package_size: "961779282",
                            },
                        ],
                        package_size: "12003227559",
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
            pre_download_game: {
                latest: {
                    name: "",
                    version: "3.7.0",
                    path: "",
                    size: "104378191054",
                    md5: "f4c838b84ffa21a62f8e3ff5c2af7c7b",
                    entry: "GenshinImpact.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/Audio_Chinese_3.7.0.zip",
                            size: "20153882380",
                            md5: "2b0fd39275a2974fc85ee1e9735b42b7",
                            package_size: "10071698310",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/Audio_English(US)_3.7.0.zip",
                            size: "23181834322",
                            md5: "43b360b3f5c71feb951a204f81a1d232",
                            package_size: "11585674281",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/Audio_Japanese_3.7.0.zip",
                            size: "26102412084",
                            md5: "516ad9333520473c6ff3ac7fe6d1a5e9",
                            package_size: "13045963162",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/Audio_Korean_3.7.0.zip",
                            size: "19724385650",
                            md5: "07251fd076e60111716c4ca970965a87",
                            package_size: "9856949945",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/ScatteredFiles",
                    segments: [
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/GenshinImpact_3.7.0.zip.001",
                            md5: "bd193afb5cf2d16e1e048bbdf07dde66",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/GenshinImpact_3.7.0.zip.002",
                            md5: "63353ee59d60619313fc9032fa87d697",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/GenshinImpact_3.7.0.zip.003",
                            md5: "989d7df8b11fe781322eae27260c86f3",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/GenshinImpact_3.7.0.zip.004",
                            md5: "91fc90cb6f09712619f9943a5b1603cb",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/GenshinImpact_3.7.0.zip.005",
                            md5: "7350eb36815994a0fe93ea94544198bf",
                        },
                    ],
                    package_size: "52183852647",
                },
                diffs: [
                    {
                        name: "game_3.6.0_3.7.0_hdiff_SIQuq5CfVPEXnBNy.zip",
                        version: "3.6.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_3.6.0_3.7.0_hdiff_SIQuq5CfVPEXnBNy.zip",
                        size: "18346889862",
                        md5: "F9C4F21FA785FBC48845C44B13472B9E",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.6.0_3.7.0_hdiff_a8YmD1HvK69sp7cS.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_3.6.0_3.7.0_hdiff_a8YmD1HvK69sp7cS.zip",
                                size: "847109251",
                                md5: "27247AD4E102F7DFC927C265E9191271",
                                package_size: "389158915",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.6.0_3.7.0_hdiff_K8ei6yaM5B1Edj9g.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_3.6.0_3.7.0_hdiff_K8ei6yaM5B1Edj9g.zip",
                                size: "1064821368",
                                md5: "E6FE450C4E6D7CD04051E1236CDA4FD0",
                                package_size: "505993638",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.6.0_3.7.0_hdiff_x3n1GpVAtsylQwv7.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_3.6.0_3.7.0_hdiff_x3n1GpVAtsylQwv7.zip",
                                size: "1107812958",
                                md5: "FE3A4C481F33F3DAE646D164B4491685",
                                package_size: "503622479",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.6.0_3.7.0_hdiff_cT17sLmPlZfKkQuJ.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_3.6.0_3.7.0_hdiff_cT17sLmPlZfKkQuJ.zip",
                                size: "797501181",
                                md5: "19BD9C8B418ADCE59433BAB4BF3D402A",
                                package_size: "370204317",
                            },
                        ],
                        package_size: "8968833946",
                    },
                    {
                        name: "game_3.5.0_3.7.0_hdiff_fy67SAIbUXdo1kMp.zip",
                        version: "3.5.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_3.5.0_3.7.0_hdiff_fy67SAIbUXdo1kMp.zip",
                        size: "26243616055",
                        md5: "BCEC39F882910CDDDE95D05272DC7F69",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.5.0_3.7.0_hdiff_IfGdXle2ZrkW96Fv.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_3.5.0_3.7.0_hdiff_IfGdXle2ZrkW96Fv.zip",
                                size: "1894168853",
                                md5: "4326EB9E996FFDF0520A918E014DBB37",
                                package_size: "876999249",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.5.0_3.7.0_hdiff_dLDNvaoEmZBXePk5.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_3.5.0_3.7.0_hdiff_dLDNvaoEmZBXePk5.zip",
                                size: "2679682179",
                                md5: "325BB01DB9737EA2BE14F4D2D2F180C4",
                                package_size: "1281449787",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.5.0_3.7.0_hdiff_fqPtTy5jHG8412og.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_3.5.0_3.7.0_hdiff_fqPtTy5jHG8412og.zip",
                                size: "2393819988",
                                md5: "4645CAD784D4776C2E7C48A08867A466",
                                package_size: "1076059569",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.5.0_3.7.0_hdiff_5ZaDdoGt2q7yCJwP.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_3.5.0_3.7.0_hdiff_5ZaDdoGt2q7yCJwP.zip",
                                size: "1882066074",
                                md5: "0F2B640755F87BB04B49190C677A36D1",
                                package_size: "876165636",
                            },
                        ],
                        package_size: "12903264338",
                    },
                ],
            },
            deprecated_packages: [
                {
                    name: ".",
                    md5: "f4c838b84ffa21a62f8e3ff5c2af7c7b",
                },
                {
                    name: "GenshinImpact_3.7.0.zip.001",
                    md5: "bd193afb5cf2d16e1e048bbdf07dde66",
                },
                {
                    name: "GenshinImpact_3.7.0.zip.002",
                    md5: "63353ee59d60619313fc9032fa87d697",
                },
                {
                    name: "GenshinImpact_3.7.0.zip.003",
                    md5: "989d7df8b11fe781322eae27260c86f3",
                },
                {
                    name: "GenshinImpact_3.7.0.zip.004",
                    md5: "91fc90cb6f09712619f9943a5b1603cb",
                },
                {
                    name: "GenshinImpact_3.7.0.zip.005",
                    md5: "7350eb36815994a0fe93ea94544198bf",
                },
                {
                    name: "Audio_Chinese_3.7.0.zip",
                    md5: "2b0fd39275a2974fc85ee1e9735b42b7",
                },
                {
                    name: "Audio_English(US)_3.7.0.zip",
                    md5: "43b360b3f5c71feb951a204f81a1d232",
                },
                {
                    name: "Audio_Japanese_3.7.0.zip",
                    md5: "516ad9333520473c6ff3ac7fe6d1a5e9",
                },
                {
                    name: "Audio_Korean_3.7.0.zip",
                    md5: "07251fd076e60111716c4ca970965a87",
                },
                {
                    name: "game_3.3.0_3.5.0_hdiff_jFk1USEdyHepP3uG.zip",
                    md5: "DA20792BCFCF890583F66EFBC5A6B5E4",
                },
                {
                    name: "zh-cn_3.3.0_3.5.0_hdiff_DuVQLAq1nkay7Yo4.zip",
                    md5: "296710D5DEAF87617932F8A609B1EA99",
                },
                {
                    name: "en-us_3.3.0_3.5.0_hdiff_ep1y7wDFiLnjb5rW.zip",
                    md5: "CAE41A4A77AF6FC62FA0884CB3DF3BAF",
                },
                {
                    name: "ja-jp_3.3.0_3.5.0_hdiff_lcO03yi4gv5jhmwG.zip",
                    md5: "78B460ABDB60A27290384AF109083327",
                },
                {
                    name: "ko-kr_3.3.0_3.5.0_hdiff_YVM8xuZhWgNnjHAI.zip",
                    md5: "7C039CCEABD052E9A29E1C69A5F7CB53",
                },
                {
                    name: "game_3.4.0_3.5.0_hdiff_rXYAZvelstu54E2c.zip",
                    md5: "50D65CEF9F0EC192725876B7EB2F8650",
                },
                {
                    name: "zh-cn_3.4.0_3.5.0_hdiff_9T2Ac7RCKs0651G8.zip",
                    md5: "E9CD6F32E5541ADF1E77A007A681EB24",
                },
                {
                    name: "en-us_3.4.0_3.5.0_hdiff_bCHgs9NcSPI54hK3.zip",
                    md5: "9490781F902796999B7D290CDC6C6038",
                },
                {
                    name: "ja-jp_3.4.0_3.5.0_hdiff_7GSo18Z9C2rOiDjp.zip",
                    md5: "7452317BF85BDA6764AE6006D75950F2",
                },
                {
                    name: "ko-kr_3.4.0_3.5.0_hdiff_CvwZI7isgHbkAanc.zip",
                    md5: "0B3129DDBF83F8735231966BE080723A",
                },
                {
                    name: "GenshinImpact_3.5.0.zip",
                    md5: "1e6334da5268caf47e17d2fa12e9bef1",
                },
                {
                    name: "GenshinImpact_3.5.0.zip.001",
                    md5: "4551716f735af6a5cf8b8565250d1eca",
                },
                {
                    name: "GenshinImpact_3.5.0.zip.002",
                    md5: "869529539a9cedde466b68ad5c7de4d1",
                },
                {
                    name: "GenshinImpact_3.5.0.zip.003",
                    md5: "c2704558567c6c02c0c676acf23d8efa",
                },
                {
                    name: "GenshinImpact_3.5.0.zip.004",
                    md5: "2bf1060bf1b0d743562b3330eb6e2f7d",
                },
                {
                    name: "GenshinImpact_3.5.0.zip.005",
                    md5: "0f5059a7538b35e959f7a4c0c4acccf4",
                },
                {
                    name: "Audio_Chinese_3.5.0.zip",
                    md5: "fa18f4adccdbffb7d19ff4f077250571",
                },
                {
                    name: "Audio_English(US)_3.5.0.zip",
                    md5: "b04087a83c0a9d588bd4dff665a2aba2",
                },
                {
                    name: "Audio_Japanese_3.5.0.zip",
                    md5: "d8b640026a782cba817e59a196a6a747",
                },
                {
                    name: "Audio_Korean_3.5.0.zip",
                    md5: "b947fc7b6dac078cc863223827e5c5f0",
                },
                {
                    name: "game_3.2.0_3.4.0_hdiff_2Tv5e1BCLFnW0dPG.zip",
                    md5: "528D54CB8D09A887807A7941C1062186",
                },
                {
                    name: "zh-cn_3.2.0_3.4.0_hdiff_sJLa0SElyqR5dFBo.zip",
                    md5: "7B92B08C915C91A24D9BDC50FE5158DD",
                },
                {
                    name: "en-us_3.2.0_3.4.0_hdiff_Onc2ZSWqiHMLh80p.zip",
                    md5: "09219429714F8F60476ABC6409406C54",
                },
                {
                    name: "ja-jp_3.2.0_3.4.0_hdiff_QUa8erWEPHFwgGvc.zip",
                    md5: "D260225C9BC550C471E403AFED57BE0F",
                },
                {
                    name: "ko-kr_3.2.0_3.4.0_hdiff_u1pfvG0C8lakLRKT.zip",
                    md5: "09A14F0B7291F41502040B3704029351",
                },
                {
                    name: "game_3.3.0_3.4.0_hdiff_IxKGMXhCLzZAJqUm.zip",
                    md5: "D88BF205205500A02D677A668ED63DC4",
                },
                {
                    name: "zh-cn_3.3.0_3.4.0_hdiff_CwIhpT8VfBUqlSEg.zip",
                    md5: "AF15A10270F7D9F778240FF00BEA9249",
                },
                {
                    name: "en-us_3.3.0_3.4.0_hdiff_kXarZuSHnoEYzWiq.zip",
                    md5: "E2AA4A509F072D82A272FF7638CF7A4B",
                },
                {
                    name: "ja-jp_3.3.0_3.4.0_hdiff_4RnJjQLArch3yGOt.zip",
                    md5: "07E70377F6CAD84996D2A452B2F8D7D7",
                },
                {
                    name: "ko-kr_3.3.0_3.4.0_hdiff_j3fribpBSCJaMUnE.zip",
                    md5: "0936886658D10161D8D45FF021DFB90A",
                },
                {
                    name: "GenshinImpact_3.4.0.zip",
                    md5: "d431470c80f8f12c1381faa7cdc77a53",
                },
                {
                    name: "GenshinImpact_3.4.0.zip.001",
                    md5: "d45d512b590aea3b6c7fcdbc7545c0ac",
                },
                {
                    name: "GenshinImpact_3.4.0.zip.002",
                    md5: "1d055c932c4f40525116443b2e072072",
                },
                {
                    name: "GenshinImpact_3.4.0.zip.003",
                    md5: "f55b4de7c409b0b9dc4db3d102cf1a72",
                },
                {
                    name: "GenshinImpact_3.4.0.zip.004",
                    md5: "f99bea5dc139d97b0426a06ea5078fad",
                },
                {
                    name: "GenshinImpact_3.4.0.zip.005",
                    md5: "f1e28444e258f35d835c4a47813893b4",
                },
                {
                    name: "Audio_Chinese_3.4.0.zip",
                    md5: "df84f79e3fdb63a2516177ef80676965",
                },
                {
                    name: "Audio_English(US)_3.4.0.zip",
                    md5: "f37bc4ab004b79cfa50ee425cec06f47",
                },
                {
                    name: "Audio_Japanese_3.4.0.zip",
                    md5: "49d4d1abf77180d82039d1206f165045",
                },
                {
                    name: "Audio_Korean_3.4.0.zip",
                    md5: "ea9e18025ab6f9240e7683933a38098f",
                },
            ],
            sdk: null,
            deprecated_files: [
                {
                    name: "mhyprot2.Sys",
                    md5: "",
                },
                {
                    name: "GenshinImpact_Data/Plugins/widevinecdmadapter.dll",
                    md5: "",
                },
                {
                    name: "GenshinImpact_Data/Plugins/InControlNative.dll",
                    md5: "",
                },
                {
                    name: "GenshinImpact_Data/Plugins/metakeeper.dll",
                    md5: "",
                },
                {
                    name: "GenshinImpact_Data/Plugins/d3dcompiler_43.dll",
                    md5: "",
                },
                {
                    name: "GenshinImpact_Data/Plugins/XInputInterface64.dll",
                    md5: "",
                },
                {
                    name: "GenshinImpact_Data/Plugins/sqlite3.dll",
                    md5: "",
                },
                {
                    name: "GenshinImpact_Data/Plugins/PCGameSDK.dll",
                    md5: "",
                },
            ],
        },
    });
}

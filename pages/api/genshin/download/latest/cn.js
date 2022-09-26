export default function handler(req, res) {
    //TODO: add auto update from dump postman
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.0.0",
                    path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/YuanShen_3.0.0.zip",
                    size: "73991297432",
                    md5: "cd1437c10a30127c61dc25da5d6e1d6b",
                    entry: "YuanShen.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/Audio_Chinese_3.0.0.zip",
                            size: "16245462138",
                            md5: "c4decdaa35fe28db2e3377d731b61509",
                            package_size: "8117488189",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/Audio_English(US)_3.0.0.zip",
                            size: "18736543170",
                            md5: "9301e3ef3d4bd2f9578e9a7c3231044f",
                            package_size: "9363028705",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/Audio_Japanese_3.0.0.zip",
                            size: "20647803616",
                            md5: "eec13fe0b7d510e8b2e387ab3b0d1ce9",
                            package_size: "10318658928",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/Audio_Korean_3.0.0.zip",
                            size: "15966289264",
                            md5: "df75295aace0ce387f4016873a374b99",
                            package_size: "7977901752",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/ScatteredFiles",
                    segments: [],
                    package_size: "36990405836",
                },
                diffs: [
                    {
                        name: "game_2.8.0_3.0.0_hdiff_6azJoC5lYS1EUycW.zip",
                        version: "2.8.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_2.8.0_3.0.0_hdiff_6azJoC5lYS1EUycW.zip",
                        size: "18170014714",
                        md5: "B0D8407E9EC545FEFC9855ACB467893F",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_2.8.0_3.0.0_hdiff_0osJAObthKPmDc3r.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_2.8.0_3.0.0_hdiff_0osJAObthKPmDc3r.zip",
                                size: "1290950486",
                                md5: "7B534E5F6087E0B237027F48E3B95D63",
                                package_size: "603812662",
                            },
                            {
                                language: "en-us",
                                name: "en-us_2.8.0_3.0.0_hdiff_qHeyaTLsu6IcEb5J.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_2.8.0_3.0.0_hdiff_qHeyaTLsu6IcEb5J.zip",
                                size: "1523243607",
                                md5: "4B0275D694C20EFE5F87F1EAF5E646E1",
                                package_size: "725190925",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_2.8.0_3.0.0_hdiff_15hvOf7Fbrslt3W9.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_2.8.0_3.0.0_hdiff_15hvOf7Fbrslt3W9.zip",
                                size: "1606124057",
                                md5: "872FC08C821961DC6B09A056F452CC1D",
                                package_size: "691631947",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_2.8.0_3.0.0_hdiff_iNx3dcsKA81TtRUH.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_2.8.0_3.0.0_hdiff_iNx3dcsKA81TtRUH.zip",
                                size: "1304617785",
                                md5: "CD970BCE6D415FCFBBF3D12713F27CBF",
                                package_size: "605387002",
                            },
                        ],
                        package_size: "8887485794",
                    },
                    {
                        name: "game_2.7.0_3.0.0_hdiff_jWBmFtXMu3v17cg8.zip",
                        version: "2.7.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_2.7.0_3.0.0_hdiff_jWBmFtXMu3v17cg8.zip",
                        size: "21886207776",
                        md5: "4F5BACA67FF47A629D53D149D54E6EE8",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_2.7.0_3.0.0_hdiff_U5s7ShiHnT8M0JPq.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_2.7.0_3.0.0_hdiff_U5s7ShiHnT8M0JPq.zip",
                                size: "3014998269",
                                md5: "3B962D44621B6B1849FA6E561EA7F38D",
                                package_size: "1410714282",
                            },
                            {
                                language: "en-us",
                                name: "en-us_2.7.0_3.0.0_hdiff_1Bevc4h5Js9U0aNy.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_2.7.0_3.0.0_hdiff_1Bevc4h5Js9U0aNy.zip",
                                size: "3572963338",
                                md5: "3C5C0734111530478E080A6482E70031",
                                package_size: "1708131625",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_2.7.0_3.0.0_hdiff_sQ3Snd7JCObwVkpK.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_2.7.0_3.0.0_hdiff_sQ3Snd7JCObwVkpK.zip",
                                size: "3583727709",
                                md5: "89814FBB8BE048AA9A25DB49EBCD3D2B",
                                package_size: "1575628615",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_2.7.0_3.0.0_hdiff_OEeh67CLowc25ijF.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_2.7.0_3.0.0_hdiff_OEeh67CLowc25ijF.zip",
                                size: "3002892276",
                                md5: "5193DD9C0CD169BAAC274CBF8C5F03B6",
                                package_size: "1404711700",
                            },
                        ],
                        package_size: "10675094458",
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
                    version: "3.1.0",
                    path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220917165328_rVH9t4OWduSD75ye/YuanShen_3.1.0.zip",
                    size: "81378641182",
                    md5: "acfa83a37b0884f6b3c767f19691043c",
                    entry: "YuanShen.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220917165328_rVH9t4OWduSD75ye/Audio_Chinese_3.1.0.zip",
                            size: "17598376836",
                            md5: "74251ac421d52fcc22ba30c03c05c2ac",
                            package_size: "8793945538",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220917165328_rVH9t4OWduSD75ye/Audio_English(US)_3.1.0.zip",
                            size: "20325681070",
                            md5: "f55a9306932867e3b6161064e45490d9",
                            package_size: "10157597655",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220917165328_rVH9t4OWduSD75ye/Audio_Japanese_3.1.0.zip",
                            size: "22451689880",
                            md5: "29a1dfee7fcc730be7b391ff7c1720a4",
                            package_size: "11220602060",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220917165328_rVH9t4OWduSD75ye/Audio_Korean_3.1.0.zip",
                            size: "17362153634",
                            md5: "57b2ca7132fd5dc67aeb5858a38bbf5e",
                            package_size: "8675833937",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220917165328_rVH9t4OWduSD75ye/ScatteredFiles",
                    segments: [],
                    package_size: "40684077711",
                },
                diffs: [
                    {
                        name: "game_3.0.0_3.1.0_hdiff_3dlivNRan0Dq7ykP.zip",
                        version: "3.0.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_3.0.0_3.1.0_hdiff_3dlivNRan0Dq7ykP.zip",
                        size: "14416209054",
                        md5: "5E644B932C6A2651A52C537DACE82C89",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.0.0_3.1.0_hdiff_pkNHKFGT9oVOc7IX.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_3.0.0_3.1.0_hdiff_pkNHKFGT9oVOc7IX.zip",
                                size: "1244204891",
                                md5: "8CEE35511C4690ECC19C666D3176C3EA",
                                package_size: "566564183",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.0.0_3.1.0_hdiff_oPK43vBzGi0lRncy.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_3.0.0_3.1.0_hdiff_oPK43vBzGi0lRncy.zip",
                                size: "1550670353",
                                md5: "168D74D5E009A23BC69D73F4A3244AA4",
                                package_size: "736834287",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.0.0_3.1.0_hdiff_CsobdD1igS0T6jmR.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_3.0.0_3.1.0_hdiff_CsobdD1igS0T6jmR.zip",
                                size: "1540081046",
                                md5: "99AEB44051E41EC19346BBBA608251D5",
                                package_size: "680187907",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.0.0_3.1.0_hdiff_BTGW6aCo8HVUcsm0.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_3.0.0_3.1.0_hdiff_BTGW6aCo8HVUcsm0.zip",
                                size: "1274558141",
                                md5: "EAD9F42998C08BACB27C6105260C44A4",
                                package_size: "589299748",
                            },
                        ],
                        package_size: "7017553527",
                    },
                    {
                        name: "game_2.8.0_3.1.0_hdiff_oPrDhBNzkmqt1WnV.zip",
                        version: "2.8.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_2.8.0_3.1.0_hdiff_oPrDhBNzkmqt1WnV.zip",
                        size: "26320594621",
                        md5: "B003BD8C864C4D0170EE2B1B53CD5B8D",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_2.8.0_3.1.0_hdiff_xCRdgPaZJ5oMw4fA.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_2.8.0_3.1.0_hdiff_xCRdgPaZJ5oMw4fA.zip",
                                size: "2523268255",
                                md5: "A3EC1665ECADC7345345F5C1F424992B",
                                package_size: "1169831565",
                            },
                            {
                                language: "en-us",
                                name: "en-us_2.8.0_3.1.0_hdiff_gyKJUEuLpQGStYmO.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_2.8.0_3.1.0_hdiff_gyKJUEuLpQGStYmO.zip",
                                size: "3058142263",
                                md5: "EFCA4EAB77F8A3169E71D1BE10B3F76A",
                                package_size: "1459515427",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_2.8.0_3.1.0_hdiff_FmbRHyYslrU80GVW.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_2.8.0_3.1.0_hdiff_FmbRHyYslrU80GVW.zip",
                                size: "3134327145",
                                md5: "CE565D26AA09E6F5C6A0FFFC02326C69",
                                package_size: "1371223126",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_2.8.0_3.1.0_hdiff_3glVNyU1Jck5QGip.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_2.8.0_3.1.0_hdiff_3glVNyU1Jck5QGip.zip",
                                size: "2567510586",
                                md5: "6D89CBD3232A5F286F76FC3860464AE1",
                                package_size: "1194149502",
                            },
                        ],
                        package_size: "12940589406",
                    },
                ],
            },
            deprecated_packages: [
                { name: "game_2.6.0_2.8.0_hdiff_z8sdMlFY30RawybQ.zip", md5: "FA58393058756638FDCCDC67CFB99737" },
                { name: "zh-cn_2.6.0_2.8.0_hdiff_3XkJ69EusVlhK0ZT.zip", md5: "8432610F18718D86A72C43B7AD0D7183" },
                { name: "en-us_2.6.0_2.8.0_hdiff_76vp3Hn95syWFSTf.zip", md5: "4898E8460BDF15C25CBC8B3D4C962331" },
                { name: "ja-jp_2.6.0_2.8.0_hdiff_eVi6nIOGaAmKxNtp.zip", md5: "C31131ADC8905C66D25820D04F756055" },
                { name: "ko-kr_2.6.0_2.8.0_hdiff_R1Yv6U7ESAfenGgO.zip", md5: "7AFF1464A8640A88B7258A9BAFF4C974" },
                { name: "game_2.7.0_2.8.0_hdiff_9yer4R2xEMmBnLpl.zip", md5: "76CCFA2D7C9E6B57FFF43AB808F9EAF0" },
                { name: "zh-cn_2.7.0_2.8.0_hdiff_RQ423ptsTU0xBlvi.zip", md5: "71F942BADD7BED1B3990CD05B10EF5E2" },
                { name: "en-us_2.7.0_2.8.0_hdiff_bz3cEd7CMIsq8ak9.zip", md5: "9B8C6B2C4C6CC7C19E0A8067DF02A09B" },
                { name: "ja-jp_2.7.0_2.8.0_hdiff_5HizfaeoOwqklumD.zip", md5: "FC1F11C0A03E0B65EA9FE6EFB365CC67" },
                { name: "ko-kr_2.7.0_2.8.0_hdiff_eXNaWnorU52ysCxB.zip", md5: "8AE719F7ABCC33E77720F74C6B8412EB" },
                { name: "YuanShen_2.8.0.zip", md5: "43bbde991356443f9f6fcc33e27f347a" },
                { name: "Audio_Chinese_2.8.0.zip", md5: "0bbc8b11a78b7076888fb9c8e70d56ae" },
                { name: "Audio_English(US)_2.8.0.zip", md5: "c4ae665388e8c75ba5864e5fc580fa55" },
                { name: "Audio_Japanese_2.8.0.zip", md5: "e8de28d3ae2173d114f6717918fdb03e" },
                { name: "Audio_Korean_2.8.0.zip", md5: "d47e5d2cafdfaf634d35788e04cced5f" },
                { name: "game_2.5.0_2.7.0_hdiff_gctEXCzIRUjLFMNl.zip", md5: "91774624FD4B85C4C0AB646F24BA9A23" },
                { name: "zh-cn_2.5.0_2.7.0_hdiff_cpqRB3iKUWOHVlXI.zip", md5: "82CC2D1A2B79E442ED16131BE7113AF6" },
                { name: "en-us_2.5.0_2.7.0_hdiff_1LBKZjQvyiJg0hYm.zip", md5: "A129FE2CA342E042BD299E555D95056A" },
                { name: "ja-jp_2.5.0_2.7.0_hdiff_gQTvCjWhI13b0ymJ.zip", md5: "C84BEA181193827C478886E15A367481" },
                { name: "ko-kr_2.5.0_2.7.0_hdiff_oQD5rbxvKSTRaLsd.zip", md5: "2AC8171C1B07A93C2D017D210DE03093" },
                { name: "game_2.6.0_2.7.0_hdiff_dsyhYJaEwc1SNe3p.zip", md5: "562ED0460088878328B9064527770DF8" },
                { name: "zh-cn_2.6.0_2.7.0_hdiff_AaprnYu9VWj3Xfmw.zip", md5: "0AC3A7D995962D2966D26449A15882D3" },
                { name: "en-us_2.6.0_2.7.0_hdiff_EdxYmJUbN7g4c0FZ.zip", md5: "5F09F30AFFA62CB0C0AE491EF9F27A10" },
                { name: "ja-jp_2.6.0_2.7.0_hdiff_AUyVStRQdmpv7oqj.zip", md5: "E63B67A61AAE1579FC4EE8544163A0A0" },
                { name: "ko-kr_2.6.0_2.7.0_hdiff_JmrnpGc0kuqbhTBF.zip", md5: "05BEFE4197BB329F2145D3C7F3DDDA9F" },
                { name: "YuanShen_2.7.0.zip", md5: "276d2ea7e9b2d22b5283e1127f755cc2" },
                { name: "Audio_Chinese_2.7.0.zip", md5: "09a35ee3c77e6e539219d19366c95c46" },
                { name: "Audio_English(US)_2.7.0.zip", md5: "5d72193016f63627b10ece48eb2d6786" },
                { name: "Audio_Japanese_2.7.0.zip", md5: "10209a975ff9a61bed0d615b5c570579" },
                { name: "Audio_Korean_2.7.0.zip", md5: "e4b17f0f1dd51c991cccb9ee02a04122" },
            ],
            sdk: null,
            deprecated_files: [{ name: "/YuanShen_Data/Plugins/PCGameSDK.dll", md5: "" }],
        },
    });
}

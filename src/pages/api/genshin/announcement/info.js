export default function handler(req, res) {
    // TODO: use news later
    res.status(200).json({
        t: "{{SYSTEM_TIME}}",
        list: [
            {
                ann_id: 1,
                title: "Welcome to YuukiPS",
                subtitle: "Welcome",
                banner: "https://gitlab.com/yukiz/grasscutter-data/-/raw/main/data/hk4e/announcement/image/banner1.jpg",
                content: "For more info, please visit discord.yuuki.me",
                lang: "en-US",
            },
            {
                ann_id: 2,
                title: 'Halaman Preview Versi 3.0 "Fajar Seribu Mawar" Resmi Dibuka!',
                subtitle: "Preview Genshin Impact v3.0",
                banner: "https://sdk.hoyoverse.com/upload/announcement/2022/08/11/66fd2baedcff08f23602f60beef64956_4829249710167576256.jpg",
                content:
                    '<p style="white-space: pre-wrap;">Dear Traveler,</p><p style="white-space: pre-wrap; min-height: 1.5em;"></p><p style="white-space: pre-wrap;">Halaman Preview Versi 3.0 "Fajar Seribu Mawar" Resmi Dibuka!</p><p style="white-space: pre-wrap;"><a href="javascript:miHoYoGameJSSDK.openInBrowser(\'https://act.hoyoverse.com/ys/event/e20220814prev/index.html?game_biz=hk4e_global&amp;sign_type=2&amp;auth_appid=e20220814warm&amp;authkey_ver=1&amp;utm_source=ingame&amp;utm_medium=notice\');">&gt;&gt; Kunjungi Halaman Preview v3.0 "Fajar Seribu Mawar" &lt;&lt;</a></p><p style="white-space: pre-wrap; min-height: 1.5em;"></p><p style="white-space: pre-wrap;">※ Dapatkan 20.000 Mora dengan mengunjungi situs event dan membagikan halaman tersebut</p>',
                lang: "en-US",
            },
        ],
        total: 1,
    });
}

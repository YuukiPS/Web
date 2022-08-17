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
        ],
        total: 1,
    });
}

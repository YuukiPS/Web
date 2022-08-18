export default function handler(req, res) {
    // TODO: use news later
    res.status(200).json({
        t: "{{SYSTEM_TIME}}",
        list: [
            {
                list: [
                    {
                        ann_id: 1,
                        title: "Welcome to YuukiPS",
                        subtitle: "Welcome",
                        banner: "https://gitlab.com/yukiz/grasscutter-data/-/raw/main/data/hk4e/announcement/image/banner1.jpg",
                        tag_icon: "https://gitlab.com/yukiz/grasscutter-data/-/raw/main/data/hk4e/announcement/image/alert/warning.png",
                        type: 2,
                        type_label: "System",
                        lang: "en-US",
                        start_time: "2020-09-25 04:05:30",
                        end_time: "2030-10-30 11:00:00",
                        content: "For more info, please visit discord.yuuki.me",
                        has_content: true,
                    },
                ],
                type_id: 2,
                type_label: "System",
            },
            {
                list: [{}],
                type_id: 3,
                type_label: "Events",
            },
        ],
        total: 2,
        type_list: [
            {
                id: 2,
                name: "游戏系统公告",
                mi18n_name: "System",
            },
            {
                id: 1,
                name: "活动公告",
                mi18n_name: "Activity",
            },
        ],
        timezone: -5,
        alert: false,
        alert_id: 0,
    });
}

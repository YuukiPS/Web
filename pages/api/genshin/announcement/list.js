import { getPostData } from "../../../../lib/post";

export default async function handler(req, res) {
    // All short info should be put here and each category can be categorized based on id type
    const GetNews = await getPostData(false);
    const time_ms = Date.now().toString();    
    res.status(200).json({
        t: time_ms,
        list: [
            {
                list: GetNews,
                type_id: 2,
                type_label: "Announcement",
            },
            {
                list: [{}],
                type_id: 1,
                type_label: "YuukiPS",
            },
        ],
        total: GetNews.length,
        type_list: [
            {
                id: 2,
                name: "Announcement",
                mi18n_name: "Announcement",
            },
            {
                id: 1,
                name: "YuukiPS",
                mi18n_name: "YuukiPS",
            },
        ],
        timezone: 8,
        alert: false,
        alert_id: 0,
    });
}

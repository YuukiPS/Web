import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getPostData(detail = true, category = "Genshin Impact") {

    // Get folder by category
    const PostDirectory = path.join(process.cwd(), "post" + "/" + category);

    // Get file names under /post
    const getlist = fs.readdirSync(PostDirectory);

    let ann_id = 0;

    const allData = getlist.map(async (fileName) => {

        // Remove ".md" from file name to get seo url
        const url = fileName.replace(/\.md$/, "");

        // Join path and name file as full path
        const fullPath = path.join(PostDirectory, fileName);

        // Get Contents 
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string.
        const processedContent = await remark().use(html).process(matterResult.content);

        ann_id++;

        // for blog
        let title = "";
        let subtitle = "";
        let banner = "";
        let content = ""; // list blank
        let lang = ""; // list too       

        // for list
        let type_label = "Announcement";
        let tag_label = "2";
        let tag_icon = ""; // icon
        let login_alert = 1;
        let start_time = "2022-07-15 17:00:00";
        let end_time = "2022-08-23 23:59:59";
        let type = "2";
        let remind = 1;
        let alert = 0;
        let tag_start_time = "";
        let tag_end_time = "";
        let remind_ver = 1;
        let has_content = true;
        let extra_remind = 0;
        let date = "";

        // vaild check
        if (matterResult.data) {
            date = matterResult.data.date;
            title = matterResult.data.title;
            subtitle = matterResult.data.subtitle;
            banner = matterResult.data.banner;
            content = matterResult.data.content;
            lang = matterResult.data.lang;

            type_label = matterResult.data.type_label;
            tag_label = matterResult.data.tag_label;
            tag_icon = matterResult.data.tag_icon;

            login_alert = matterResult.data.login_alert;
            start_time = matterResult.data.start_time;
            end_time = matterResult.data.end_time;
            type = matterResult.data.type;
            remind = matterResult.data.remind;
            alert = matterResult.data.alert;
            tag_start_time = matterResult.data.tag_start_time;
            tag_end_time = matterResult.data.tag_end_time;

            remind_ver = matterResult.data.remind_ver;
            has_content = matterResult.data.has_content;
            extra_remind = matterResult.data.extra_remind;
        }

        // Combine data
        if (detail) {
            content = processedContent.toString();
            return {
                url,
                ann_id,
                title,
                subtitle,
                banner,
                content,
                lang,
                date
            };
        } else {
            const content = "";
            return {
                ann_id,
                title,
                subtitle,
                banner,
                content,
                type_label,
                tag_label,
                tag_icon,
                login_alert,
                lang,
                start_time,
                end_time,
                type,
                remind,
                alert,
                tag_start_time,
                tag_end_time,
                remind_ver,
                has_content,
                extra_remind,
                date

            };
        }

    });

    // wait get data
    const results = await Promise.all(allData);

    // Sort post by date
    return results
        .filter((x) => x !== null)
        .sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else {
                return -1;
            }
        });
}

/*
blog stuff
            {
                "ann_id": 3084,
                "title": "[Jurnal Petualangan] Update Event: Data \"Perjalanan Laut di Musim Panas\" Telah Dibuka",
                "subtitle": "Update Fitur Jurnal Petualangan",
                "banner": "https://sdk.hoyoverse.com/upload/announcement/2022/07/12/88b37dca7660b4d2990c472a6f26ec0c_3931843503594708432.jpg",
                "content": "isi di ini",
                "lang": "id-id"
            }

list only

                    {
                        "ann_id": 3084,
                        "title": "[Jurnal Petualangan] Update Event: Data \"Perjalanan Laut di Musim Panas\" Telah Dibuka",
                        "subtitle": "Update Fitur Jurnal Petualangan",
                        "banner": "https://sdk.hoyoverse.com/upload/announcement/2022/07/12/88b37dca7660b4d2990c472a6f26ec0c_3931843503594708432.jpg",
                        "content": "",
                        "type_label": "Game",
                        "tag_label": "3",
                        "tag_icon": "https://sdk.hoyoverse.com/upload/announcement/2020/03/05/f3016cc0dbe3f9c2305566742ae5927f_1830032474842461374.png",
                        "login_alert": 1,
                        "lang": "id-id",
                        "start_time": "2022-07-15 17:00:00",
                        "end_time": "2022-08-23 23:59:59",
                        "type": 2,
                        "remind": 1,
                        "alert": 0,
                        "tag_start_time": "2000-01-02 15:04:05",
                        "tag_end_time": "2030-01-02 08:04:05",
                        "remind_ver": 1,
                        "has_content": true,
                        "extra_remind": 0
                    }
*/
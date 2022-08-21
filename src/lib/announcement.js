import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const AnnouncementDirectory = path.join(process.cwd(), "announcement");

export async function getAnnouncementData(category = "Genshin Impact") {
    // Get file names under /posts
    const getlist = fs.readdirSync(AnnouncementDirectory);

    let ann_id = 0;

    const allData = getlist.map(async (fileName) => {
        // Remove ".md" from file name to get id
        const url = fileName.replace(/\.md$/, "");

        // Join path and name file as full path
        const fullPath = path.join(AnnouncementDirectory, fileName);

        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        if (matterResult.data) {
            // check category
            if (matterResult.data.category != category) {
                return null;
            }
        }

        // Use remark to convert markdown into HTML string
        const processedContent = await remark().use(html).process(matterResult.content);
        const content = processedContent.toString();

        ann_id++;

        // Combine the data with the id
        return {
            url,
            ann_id,
            ...matterResult.data,
            content,
        };
    });

    // wait get data
    const results = await Promise.all(allData);

    // Sort posts by date
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

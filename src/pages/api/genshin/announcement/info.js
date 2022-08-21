import { getAnnouncementData } from "../../../../lib/announcement";

export default async function handler(req, res) {
    const allPostsData = await getAnnouncementData();
    res.status(200).json({
        t: "{{SYSTEM_TIME}}", //TODO: Use Time Server?
        list: allPostsData,
        total: allPostsData.length,
    });
}

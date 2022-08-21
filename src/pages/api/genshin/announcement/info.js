import { getAnnouncementData } from "../../../../lib/announcement";

export default async function handler(req, res) {
    const allPostsData = await getAnnouncementData();
    res.status(200).json({
        t: Date.now(),
        list: allPostsData,
        total: allPostsData.length,
    });
}

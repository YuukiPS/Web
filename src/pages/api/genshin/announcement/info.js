import { getPostData } from "../../../../lib/post";

export default async function handler(req, res) {
    // All details info should be put here 
    const GetNews = await getPostData();    
    const time_ms = Date.now().toString();
    res.status(200).json({
        t: time_ms,
        list: GetNews,
        total: GetNews.length,
    });
}

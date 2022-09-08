import { getVersion } from "../../../lib/genshin";

export default function handler(req, res) {
    res.status(200).json(getVersion(req.query.md5));
}
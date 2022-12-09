export default function handler(req, res) {
    res.status(200).json({
        description: "todo",
        version: "1.2.1",
        package: {
            os: {
                url: "https://crepe.moe/c/WTv4TOcq.zip",
                md6: "6DBAC00871BD45B35A6C84D2B5301A90",
            },
            cn: {
                url: "https://crepe.moe/c/WTv4TOcq.zip",
                md6: "6DBAC00871BD45B35A6C84D2B5301A90",
            },
        },
    });
}

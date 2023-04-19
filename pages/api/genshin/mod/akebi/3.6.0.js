export default function handler(req, res) {
    res.status(200).json({
        description: "gay",
        version: "0.0.1",
        package: {
            os: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Mod/PC/Kebabi/Kebabi_v1.zip",
                md5: "C6FFCDC6A06EE0A962BD5AA062D9ADAB",
            },
            cn: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Mod/PC/Kebabi/Kebabi_v1.zip",
                md5: "C6FFCDC6A06EE0A962BD5AA062D9ADAB",
            },
        },
    });
}

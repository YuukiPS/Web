export default function handler(req, res) {
    res.status(200).json({
        description: "todo",
        version: "1.2.2",
        package: {
            os: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.3.0/Global/Mod/akebi-gc-v1.2.2.zip",
                md5: "0C4126CB79303618E0D70D9FA91C8956",
            },
            cn: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.3.0/Global/Mod/akebi-gc-v1.2.2.zip",
                md5: "0C4126CB79303618E0D70D9FA91C8956",
            },
        },
    });
}

export default function handler(req, res) {
    res.status(200).json({
        description: "todo",
        version: "1.0.5",
        package: {
            os: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Mod/PC/Acrepi/Acrepi-v1.0.5.zip",
                md5: "0866C90C6638DB008FDDFC866213D543",
            },
            cn: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Mod/PC/Acrepi/Acrepi-v1.0.5.zip",
                md5: "0866C90C6638DB008FDDFC866213D543",
            },
        },
    });
}

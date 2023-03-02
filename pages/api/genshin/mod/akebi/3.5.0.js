export default function handler(req, res) {
    res.status(200).json({
        description: "todo",
        version: "1.0.7",
        package: {
            os: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Mod/PC/Acrepi/Acrepi-v1.0.7.zip",
                md5: "8FE778FD2854260B19E2C6E245B506B7",
            },
            cn: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Mod/PC/Acrepi/Acrepi-v1.0.7.zip",
                md5: "8FE778FD2854260B19E2C6E245B506B7",
            },
        },
    });
}

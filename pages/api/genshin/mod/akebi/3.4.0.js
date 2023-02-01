export default function handler(req, res) {
    res.status(200).json({
        description: "todo",
        version: "1.0.3",
        package: {
            os: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.4.0/Global/Mod/Acrepi-v1.0.3.zip",
                md5: "DC6708C5A5F91AB9B566AA8C9D6501A3",
            },
            cn: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.4.0/Global/Mod/Acrepi-v1.0.3.zip",
                md5: "DC6708C5A5F91AB9B566AA8C9D6501A3",
            },
        },
    });
}

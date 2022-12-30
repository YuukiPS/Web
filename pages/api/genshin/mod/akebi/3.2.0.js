export default function handler(req, res) {
    res.status(200).json({
        description: "todo",
        version: "1.1.1",
        package: {
            os: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.2.0/Global/Mod/akebi-gc-v1.1.1-global.zip",
                md5: "BC15DD51D7DBDC94E56D1BBB02ED3009",
            },
            cn: {
                url: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.2.0/Chinese/Mod/akebi-gc-v1.1.1-china.zip",
                md5: "913D0BC93443C275F660C3DB7904D5FC",
            },
        },
    });
}

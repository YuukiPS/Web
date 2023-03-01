export default function handler(req, res) {
    res.status(200).json({
        version: "3.5.0",
        channel: "OS",
        release: "Global",
        patched: {
            metode: "RSA",
            resources: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.5.0/Global/",
            key_patch: "",
            // for online patch
            md5_vaild: {
                os: "505665EEC269D92CC7AEE7FBA0DA01FD", // md5 for patch
                cn: "505665EEC269D92CC7AEE7FBA0DA01FD",
            },
        },
        original: {
            resources:
                "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230220120928_iIYV9krGiWL06eeB/ScatteredFiles/",
            key_find: {
                cn: "",
                os: "",
            },
            // for check real file
            md5_check: {
                os: {
                    userassembly: "DB4B2BA49753BE4833C481E8B701F040",
                    metadata: "A97442D033E52DB82F807A27DEC433F0",
                    mhypbase: "4A3E6ACD8B47E75896C504DD3C16B14E",
                },
                cn: {
                    userassembly: "",
                    metadata: "",
                    mhypbase: "",
                },
            },
        },
    });
}

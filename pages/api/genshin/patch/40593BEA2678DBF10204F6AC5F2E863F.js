export default function handler(req, res) {
    res.status(200).json({
        version: "3.5.0",
        channel: "CN",
        release: "Global",
        patched: {
            metode: "RSA",
            resources: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.5.0/Chinese/",
            key_patch: "",
            // for online patch
            md5_vaild: {
                os: "505665EEC269D92CC7AEE7FBA0DA01FD", // md5 for patch
                cn: "505665EEC269D92CC7AEE7FBA0DA01FD",
            },
        },
        original: {
            resources:
                "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230220120841_NrIMna0roQkFHA3c/ScatteredFiles/",
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
                    userassembly: "2A047C49EA9E6F817208DCC1CDDC41FC",
                    metadata: "78672165A5E1E52E7F264AA4EF1E112D",
                    mhypbase: "948327BF35EFDAFE2869062AA940C864",
                },
            },
        },
    });
}

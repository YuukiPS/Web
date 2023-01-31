export default function handler(req, res) {
    res.status(200).json({
        version: "3.4.0",
        channel: "OS",
        release: "Global",
        patched: {
            metode: "RSA",
            resources: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.4.0/Global/",
            key_patch:  "",
            // for online patch
            md5_vaild: {
                os: "505665EEC269D92CC7AEE7FBA0DA01FD", // md5 for patch
                cn: "505665EEC269D92CC7AEE7FBA0DA01FD",
            },
        },
        original: {
            resources: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/ScatteredFiles/",
            key_find: {
                cn: "",
                os: "",
            },
            // for check real file
            md5_check: {
                os: {
                    userassembly: "16FB0CA97FEA983FC44F9ABA476E3658",
                    metadata: "C0EFA180BC71F8A4E221BF8F88350B01",
                    mhypbase: "1516073E4ABFC8FF97A254CD14B9D2DC",
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

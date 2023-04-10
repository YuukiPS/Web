export default function handler(req, res) {
    res.status(200).json({
        version: "3.6.0",
        channel: "OS",
        release: "Global",
        patched: {
            metode: "RSA",
            resources: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.6.0/Global/",
            key_patch: "",
            // for online patch
            md5_vaild: {
                os: "505665EEC269D92CC7AEE7FBA0DA01FD", // md5 for patch
                cn: "505665EEC269D92CC7AEE7FBA0DA01FD",
            },
        },
        original: {
            resources:
                "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230331200258_xR748JQdRJ19pQH0/ScatteredFiles/",
            key_find: {
                cn: "",
                os: "",
            },
            // for check real file
            md5_check: {
                os: {
                    userassembly: "FEC448E522FEA0F049CD85BEC1BB47B8",
                    metadata: "C2F851EB5598C259C7FDCF52BF1C7563",
                    mhypbase: "4A052DF7E5BC241F21533C5554137AD6",
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

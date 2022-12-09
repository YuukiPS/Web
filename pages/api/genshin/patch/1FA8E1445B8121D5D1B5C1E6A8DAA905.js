export default function handler(req, res) {
    res.status(200).json({
        version: "3.3.0",
        channel: "OS",
        release: "Global",
        patched: {
            metode: "RSA",
            resources: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.3.0/Global/",
            key_patch:  "",
            // for online patch
            md5_vaild: {
                os: "505665EEC269D92CC7AEE7FBA0DA01FD", // v1.1.0
                cn: "505665EEC269D92CC7AEE7FBA0DA01FD",
            },
        },
        original: {
            resources: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/ScatteredFiles/",
            key_find: {
                cn: "",
                os: "",
            },
            // for check real file
            md5_check: {
                os: {
                    userassembly: "702671865EBA6BD49DB2DA707CF4B4EF",
                    metadata: "D7E9C1FFB28DEC883697F5DED6B38A2D",
                },
                cn: {
                    userassembly: "3DCE9FA8A7874C70575D38C4F839C229",
                    metadata: "3A8C5A55768071BD5D29C6044447AE48",
                },
            },
        },
    });
}

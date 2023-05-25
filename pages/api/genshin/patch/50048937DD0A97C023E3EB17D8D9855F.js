export default function handler(req, res) {
    res.status(200).json({
        version: "3.7.0",
        channel: "OS",
        release: "Global",
        patched: {
            metode: "RSA",
            resources: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.7.0/Global/",
            key_patch: "",
            // for online patch
            md5_vaild: {
                os: "F3466B6FC8BD2C32C137580F40C25E7C", // md5 for patch
                cn: "F3466B6FC8BD2C32C137580F40C25E7C",
            },
        },
        original: {
            resources:
                "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230513200104_2odHBzbUAP5IOIvE/ScatteredFiles/",
            key_find: {
                cn: "",
                os: "",
            },
            // for check real file
            md5_check: {
                os: {
                    userassembly: "9C9390039DF94510D6662493C5903A81",
                    metadata: "89F90FBA6F13199850893F3299EC3250",
                    mhypbase: "7DF8B087E539C14259BFB75108FDDAD0",
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

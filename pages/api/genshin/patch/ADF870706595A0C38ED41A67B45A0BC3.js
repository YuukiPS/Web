export default function handler(req, res) {
    res.status(200).json({
        version: "3.7.0",
        channel: "CN",
        release: "Global",
        patched: {
            metode: "RSA",
            resources: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.7.0/Chinese/",
            key_patch: "",
            // for online patch
            md5_vaild: {
                os: "F3466B6FC8BD2C32C137580F40C25E7C", // md5 for patch
                cn: "F3466B6FC8BD2C32C137580F40C25E7C",
            },
        },
        original: {
            resources:
                "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230513200250_hFVOC1wXPDVnzH87/ScatteredFiles",
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
                    userassembly: "92CD7BF1FBDB87926293A3123A911D25",
                    metadata: "3B5C56602A7A9F3888CCF3276ABB16A1",
                    mhypbase: "593F616D3C2F105B23FA534776795E32",
                },
            },
        },
    });
}

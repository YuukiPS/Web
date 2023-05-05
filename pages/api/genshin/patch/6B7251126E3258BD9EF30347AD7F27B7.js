export default function handler(req, res) {
    res.status(200).json({
        version: "3.6.0",
        channel: "CN",
        release: "Global",
        patched: {
            metode: "RSA",
            resources: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.6.0/Chinese/",
            key_patch: "",
            // for online patch
            md5_vaild: {
                os: "F3466B6FC8BD2C32C137580F40C25E7C", // md5 for patch
                cn: "F3466B6FC8BD2C32C137580F40C25E7C",
            },
        },
        original: {
            resources: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230331200338_Sn5XSSFSqcIjAQL1/ScatteredFiles/",
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
                    userassembly: "27E20C611599540ADDDE2A91B96A7A8F",
                    metadata: "AFE9FA13EA54FDD55D4B43EF3FBA7B77",
                    mhypbase: "F8A928DEC6C0E140FA77B751B4264353",
                },
            },
        },
    });
}

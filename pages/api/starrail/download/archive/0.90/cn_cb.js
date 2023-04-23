export default function handler(req, res) {
    //TODO: add auto update from dump postman
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "0.90.0",
                    path: "https://autopatchcn.bhsr.com/client/cn/20230202112711_Gqh20JqTKF8yCY7c/StarRail_0.90.0.zip",
                    size: "19210485760",
                    md5: "5f79bb79d37f4b714e8ec8ccc59ef705",
                    entry: "StarRail.exe",
                    voice_packs: [],
                    decompressed_path: "",
                    segments: [],
                    package_size: "9600000000",
                },
                diffs: [],
            },
            plugin: {
                plugins: [
                    {
                        name: "DXSETUP.zip",
                        version: "",
                        path: "https://autopatchcn.bhsr.com/client/DXSETUP.zip",
                        size: "100647892",
                        md5: "ca2ac3835d7d7da6cb8624fefb177083",
                        entry: "",
                    },
                ],
                version: "1",
            },
            web_url: "https://hkrpg.mihoyo.com/launcher",
            force_update: null,
            pre_download_game: null,
            deprecated_packages: [],
            sdk: null,
            deprecated_files: [],
        },
    });
}

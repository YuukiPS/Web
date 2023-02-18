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
                    path: "https://autopatchos.starrails.com/client/download/20230202113937_NE7YVwlt4XBAMuNL/StarRail_0.90.0.zip",
                    size: "19210485760",
                    md5: "6717b1560bac650f0dbde4011df6e967",
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
                        path: "https://autopatchos.starrails.com/client/DXSETUP.zip",
                        size: "100647892",
                        md5: "ca2ac3835d7d7da6cb8624fefb177083",
                        entry: "",
                    },
                ],
                version: "1",
            },
            web_url: "https://starrail.hoyoverse.com/launcher",
            force_update: null,
            pre_download_game: null,
            deprecated_packages: [],
            sdk: null,
            deprecated_files: [],
        },
    });
}

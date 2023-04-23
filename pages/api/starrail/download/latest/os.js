export default function handler(req, res) {
    //TODO: add auto update from dump postman
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "1.0.5",
                    path: "https://autopatchos.starrails.com/client/download/20230413214947_toY0cWzqBhhM2EDV/StarRail_1.0.5.zip",
                    size: "21810485760",
                    md5: "5ef3a794df8ac656582ab144ddd3aa9f",
                    entry: "StarRail.exe",
                    voice_packs: [],
                    decompressed_path: "",
                    segments: [],
                    package_size: "10900000000",
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
            deprecated_packages: [
                { name: "StarRail_0.90.0.zip", md5: "6717b1560bac650f0dbde4011df6e967" },
                { name: "StarRail_0.90.57.zip", md5: "595143f3bf6010b59880245d7977bd91" },
            ],
            sdk: null,
            deprecated_files: [],
        },
    });
}

export default function handler(req, res) {
    //TODO: add auto update from dump postman
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "0.70",
                    path: "https://autopatchos.starrails.com/client/0517/StarRail_202205130516_q2hnl9E6ACCDC5wC.zip",
                    size: "16441686784",
                    md5: "1ae45c59f2a287c5e6e073c6aa249e55",
                    entry: "StarRail.exe",
                    voice_packs: [],
                    decompressed_path: "",
                    segments: [],
                    package_size: "8215600512",
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
                {
                    name: "20220401-0204-BetaLive-503834-CNBETAWin0.64.0-CnCb.zip",
                    md5: "943935161f0821c64b7f36c811d4c407",
                },
                {
                    name: "20220427-0950-V0.70Dev-576258-CNDEVWin0.70.0-CnTest-develop-Auto-WindowsBuildAuto-V0.70Dev-576258.zip",
                    md5: "bb9255eeda2b7cbc557d7ee61b3a49a2",
                },
            ],
            sdk: null,
            deprecated_files: [],
        },
    });
}

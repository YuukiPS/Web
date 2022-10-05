export default async function handler(req, res) {
    const time_ms = Date.now().toString();
    res.status(200).json({
        time: time_ms,
        list: [
            {
                name: "YuukiPS",
                host: "genshin.ps.yuuki.me",
                game: "GS",
                port: 443,
                https: true,
                version: "3.1.0",
            },
            {
                name: "Localhost",
                host: "localhost",
                game: "GS",
                port: 443,
                https: false,
                version: "3.1.0",
            },
            {
                name: "Official Servers",
                host: "official",
                game: "GS",
                port: 443,
                https: true,
                version: "3.1.0",
            },
        ],
    });
}

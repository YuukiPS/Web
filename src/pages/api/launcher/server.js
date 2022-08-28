export default async function handler(req, res) {
    const time_ms = Date.now().toString();    
    res.status(200).json({
        time: time_ms,
        list: [
            {
                name: "Dusseldorf",
                host: "eu.genshin.ps.yuuki.me",
                game: "GS",
                port: 443,
                version: "3.0",
            },
            {
                name: "Singapore",
                host: "sg.genshin.ps.yuuki.me",
                game: "GS",
                port: 443,
                version: "3.0",
            },
            {
                name: "Localhost",
                host: "localhost",
                game: "GS",
                port: 443,
                version: "3.0",
            },
            {
                name: "Official Servers",
                host: "official",
                game: "GS",
                port: 443,
                version: "3.0",
            },
        ]
    });
}

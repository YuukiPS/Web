export default async function handler(req, res) {
    const time_ms = Date.now().toString();    
    res.status(200).json({
        version: "2022.8.28.1433",
        url: "https://github.com/akbaryahya/YuukiPS-Launcher/releases/download/tes/YuukiPSLauncherPC.zip",
        note: "TODO"
    });
}
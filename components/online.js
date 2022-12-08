import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg", game = "gs" }) {
    // Default value
    var nama_long = "genshin";
    var server_long = "Asia";

    // Name Game
    if (nama_long == "sr") {
        nama_long = "starrail";
    }

    // Name Server
    if (server == "eu") {
        server_long = "Europe";
    }

    var online = "Nobody";
    var version = "Unknown";
    var version1 = "Unknown";
    var traveler = "Unknown";
    var ram = "Unknown";

    let url_remot_gs = `${server}.${game}.ps.yuuki.me`; // TODO: add SR stats
    let url_login_gs = `${nama_long}.ps.yuuki.me`;

    const { data, error } = useSWR(`https://${url_remot_gs}/status/server`, fetcher);
    if (data) {
        if (data.status) {
            if (data.status.playerCount) {
                online = data.status.playerCount + " Online";
            }
            if (data.status.DockerGS) {
                version = data.status.DockerGS;
            }
            if (data.status.Version) {
                version1 = data.status.Version;
            }
            if (data.status.TotalPlayer) {
                //traveler = new Intl.NumberFormat("en-US").format(data.status.TotalPlayer);
            }
            if (data.status.MemoryCurrently) {
                ram = ((data.status.MemoryCurrently / data.status.MemoryMax) * 100).toFixed(2) + " %";
            }
        }
    }

    return (
        <div class="stat">
            <div class="stat-title">{server_long} (GC)</div>
            <div class="stat-value">{online}</div>
            <div class="stat-desc">
                <div className="new-line">URL Remote: {url_remot_gs}</div>
                <div className="new-line">URL Login: {url_login_gs}</div>
                <div className="new-line">Server Version: {version}</div>
                <div className="new-line">Game Version: {version1}</div>
                <div className="new-line">RAM: {ram}</div>
            </div>
        </div>
    );
}

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

    let url_server = `${server}.gs.ps.yuuki.me`; // TODO: add SR stats

    const { data, error } = useSWR(`https://${url_server}/status/server`, fetcher);

    // TODO: REMOVE THIS AND JUST USE API
    if (server == "sg") {
        server = "Singapore";
    }
    if (server == "eu") {
        server = "Dusseldorf";
    }

    var online = "Nobody";
    var version = "Unknown";
    var traveler = "Unknown";
    var ram = "Unknown";

    if (data) {
        if (data.status) {
            if (data.status.playerCount) {
                online = data.status.playerCount + " Online";
            }
            if (data.status.DockerGS) {
                version = data.status.DockerGS;
            }
            if (data.status.TotalPlayer) {
                traveler = new Intl.NumberFormat("en-US").format(data.status.TotalPlayer);
            }
            if (data.status.MemoryCurrently) {
                ram = (data.status.MemoryCurrently/data.status.MemoryMax * 100).toFixed(2) + " %";
            }
        }
    }

    return (
        <div class="stat">
            <div class="stat-title">{server}</div>
            <div class="stat-value">{online}</div>
            <div class="stat-title">Traveler</div>
            <div class="stat-value">{traveler}</div>
            <div class="stat-desc">
                <div className="new-line">Address: {url_server}</div>
                <div className="new-line">Version: {version}</div>
                <div className="new-line">RAM: {ram}</div>
            </div>
        </div>
    );
}

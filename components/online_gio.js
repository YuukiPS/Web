import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {

    // Default value    
    var server_long = "Europe (GIO)";

    var online = "Nobody";
    var sub_server = "Nobody";

    const { data, error } = useSWR(`https://api-gs-ps.yuuki.me/server/gio`, fetcher);
    if (data) {
        if (data.code == 200) {
            if (data.data.online) {
                online = data.data.online + " Online";
            }
            sub_server = Object.keys(data.data.server).length;
        }
    }

    return (
        <div class="stat">
            <div class="stat-title">{server_long}</div>
            <div class="stat-value">{online}</div>
            <div class="stat-desc">
                <div className="new-line">SUB Server {sub_server}</div>
            </div>
        </div>
    );
}

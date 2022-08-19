import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

export default function Command() {
    const isEmpty = (value) => value === null || value === "";
    const bt = (event) => {
        //console.log(event);
        if (event.target.className == "btn") {
            //var newtext = document.melon.cmd.value;
            let name_cmd = event.target.innerHTML;
            //console.log(name_cmd);
            document.melon.cmd.value += name_cmd + "\r\n";
        }
    };
    const clear = (event) => {
        document.melon.cmd.value = "";
    };
    // Handles submit event on form submit.
    const run = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        var server = event.target.server.value;
        var cmd = event.target.cmd.value;
        var uid = event.target.uid.value;
        var token = event.target.token.value;

        const cmd_line = cmd.split(/\r?\n/);
        const total_cmd = cmd_line.length;

        // list cmd
        for (let i = 0; i < total_cmd; i++) {
            const cmdp = cmd_line[i].replace("/", "").replace("!", "");
            if (isEmpty(cmdp)) {
                continue;
            }

            const endpoint =
                "https://" +
                server +
                "/api/command?player=" +
                uid +
                "&token=" +
                token +
                "&cmd=" +
                encodeURIComponent(cmdp);

            const options = {
                method: "GET",
            };

            const response = null;
            try {
                response = await fetch(endpoint, options);
            } catch (error) {
                console.log("Error Get Data", error);
            }

            if (response) {
                const result = await response.json();
                document.getElementById("info").innerHTML =
                    '<div class="alert alert-success shadow-lg">' + result.message + "</div>";
                console.log("RAW DATA: ", result);
            }
        }
    };
    return (
        <>
            <Layout command>
                <Head>
                    <title>Command Web - {siteTitle}</title>
                </Head>

                <h1 class="title">Command Web</h1>

                <p class="description">Access command from web</p>

                <form name="melon" onSubmit={run}>
                    <div class="card">
                        <div class="card-body">
                            <div id="info"></div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Command</span>
                                </label>
                                <textarea
                                    class="textarea input-bordered"
                                    placeholder="help"
                                    id="cmd"
                                    name="cmd"
                                    required
                                ></textarea>
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Server</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="sg.genshin.ps.yuuki.me"
                                    class="input input-bordered"
                                    id="server"
                                    name="server"
                                    required
                                />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">UID (Id Player)</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="123"
                                    class="input input-bordered"
                                    id="uid"
                                    name="uid"
                                    required
                                />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Access Code</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Get access code with /remote on in-game"
                                    class="input input-bordered"
                                    id="token"
                                    name="token"
                                    required
                                />
                            </div>

                            <div class="form-control gap-2 mt-6">
                                <button class="btn btn-primary" type="submit">
                                    Command
                                </button>
                                <a class="btn btn-primary" onClick={clear}>
                                    Clear
                                </a>
                            </div>

                            <h3>Basic Command</h3>

                            <div class="flex flex-wrap gap-2 getcmd" onClick={bt}>
                                <a class="btn">give</a>
                                <a class="btn">give all</a>
                                <a class="btn">spawn 1 10 10</a>
                                <a class="btn">killall</a>
                                <a class="btn">killCharacter</a>
                                <a class="btn">clear</a>
                                <a class="btn">coop</a>
                                <a class="btn">enka</a>
                                <a class="btn">enter_dungeon</a>
                                <a class="btn">equip</a>
                                <a class="btn">heal</a>
                                <a class="btn">language</a>
                                <a class="btn">list</a>
                                <a class="btn">position</a>
                                <a class="btn">quest</a>
                                <a class="btn">resetConst</a>
                                <a class="btn">resetShopLimit</a>
                                <a class="btn">setConst</a>
                                <a class="btn">setFetterLevel</a>
                                <a class="btn">setProp</a>
                                <a class="btn">setStats</a>
                                <a class="btn">talent</a>
                                <a class="btn">team</a>
                                <a class="btn">teleport</a>
                                <a class="btn">teleportAll</a>
                                <a class="btn">unlockall</a>
                                <a class="btn">weather</a>
                            </div>

                            <h3>Server Command</h3>

                            <div class="flex flex-wrap gap-2 getcmd" onClick={bt}>
                                <a class="btn">account</a>
                                <a class="btn">announce</a>
                                <a class="btn">ban</a>
                                <a class="btn">unban</a>
                                <a class="btn">stop</a>
                                <a class="btn">kick</a>
                                <a class="btn">permission</a>
                                <a class="btn">reload</a>
                                <a class="btn">sendMail</a>
                                <a class="btn">sendMessage</a>
                            </div>
                        </div>
                    </div>
                </form>
            </Layout>
        </>
    );
}

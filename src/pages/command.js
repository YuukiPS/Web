import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

export default function Command() {
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
                    <title>Command - {siteTitle}</title>
                </Head>

                <h1 class="title">Command YuukiPS (Beta)</h1>

                <p class="description">Access commands from web</p>

                <form onSubmit={run}>
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

                            <div class="form-control mt-6">
                                <button class="btn btn-primary" type="submit">
                                    Command
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Layout>
        </>
    );
}

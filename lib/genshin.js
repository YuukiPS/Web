export function getVersion(md5 = "") {
    // default
    var version = "0.0.0";
    var channel = "OS";
    var release = "Official";
    var metode = "Metadata";

    if (md5 == "D0A29A5A571A760E4DB92F140BCF1181") {
        version = "3.0.0";
    } else if (md5 == "5B6D98F290EFA5E15131085E6EDFF57B") {
        version = "3.0.0";
        channel = "CN";
    } else if (md5 == "3B07231B4FF86C22885A688764FF1B24") {
        version = "3.0.50";
        release = "Beta";
        metode = "UserAssembly";
    } else if (md5 == "A2E95A6994CF730708D0AA489E940AC6") {
        version = "3.0.51";
        release = "Beta";
        metode = "UserAssembly";
    } else if (md5 == "16D24CB898CB026410DE8DC4FC0FEB5C") {
        version = "3.0.52";
        release = "Beta";
        metode = "UserAssembly";
    } else if (md5 == "19A03BFB6B47210BDDAA97480102476A") {
        version = "3.0.53";
        release = "Beta";
        metode = "UserAssembly";
    }

    return {
        version: version,
        channel: channel,
        release: release,
        metode: metode,
        md5: md5,
    };
}

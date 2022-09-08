export function getVersion(md5 = "") {
    var version = "0.0.0";
    var channel = "OS";
    var release = "Official";

    // add more later
    if(md5 == "D0A29A5A571A760E4DB92F140BCF1181"){
        version = "3.0.0";
        channel = "OS";
        release = "Official";
    }else if(md5 == "6967617D1B40D8BA684EA17EA84F5B31"){
        version = "3.0.52";
        release = "Beta";
    }
    
    return {
        version: version,
        channel: channel,
        release:release,
        md5: md5,
    };
}
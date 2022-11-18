export default function handler(req, res) {
    res.status(200).json({
        description: "todo",
        version: "1.1.1",
        package: {
            os: {
                url: "https://minas.crepe.moe/f/0e7707ce726b48828231/?dl=1",
                md6: "BC15DD51D7DBDC94E56D1BBB02ED3009",
            },
            cn: {
                url: "https://minas.crepe.moe/f/9ec7c8c4ee6d4d86b094/?dl=1",
                md6: "913D0BC93443C275F660C3DB7904D5FC",
            },
        },
    });
}

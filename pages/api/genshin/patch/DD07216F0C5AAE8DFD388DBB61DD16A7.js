export default function handler(req, res) {
    res.status(200).json({
        version: "3.1.0",
        channel: "OS",
        release: "Global",
        patched: {
            metode: "UserAssembly",
            resources: "https://drive.yuuki.me/api/public/dl/ZOrLF1E5/GenshinImpact/Data/PC/3.1.0/",
            key: "<RSAKeyValue><Modulus>xbbx2m1feHyrQ7jP+8mtDF/pyYLrJWKWAdEv3wZrOtjOZzeLGPzsmkcgncgoRhX4dT+1itSMR9j9m0/OwsH2UoF6U32LxCOQWQD1AMgIZjAkJeJvFTrtn8fMQ1701CkbaLTVIjRMlTw8kNXvNA/A9UatoiDmi4TFG6mrxTKZpIcTInvPEpkK2A7Qsp1E4skFK8jmysy7uRhMaYHtPTsBvxP0zn3lhKB3W+HTqpneewXWHjCDfL7Nbby91jbz5EKPZXWLuhXIvR1Cu4tiruorwXJxmXaP1HQZonytECNU/UOzP6GNLdq0eFDE4b04Wjp396551G99YiFP2nqHVJ5OMQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>",
            // for online patch
            md5: {
                os: "",
                cn: "",
            },
        },
        original: {
            resources:
                "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220917165430_NyMmj1Ta9KlZKgCZ/ScatteredFiles/",
            key: {
                cn: "<RSAKeyValue><Modulus>wt/Z98o8gbw94la07B1/ApVCuHWHGI7Pd8FPF3PvNYf1oTYwgRczQBfPqHfXyttRRP44mqG4tfrz2zO8gXENRSyDXtzu7dQGh3hu1t87TpPbiYcQ+ZHK58v6dy1jo30TTK64sRnjxJfWrKYDxSBxBzDbKClzqlY0J/4mVjKFxk7qS0HvoYydlRnhvJVOMdjt/SV6wyHRY66FvOvdk6BVLom3K0WBHNcFE6ChA3GQcR+xyX1Z058AviFrx6KS45mqRujUC5vZXuwbvgrICgEVlfOScHFnrTlFX8ysM4C1bSb8Icy3V8XSb7LjCmXBeB7TUpW2vjhKlzgZeWwNu1DaEw==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>",
                os: "<RSAKeyValue><Modulus>wt/Z98o8gbw94la07B1/ApVCuHWHGI7Pd8FPF3PvNYf1oTYwgRczQBfPqHfXyttRRP44mqG4tfrz2zO8gXENRSyDXtzu7dQGh3hu1t87TpPbiYcQ+ZHK58v6dy1jo30TTK64sRnjxJfWrKYDxSBxBzDbKClzqlY0J/4mVjKFxk7qS0HvoYydlRnhvJVOMdjt/SV6wyHRY66FvOvdk6BVLom3K0WBHNcFE6ChA3GQcR+xyX1Z058AviFrx6KS45mqRujUC5vZXuwbvgrICgEVlfOScHFnrTlFX8ysM4C1bSb8Icy3V8XSb7LjCmXBeB7TUpW2vjhKlzgZeWwNu1DaEw==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>",
            },
            // for check real file
            md5: {
                os: {
                    userassembly: "",
                    metadata: "",
                },
                cn: {
                    userassembly: "",
                    metadata: "",
                },
            },
        },
    });
}

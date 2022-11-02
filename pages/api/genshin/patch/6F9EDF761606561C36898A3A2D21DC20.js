export default function handler(req, res) {
    res.status(200).json({
        version: "3.2.0",
        channel: "OS",
        release: "Global",
        patched: {
            metode: "UserAssembly",
            resources: "https://drive.yuuki.me/api/public/dl/ZOrLF1E5/GenshinImpact/Data/PC/3.2.0/",
            key: "<RSAKeyValue><Modulus>xbbx2m1feHyrQ7jP+8mtDF/pyYLrJWKWAdEv3wZrOtjOZzeLGPzsmkcgncgoRhX4dT+1itSMR9j9m0/OwsH2UoF6U32LxCOQWQD1AMgIZjAkJeJvFTrtn8fMQ1701CkbaLTVIjRMlTw8kNXvNA/A9UatoiDmi4TFG6mrxTKZpIcTInvPEpkK2A7Qsp1E4skFK8jmysy7uRhMaYHtPTsBvxP0zn3lhKB3W+HTqpneewXWHjCDfL7Nbby91jbz5EKPZXWLuhXIvR1Cu4tiruorwXJxmXaP1HQZonytECNU/UOzP6GNLdq0eFDE4b04Wjp396551G99YiFP2nqHVJ5OMQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>",
            // for online patch
            md5: {
                os: "09914469FE035070DA360C68E4475743",
                cn: "",
            },
        },
        original: {
            resources:
                "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221024103618_h2e3o3zijYKEqHnQ/ScatteredFiles/",
            cn: "<RSAKeyValue><Modulus>lCwdYrveozYYcKOSz4cjBfORvd6POZSxsM9JybWvTb9rr1qGhulgoNcMB0sUA4XnfNlt/aaT+JKSTEgynyX8of74Nmu70MRO2Nemi0YnI56gK2f0tIdmpFKnojgDTlLslQnKBzcK/elbcX2XE3FMK/hA2rkJBIMkIsXJ23nfWy/6KFB/nhXft+wzDahYmzaoLKsgq4xQInB6n0dUSkFNSMV+98CRjh+Y7pXlyEglDXxj+IhBVsl8s41c9vmgLHWS7feMufbeqko83fLv2GlI/aU0pvmYr9Lyf4kgPMp5aTqeyCm/ztb3bp5QoW7S2hlGP6gtxGr4s/lMpZN5YgTZbQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>",
            os: "<RSAKeyValue><Modulus>15RBm/vARY0axYksImhsTicpv09OYfS4+wCvmE7psOvZhW2URZ2Rlf5DsEtuRG/7v5W/2obqqVkf+1dorPcR2iqrYZ4VVPf7KU3Cgqh0kzLGxWOpGxzwJULEyFVaiMDWbk7gr8rik/jYyhLiLc52zz3E3whTUPleKhOhXnxx1iOKY+TPVI8jJfDNiQoh0UvgjnkigJ/saPzjogeig/4McBc4l5cDkvttkKQKq7oXe9OCBClgKlYjcc1CNalwMlTz7NvLEko+ZLTgpA+kElZumyBXT67mmW7t7IDXorscAI7auwusKWmq797alFkQ/6sUqs8KKGnqQ2fwHfa/RYDhEw==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>",
            // for check real file
            md5: {
                userassembly: "A1DB328DF8D382D2C5CDB350947F53E1",
                metadata: "D8484D3E48F07B4614DC782CB570FA93",
            },
        },
    });
}

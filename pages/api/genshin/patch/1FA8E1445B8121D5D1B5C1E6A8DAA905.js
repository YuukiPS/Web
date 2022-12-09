export default function handler(req, res) {
    res.status(200).json({
        version: "3.3.0",
        channel: "OS",
        release: "Global",
        patched: {
            metode: "RSA",
            resources: "https://file2.yuuki.me/p/Public/Local_EU/Project/GenshinImpact/Data/PC/3.3.0/Global/",
            key_patch:  "<RSAKeyValue><Modulus>xbbx2m1feHyrQ7jP+8mtDF/pyYLrJWKWAdEv3wZrOtjOZzeLGPzsmkcgncgoRhX4dT+1itSMR9j9m0/OwsH2UoF6U32LxCOQWQD1AMgIZjAkJeJvFTrtn8fMQ1701CkbaLTVIjRMlTw8kNXvNA/A9UatoiDmi4TFG6mrxTKZpIcTInvPEpkK2A7Qsp1E4skFK8jmysy7uRhMaYHtPTsBvxP0zn3lhKB3W+HTqpneewXWHjCDfL7Nbby91jbz5EKPZXWLuhXIvR1Cu4tiruorwXJxmXaP1HQZonytECNU/UOzP6GNLdq0eFDE4b04Wjp396551G99YiFP2nqHVJ5OMQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>",
            // for online patch
            md5_vaild: {
                os: "505665EEC269D92CC7AEE7FBA0DA01FD", // v1.1.0
                cn: "505665EEC269D92CC7AEE7FBA0DA01FD",
            },
        },
        original: {
            resources: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20221128113321_cOH1qEM6iRagjJC6/ScatteredFiles/",
            key_find: {
                cn: "",
                os: "",
            },
            // for check real file
            md5_check: {
                os: {
                    userassembly: "702671865EBA6BD49DB2DA707CF4B4EF",
                    metadata: "D7E9C1FFB28DEC883697F5DED6B38A2D",
                    mhypbase: "60A6AC12B5971DD4445108CE59D91C92",
                },
                cn: {
                    userassembly: "3DCE9FA8A7874C70575D38C4F839C229",
                    metadata: "3A8C5A55768071BD5D29C6044447AE48",
                    mhypbase: "DDE7BE33FE7EE421E190844A6A6243AE",
                },
            },
        },
    });
}

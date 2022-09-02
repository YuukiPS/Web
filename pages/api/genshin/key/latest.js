export default async function handler(req, res) {
    res.status(200).json({
        /* 
        TODO:create archive
        Metadata only works in official release versions and UserAssembly only works in beta 3.0.5x. More information will be collected later.
        */
        Patched: {
            MetaData: {
                key1: "yytg/H9lz7Lm0XcA8LMqIyXPVNApYTcSepT4VDLB4qqqFC3s/Huv8vN7zA/P4uoREIu8KMenADFk7uwrZSxoMWwJgn6A7sbAt1cqAaUXB9J4NzhL0x3AFTiHEQbw86hRvm2VGkbA5sWnr0NZw8SGBBY+EODwNIt51GdBA7eoUQU=",
                key2: "AMW28dptX3h8q0O4z/vJrQxf6cmC6yVilgHRL98GazrYzmc3ixj87JpHIJ3IKEYV+HU/tYrUjEfY/ZtPzsLB9lKBelN9i8QjkFkA9QDICGYwJCXibxU67Z/HzENe9NQpG2i01SI0TJU8PJDV7zQPwPVGraIg5ouExRupq8UymaSHEyJ7zxKZCtgO0LKdROLJBSvI5srMu7kYTGmB7T07Ab8T9M595YSgd1vh06qZ3nsF1h4wg3y+zW28vdY28+RCj2V1i7oVyL0dQruLYq7qK8FycZl2j9R0GaJ8rRAjVP1Dsz+hjS3atHhQxOG9OFo6d/euedRvfWIhT9p6h1SeTjE=",
                version: "3.0.0",
                url_os: "https://drive.yuuki.me/api/public/dl/ZOrLF1E5/GenshinImpact/Data/PC/3.0.0/Release/Global/Patch/global-metadata-patched.dat",
                url_cn: "https://drive.yuuki.me/api/public/dl/ZOrLF1E5/GenshinImpact/Data/PC/3.0.0/Release/Chinese/Patch/global-metadata-patched.dat",
                md5_os: "1307D55022167856879B284084F43426",
                md5_cn: "007E1AA68590878BE9B05AC79440E987",
            },
            UserAssembly: {
                key1: "",
                key2: "xbbx2m1feHyrQ7jP+8mtDF/pyYLrJWKWAdEv3wZrOtjOZzeLGPzsmkcgncgoRhX4dT+1itSMR9j9m0/OwsH2UoF6U32LxCOQWQD1AMgIZjAkJeJvFTrtn8fMQ1701CkbaLTVIjRMlTw8kNXvNA/A9UatoiDmi4TFG6mrxTKZpIcTInvPEpkK2A7Qsp1E4skFK8jmysy7uRhMaYHtPTsBvxP0zn3lhKB3W+HTqpneewXWHjCDfL7Nbby91jbz5EKPZXWLuhXIvR1Cu4tiruorwXJxmXaP1HQZonytECNU/UOzP6GNLdq0eFDE4b04Wjp396551G99YiFP2nqHVJ5OMQ==",
                version: "3.0.51",
                url_os: "",
                url_cn: "",
                md5_os: "2BFF01E229F802CAF161441B6FC9A1F2",
                md5_cn: "",
            },
        },
        Original: {
            MetaData: {
                key1: "w73pHTzBzdwGIZv75LSU/mCa+3COQ3LDSqnbMeQ2V9IA7lhbiI83cAbrayGDzZkSdRvMmwyBe6A1tnhKZubDGy/c7PRMVwnb6q5+dahC26o9F8bTEyKWghxUiOdD3z6UxVfV7f4ZslcKJKDlxZQBIAp/kAoBrOdmxaGDLcovsRE=",
                key2_os: "yYlF2xKeHRDZUSsXlLoSk/YAb2oIOwpbUeO4I+5GfWoybSpde4UnOlZgpKIDgltF3e9ST8bqIwuBxMoJTpOAnEKLNuBDdSeefHwhFqdczgeETxySwFKScmti1QRwgacrlgWglmaYCaeQrqbBceF9JbF4npi6S3+eFpw0j4rPjlE3vjh1AopaZQWAHGZI8Ixr7LDebe/uF8i7OCWXpkPKUTJnCEpyqM5H+pLN3MWRiL7mBR4XFqwKQr8J27Y3LN1iX9927hMsvAnh9PWoHzqpDTqIBF7w1ifYs3XQ3EMbf0zqc26UZXUaI5pD6qXNm3STz94SrfYqYY1R3Npz/Syaww==",
                key2_cn: "wt/Z98o8gbw94la07B1/ApVCuHWHGI7Pd8FPF3PvNYf1oTYwgRczQBfPqHfXyttRRP44mqG4tfrz2zO8gXENRSyDXtzu7dQGh3hu1t87TpPbiYcQ+ZHK58v6dy1jo30TTK64sRnjxJfWrKYDxSBxBzDbKClzqlY0J/4mVjKFxk7qS0HvoYydlRnhvJVOMdjt/SV6wyHRY66FvOvdk6BVLom3K0WBHNcFE6ChA3GQcR+xyX1Z058AviFrx6KS45mqRujUC5vZXuwbvgrICgEVlfOScHFnrTlFX8ysM4C1bSb8Icy3V8XSb7LjCmXBeB7TUpW2vjhKlzgZeWwNu1DaEw==",
                api_os: "02M1I1V/YvxANOvLFX8R7D8At40IlT7HDWpAW3t+tAgQ7sqjCeYOxiXqOaaw2kJhM3HT5nZll48UmykVq45Q05J57nhdSsGXLJshtLcTg9liMEoW61BjVZi9EPPRSnE05tBJc57iqZw+aEcaSU0awfzBc8IkRd6+pJ5iIgEVfuTluanizhHWvRli3EkAF4VNhaTfP3EkYfr4NE899aUeScbbdLFI6u1XQudlJCPTxaISx5ZcwM+nP3v242ABcjgUcfCbz0AY547WazK4bWP3qicyxo4MoLOoe9WBq6EuG4CuZQrzKnq8ltSxud/6chdg8Mqp/IasEQ2TpvY78tEXDQ==",
                api_cn: "z/fyfozlDIDWG9e3Lb29+7j3c66wvUJBaBWP10rB9HTE6prjfcGMqC9imr6zAdD9q+Gr1j7egvqgi3Da+VBAMFH92/5wD5PsD7dX8Z2f4o65Vk2nVOY8Dl75Z/uRhg0Euwnfrved69z9LG6utmlyv6YUPAflXh/JFw7Dq6c4EGeR+KejFTwmVhEdzPGHjXhFmsVt9HdXRYSf4NxHPzOwj8tiSaOQA0jC4E4mM7rvGSH5GX6hma+7pJnl/5+rEVM0mSQvm0m1XefmuFy040bEZ/6O7ZenOGBsvvwuG3TT4FNDNzW8Dw9ExH1l6NoRGaVkDdtrl/nFu5+a09Pm/E0Elw==",
                version: "3.0.0",
                url_os: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20220815143807_dyIghvy1b5fjfzHU/ScatteredFiles/GenshinImpact_Data/Native/Data/Metadata/global-metadata.dat",
                url_cn: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/ScatteredFiles/YuanShen_Data/Native/Data/Metadata/global-metadata.dat",
                md5_os: "809de2b9cd7a0f8cdd8687e3a8291cbb",
                md5_cn: "BACD1E9DE1888F4896DABA0216C3D829",
            },
            UserAssembly: {
                key1: "",
                key2: "",
                version: "3.0.51",
                url_os: "",
                url_cn: "",
                md5_os: "F72F697F75459EB50AF94B5F82C804F1",
                md5_cn: "",
            },
        },
    });
}

export default function handler(req, res) {
    res.status(200).json(
        {
            "gachaType": 301,
            "scheduleId": 903,
            "bannerType": "EVENT",
            "prefabPath": "GachaShowPanel_A079",
            "previewPrefabPath": "UI_Tab_GachaShowPanel_A079",
            "titlePath": "UI_GACHA_SHOW_PANEL_A048_TITLE",
            "costItemId": 223,
            "beginTime": 0,
            "endTime": 1924992000,
            "sortId": 9998,
            "rateUpItems4": [1053, 1020, 1045],
            "rateUpItems5": [1002],
            "fallbackItems5Pool2": [],
            "weights5": [[1, 80], [73, 80], [90, 10000]]
        }
    )
}
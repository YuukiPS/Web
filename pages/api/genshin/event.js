export default function handler(req, res) {
    // Note: remove event 5002 because trial event is useless
    res.status(200).json([
        /* event music */
        {
            activityId: 5072,
            activityType: 2202,
            scheduleId: 5072001,
            beginTime: 0,
            endTime: 1924992000,
            meetCondList: [5072001, 5072002, 5072003, 5072004, 5072005, 5072006, 5072007, 5072008, 5072009, 5072013],
        },
    ]);
}

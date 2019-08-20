import WMTSItem from "./WMTSItem";
import WMTSItemMgr from "./WMTSItemMgr";

const wmtsItemMgr = new WMTSItemMgr();
fetch('http://10.18.47.7:9099/SDCService/api/getAll')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const items = data;
        items.forEach((element: any) => {
            wmtsItemMgr.add(new WMTSItem(element));
        });
        test();
    });


function test() {
    wmtsItemMgr.sort();

    const pos = {
        x: 98.69500024694247,
        y: 31.074293669449448,
    };
    const start = "2019-07-10T10:18:56.980+0000";
    const end = "2019-08-19T10:18:56.980+0000";

    const items = wmtsItemMgr.find(pos, start, end);

    console.log(items);
}
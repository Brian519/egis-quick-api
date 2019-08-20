import WMTSItem from "./WMTSItem";


export default class WMTSItemMgr {

    constructor(items) {
        this.items = items || [];
    }

    add(item) {
        this.items.push(item);
    }

    sort() {
        this.items.sort(function (a, b) {
            return b.getTime() - a.getTime(); //时间正序
        });
    }

    get(id) {
        for (let i = 0; i < this.items.length; ++i) {
            const item = this.items[i];
            if (item.getId() == id) {
                return item;
            }
        }
    }

    find(position, start, end) {
        const start2 = Date.parse(start);
        const end2 = Date.parse(end);
        const items = [];
        for (let i = 0; i < this.items.length; ++i) {
            const item = this.items[i];
            if (item.timeIn(start2, end2) && item.ptIn(position)) {
                items.push(item);
            }
        }
        return items;
    }

}
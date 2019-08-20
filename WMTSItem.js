// id	3
// name	"GF1_PMS2_E113.2_N23.5_20180113_L1A0002927191-MSS2_OC_GSImageSharpenDistribut_RSUniformColor.tif"
// size	3696280522
// bandCount	4
// pixelType	2
// minX	113.00770498742229
// minY	23.296771568051224
// maxX	113.41986023634887
// maxY	23.677041088812423
// cols	22711
// rows	20954
// epsg	4326
// minLevel	8
// maxLevel	15
// tileSize	256
// minMaxValues	"[{},{},{}]"
// path	"/root/RSUniformColor_task_0/GF1_PMS2_E113.2_N23.5_20180113_L1A0002927191-MSS2_OC_GSImageSharpenDistribut_RSUniformColor_4326.vrt"
// time	"2019-07-18T06:37:44.455+0000"


export default class WMTSItem {

    constructor(info) {
        this.info = info;
    }

    getId() {
        return this.info.id;
    }

    getTime() {
        return Date.parse(this.info.time);
    }

    timeIn(start, end) {
        const time = this.getTime();
        return time >= start && time <= end;
    }

    ptIn(pos) {
        const x = pos.x;
        const y = pos.y;
        return x > this.info.minX && x < this.info.maxX &&
            y > this.info.minY && y < this.info.maxY;
    }
}
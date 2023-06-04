export class MenuSelection {

    constructor() {
        this.menu = {
            "SA":8,
            "AP":25,
            "RP":9,
            "SU":4,
            "TP":7,
            "PZ":8,
            "PA":23,
            "DG":11,
            "MT":12,
            "DE":16,
            "DB":3,
            "WN":19,
            "BR":5,
            "KZ":5
        }
    }


    convertMenuToString(key,value){
        return key+("00"+value).slice(-2);
    }

    pickUpMenu(){

        const keyList = Object.keys(this.menu);
        let key = keyList[Math.floor(Math.random()*keyList.length)]

        return this.convertMenuToString(
            key,
            Math.floor(Math.random()*(this.menu[key]+1)+1));
    }
}
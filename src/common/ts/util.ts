export function calCount(count = 0): string {
    const str: string = count.toFixed(0),
        len: number = str.length,
        units: string[] = ['万', '亿', '兆'];
    let temp: number = 0,
        int: string,
        decimal: string,
        unit: string,
        res: string;
    if (len < 5) {
        res = str
    } else {
        temp = Math.floor(len / 4);
        unit = units[temp - 1];
        int = str.substr(0, len - 4 * temp);
        decimal = str.charAt(len - 4 * temp);
        res = +decimal ? `${int}.${decimal}${unit}` : `${int}${unit}`
    }
    return res
}

export function shuffle(arr: object[]): object[] {
    let list = [...arr];
    for (let i = 0; i < list.length; i++) {
        let j = randomNum(0, i);
        let t = list[i];
        list[i] = list[j];
        list[j] = t
    }
    return list
}

export function findIndex(list: object[], song: any):number {
    return list.findIndex((item: any) => {
        return item.id === song.id
    })
}

function randomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
}


export function throttle(fn: any, threshhold = 250) {
    let last: number,
        deferTime: any;

    return function () {
        // @ts-ignore
        let context = this;

        let now = +new Date,
            args = arguments;

        if (last && now < last + threshhold) {
            clearTimeout(deferTime)
            deferTime = setTimeout(() => {
                last = now;
                fn.apply(context, args)
            }, threshhold)
        } else {
            last = now
            fn.apply(context, args)
        }
    }
}
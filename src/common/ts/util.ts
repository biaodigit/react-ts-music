export function calCount(count: number) {
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
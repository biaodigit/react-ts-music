interface SongType {
    name: string
    singer: string
    desc: string
    bgImage: string
}

export default class Song {
    public name: string
    public singer: string
    public desc: string
    public bgImage: string

    constructor({name, singer, desc, bgImage}: SongType) {
        this.name = name
        this.singer = singer
        this.desc = desc
        this.bgImage = bgImage
    }
}

export function createSong(song: any) {
    return new Song({
        name: song.name,
        singer: getSinger(song.ar),
        desc: song.al.name,
        bgImage: song.al.picUrl
    })
}

export function createSongs(songs: any) {
    let ret: any = [];
    songs.forEach((item: any) => {
        ret.push(createSong(item))
    });
    return ret
}

function getSinger(arr: any) {
    if (arr.length === 1) {
        return arr[0].name
    }
    let ret: any = [];
    arr.forEach((item: any) => {
        ret.push(item.name)
    })

    return ret.join('/')
}
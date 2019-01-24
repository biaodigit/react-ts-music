import {getLyric} from "../../api/song";
import {ERR_OK} from "./config";

interface SongType {
    id: number
    name: string
    singer: string
    desc: string
    image: string
    duration: number
}

export default class Song {
    public id: number;
    public name: string;
    public singer: string;
    public desc: string;
    public image: string;
    public url: string;
    public lyric: string;
    public duration: number

    constructor({id, name, singer, desc, image, duration}: SongType) {
        this.id = id;
        this.name = name;
        this.singer = singer;
        this.desc = desc;
        this.image = image;
        this.duration = duration;
        this.url = `https://music.163.com/song/media/outer/url?id=${this.id}.mp3`
    }

    getLyric() {
        return new Promise((resolve, reject) => {
            getLyric(this.id).then((res) => {
                if (res.data.code === ERR_OK) {
                    this.lyric = res.data.lrc.lyric;
                    resolve(this.lyric)
                }
            })
        })
    }
}

export function createSong(song: any) {
    return new Song({
        id: song.id,
        name: song.name,
        singer: getSinger(song.ar),
        desc: song.al.name,
        image: song.al.picUrl,
        duration: song.dt / 1000
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
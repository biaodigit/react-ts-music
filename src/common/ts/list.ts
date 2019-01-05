interface listDataType {
    creator: string
    creatorId: number
    descr: string
    id: number
    name: string
    tracks: any
    playCount: number
    coveryImg: string
}

export default class SongList {
    public descr: string;
    public id: number;
    public name: string;
    public creator: string;
    public creatorId: number;
    public tracks: any;
    public playCount: number;
    public coverImg:string

    constructor({descr, id, name, creator, creatorId,tracks,playCount,coveryImg}: listDataType) {
        this.descr = descr;
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.creatorId = creatorId;
        this.tracks = tracks;
        this.playCount = playCount
        this.coverImg = coveryImg
    }
}

export function createSongList(listData: any) {
    return new SongList({
        descr: listData.description,
        id: listData.id,
        name: listData.name,
        creator: listData.creator.nickname,
        creatorId: listData.creator.userId,
        tracks:listData.tracks,
        playCount:listData.playCount,
        coveryImg:listData.coverImgUrl
    })
}
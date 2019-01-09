import {createSongs} from './song'

interface listDataType {
    creator: string
    creatorId: number
    creatorAvatar: string
    descr: string
    id: number
    name: string
    tracks: any
    playCount: number
    coverImg: string
    commentCount: number
    shareCount: number
    trackCount: number
    subscribedCount: number
}

export default class SongList {
    public descr: string;
    public id: number;
    public name: string;
    public creator: string;
    public creatorId: number;
    public tracks: any;
    public playCount: number;
    public coverImg: string
    public creatorAvatar: string
    public commentCount: number
    public shareCount: number
    public trackCount: number
    public subscribedCount: number

    constructor({
                    descr, id,
                    name, creator,
                    creatorId, tracks,
                    playCount, coverImg,
                    creatorAvatar, commentCount,
                    shareCount, trackCount,
                    subscribedCount
                }: listDataType) {
        this.descr = descr;
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.creatorId = creatorId;
        this.creatorAvatar = creatorAvatar
        this.tracks = tracks;
        this.playCount = playCount
        this.coverImg = coverImg
        this.commentCount = commentCount
        this.shareCount = shareCount
        this.trackCount = trackCount
        this.subscribedCount = subscribedCount
    }
}

export function createSongList(listData: any) {
    return new SongList({
        descr: listData.description,
        id: listData.id,
        name: listData.name,
        creator: listData.creator.nickname,
        creatorId: listData.creator.userId,
        tracks: createSongs(listData.tracks),
        playCount: listData.playCount,
        coverImg: listData.coverImgUrl,
        creatorAvatar: listData.creator.avatarUrl,
        commentCount: listData.commentCount,
        shareCount: listData.shareCount,
        trackCount: listData.trackCount,
        subscribedCount: listData.subscribedCount
    })
}
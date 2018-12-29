export interface ScrollPropsType {
    beforeScroll?: boolean
    click?: boolean
    data?: any
    probeType?: number
    listenScroll?: boolean
    refreshDelay?: number
    // pulldown?: boolean
    pullDownRefresh: {
        threshold: number
        stop: number
    } | boolean
    pullDown?: () => void
    pullup?: boolean
    scrollX?: boolean
    scrollY?: boolean
}
import * as React from 'react'
import './music-list.scss'

interface PropsType {
    history: any
    data:any
}

class MusicList extends React.Component<PropsType, any> {
    constructor(props: PropsType) {
        super(props);

    }

    public render() {
        const {data} = this.props
        return (
            <div className='music-list-container'>
                <div className='music-list-header'>
                    <i onClick={() => this.props.history.goBack()} className="icon-back"/>
                    <h3 className='title'>歌单</h3>
                    <img className='player' src={require('../../assets/images/player.png')}/>
                </div>
                <div className='music-list-detail'>
                    <div className='bg-image' style={{backgroundImage: `url(${data.coverImg}?param=100y100)`}}/>
                    <div className='detail-container'>
                        <div className='detail-avatar'>
                            <img style={{backgroundImage: `url(${data.coverImg}?param=100y100)`}}/>
                        </div>
                        <div className="detail-content">
                            <h2 className='name'>{data.name}</h2>
                            <div className='creator'>
                                <img src='' className='creator-avatar'/>
                                <p className='creator-name'>{data.creator}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicList
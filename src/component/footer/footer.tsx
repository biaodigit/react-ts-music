import * as React from 'react'
import {Link} from 'react-router-dom'
import './footer.scss'


class Footer extends React.Component {
    public render() {
        // console.log(window.location.pathname)
        return (
            <div className='public-footer'>
                <Link className='tab' to='/'>
                    <img className='icon' src={require('./images/discover.png')}/>
                    <span className='tab-text'>发现</span>
                </Link>
                <Link className='tab' to='/video'>
                    <img className='icon' src={require('./images/video.png')}/>
                    <span className='tab-text'>视频</span>
                </Link>
                <Link className='tab' to='/mine'>
                    <img className='icon' src={require('./images/mine.png')}/>
                    <span className='tab-text'>我的</span>
                </Link>
                <Link className='tab' to='/singer'>
                    <img className='icon' src={require('./images/singer.png')}/>
                    <span className='tab-text'>歌手</span>
                </Link>
                <Link className='tab' to='/account'>
                    <img className='icon' src={require('./images/accounts.png')}/>
                    <span className='tab-text'>账号</span>
                </Link>
            </div>
        )
    }
}

export default Footer;

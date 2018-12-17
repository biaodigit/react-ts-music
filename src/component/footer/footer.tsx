import * as React from 'react'
import {Link} from 'react-router-dom'
import {tabs} from '../../common/ts/config'
import './footer.scss'

class Footer extends React.Component {
    public render() {
        return (
            <div className='public-footer border-1px-top '>
                {
                    tabs.map((item, index) => (
                        <Link className='tab' to={`${item.path}`} key={index}>
                            <img className='icon' src={this.calRoute(item.path)}/>
                            <span className={['text', this.calTextColor(item.path)].join(' ')}>{item.text}</span>
                        </Link>
                    ))
                }
            </div>
        )
    }

    private calRoute(path: string): string {
        if (path === window.location.pathname) {
            return require(`./images${path}_active.png`)
        } else {
            return require(`./images${path}.png`)
        }
    }

    private calTextColor(path: string): string {
        if (path === window.location.pathname) {
            return 'active'
        }
        return ''
    }
}

export default Footer;

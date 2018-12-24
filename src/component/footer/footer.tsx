import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {tabs} from '../../common/ts/config'
import './footer.scss'

interface PropsType {
    footerNav: string,
}

class Footer extends React.Component<PropsType, any> {
    constructor(props: PropsType) {
        super(props)
    }

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
        if (path === this.props.footerNav) {
            return require(`./images${path}_active.png`)
        } else {
            return require(`./images${path}.png`)
        }
    }

    private calTextColor(path: string): string {
        if (path === this.props.footerNav) {
            return 'active'
        }
        return ''
    }
}


export default connect(
    (state: any) => ({footerNav: state.footerNav}),
    null
)(Footer);

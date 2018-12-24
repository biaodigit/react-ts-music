import * as React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import * as footerActions from '../../actions/footer'
import {Link} from 'react-router-dom'
import {tabs} from '../../common/ts/config'
import './footer.scss'

interface PropsType {
    footerNav: string,
    switchNav: (path: string) => void
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
                        <Link onClick={() => this.jumpRoute(item.path)} className='tab' to={`${item.path}`} key={index}>
                            <img className='icon' src={this.calRoute(item.path)}/>
                            <span className={['text', this.calTextColor(item.path)].join(' ')}>{item.text}</span>
                        </Link>
                    ))
                }
            </div>
        )
    }

    private jumpRoute = (path: string) => {
        this.props.switchNav(path)
    };

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
    (dispatch) => bindActionCreators(footerActions, dispatch)
)(Footer);

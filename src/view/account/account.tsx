import * as React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import * as footerActions from '../../actions/footer'

interface PropsType {
    switchNav: (path: string) => void
}

const path: string = '/account';

class Account extends React.Component<PropsType, any> {
    constructor(props: PropsType) {
        super(props)
    }

    public componentDidMount() {
        this.props.switchNav(path)
    }

    public render() {
        return (
            <div className='account-container'>
                帐号
            </div>
        )
    }
}

export default connect(
    null,
    (dispatch) => bindActionCreators(footerActions, dispatch)
)(Account)
import * as React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import * as footerActions from '../../actions/footer'
import './video.scss'

interface PropsType {
    switchNav: (path: string) => void
}

const path: string = '/video';

class Video extends React.Component<PropsType, any> {
    constructor(props: PropsType) {
        super(props)
    }

    public componentDidMount() {
        this.props.switchNav(path)
    }

    public render() {
        return (
            <div className='video'>
                视频
            </div>
        )
    }
}

export default connect(
    null,
    (dispatch) => bindActionCreators(footerActions, dispatch)
)(Video)
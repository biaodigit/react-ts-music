import * as React from 'react';
import './loading.scss'

interface PropsType {
    text?: string
}

class Loading extends React.Component<PropsType, any> {
    static defaultProps = {
        text: '加载中...'
    }
    constructor(props: PropsType) {
        super(props);

    }

    public render() {
        const {text} = this.props
        return (
            <div className='loading-container'>
                <img src={require('../../assets/images/loading.gif')} width='24' height='24'/>
                <p className="text">{text}</p>
            </div>
        )
    }
}

export default Loading;
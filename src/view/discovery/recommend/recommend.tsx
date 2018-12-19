import * as React from 'react';
import './recommend.scss'

interface Props {
    disNav: string
}

class Recommend extends React.Component<Props,any> {
    constructor(props:Props){
        super(props)
    }
    public render() {
        return (
            <div className={['recommend-container', this.props.disNav === 'recommend' ? '' : 'hidden'].join(' ')}>
                个人推荐
            </div>
        )
    }
}

export default Recommend
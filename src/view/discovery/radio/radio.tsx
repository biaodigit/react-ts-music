import * as React from 'react';
import './radio.scss'

interface Props {
    disNav: string
}

class Radio extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        return (
            <div className={['radio-container', this.props.disNav === 'radio' ? '' : 'hidden'].join(' ')}>
                主播电台
            </div>
        )
    }
}

export default Radio
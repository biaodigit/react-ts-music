import * as React from 'react';
import './header.scss'

interface IProps {
    children: any
}

class Header extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return (
            <div className="public-header">
                {this.props.children}
            </div>
        )
    }
}

export default Header
import * as React from 'react';
import './header.scss'

interface IProps {
    children: object
}

class Header extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return (
            <div className="header-wrapper">
                {this.props.children}
            </div>
        )
    }
}

export default Header
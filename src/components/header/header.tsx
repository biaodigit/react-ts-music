import * as React from 'react';
import './header.scss'

interface Props {
    children: React.ReactNode
}

class Header extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        return (
            <div className="header-container">
                {this.props.children}
            </div>
        )
    }
}

export default Header
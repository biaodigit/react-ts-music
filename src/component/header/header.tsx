import * as React from 'react';
import './header.scss'

interface Props {
    children: object
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
import * as React from 'react';

interface PropsType {
    title: string
    className: string
    children: React.ReactNode
}

class Panel extends React.Component<PropsType, any> {
    constructor(props: PropsType) {
        super(props)
    }

    public render() {
        return (
            <div className={this.props.className}>
                <div className='title'>
                    <h4>{this.props.title}</h4>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Panel
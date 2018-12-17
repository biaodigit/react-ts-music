import * as React from 'react';
import './search-box.scss'

interface IProps {
    history?: any,
    location?: any,
    match?: any,
    staticContext?: any
}

class SearchBox extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public jumpSearch = () => {
        if (this.props.location.pathname === '/search') {
            return;
        }

        this.props.history.push({pathname: '/search'})
    }

    public render() {
        return (
            <div className='search-box'>
                <i className='icon-search'/>
                <input onFocus={this.jumpSearch} className='box' placeholder='搜索你想听的歌曲吧～'/>
            </div>
        )
    }
}

export default SearchBox
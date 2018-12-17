import * as React from 'react';
import Header from '../../component/header/header'
import SearchBox from '../../base/searct-box/search-box'
import './search.scss'


interface IProps {
    history?: any,
    location?: any,
    match?: any,
    staticContext?: any
}

class Search extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public goBack = () => {
       this.props.history.goBack()
    }

    public render() {
        return (
            <div className='search-wrapper'>
                <Header>
                    <SearchBox {...this.props}/>
                    <div onClick={this.goBack} className='right-wrapper'>
                        <span className="cancel">取消</span>
                    </div>
                </Header>
                搜索
            </div>
        )
    }
}

export default Search
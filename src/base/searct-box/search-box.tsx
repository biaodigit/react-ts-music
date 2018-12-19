import * as React from 'react';
import * as searchAction from '../../actions/search'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import './search-box.scss'

interface Props {
    searchIsShow: boolean,
    showSearch: () => void
}

class SearchBox extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props)
    }

    public goSearch = () => {
        if (!this.props.searchIsShow) {
            this.props.showSearch();
        }

    }

    public render() {
        return (
            <div className='search-box'>
                <i className='icon-search'/>
                <input onFocus={this.goSearch} className='box' autoFocus={this.props.searchIsShow}
                       placeholder='搜索你想听的歌曲吧～'/>
            </div>
        )
    }
}

export default connect(
    (state:any) => ({searchIsShow: state.searchIsShow}),
    (dispatch) => bindActionCreators(searchAction, dispatch)
)(SearchBox);

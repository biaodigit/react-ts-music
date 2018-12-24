import * as React from 'react';
import Header from '../../component/header/header';
import SearchBox from '../../base/searct-box/search-box';
import * as searchActions from '../../actions/search';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import './search.scss'


interface Props {
    searchIsShow: boolean,
    showSearch: () => void
}

class Search extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props)
    }

    public goBack = () => {
        this.props.showSearch()
    }

    public render() {
        return (
            <div className={['search-container', this.calSearchHidden()].join(' ')}>
                <Header>
                    <div className='left-container'/>
                    <SearchBox {...this.props}/>
                    <div onClick={this.goBack} className='right-container'>
                        <span className="cancel">取消</span>
                    </div>
                </Header>
                搜索
            </div>
        )
    }

    private calSearchHidden = () => {
        return (!this.props.searchIsShow ? 'hidden' : '')
    }
}


export default connect(
    (state:any) => ({searchIsShow: state.searchIsShow}),
    (dispatch) => bindActionCreators(searchActions, dispatch)
)(Search)
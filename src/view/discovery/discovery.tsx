import * as React from 'react'
import Header from '../../component/header/header'
import Slider from '../../base/slider/slider'
import SearchBox from '../../base/searct-box/search-box'
import {getBanner} from "../../api/discovery";

class Discovery extends React.Component {
    public componentWillMount() {
        this._getBanner()
    }

    public render() {
        return (
            <div className='discovery'>
                <Header>
                    <SearchBox/>
                </Header>
                <Slider/>
            </div>
        )
    }

    private _getBanner(): void {
        getBanner().then((res) => {
            console.log(res)
        })
    }
}

export default Discovery;
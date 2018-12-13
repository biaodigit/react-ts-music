import * as React from 'react'
import Header from '../../component/header/header'
// import BScroll from 'better-scroll'
import {getBanner} from "../../api/discovery";


class Discovery extends React.Component<{}, {}> {
    public componentWillMount() {
        this._getBanner()
    }

    public render() {
        return (
            <div className='discovery'>
                <Header/>
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
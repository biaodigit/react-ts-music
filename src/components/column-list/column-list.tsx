import * as React from 'react'
import {calCount} from "../../common/ts/util";
import './column-list.scss'

interface PropsType {
    data: object[]
    select: (id: number) => void
}

class ColumnList extends React.Component<PropsType, any> {
    constructor(props: PropsType) {
        super(props)
    }

    public render() {
        const {data} = this.props
        return (
            <ul className='column-list-container'>
                {
                    data.map((item: any, index: number) => (
                        <li onClick={() => this.props.select(item.id)} className='column' key={index}>
                            <div className='icon'>
                                <img className='bg-img' src={item.picUrl}/>
                                {
                                    item.playCount && item.playCount > 0 &&
                                    <div className='play-count-container'>
                                        <img className='play-count-img' src={require('../../assets/images/headphone.png')}/>
                                        <span className='play-count-num'>{calCount(item.playCount)}</span>
                                    </div>
                                }
                            </div>
                            <p className='text'>{item.name}</p>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default ColumnList
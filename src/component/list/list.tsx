import * as React from 'react'
import './list.scss'

interface PropsType {
    data: object[]
}

class List extends React.Component<PropsType, any> {
    constructor(props: PropsType) {
        super(props)
    }

    public render() {
        const {data} = this.props
        return (
                <ul className='list-container'>
                    {
                        data.map((item: any, index: number) => (
                            <li className='list' key={index}>
                                <div className='icon'>
                                    <img src={item.picUrl}/>
                                </div>
                                <p className='text'>{item.name}</p>
                            </li>
                        ))
                    }
                </ul>
        )
    }
}

export default List
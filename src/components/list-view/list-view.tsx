import * as React from 'react';
import './list-view.scss'

interface PropsType {
    data: any
    selectItem: (index: number) => void
}

class ListView extends React.Component<PropsType, any> {
    constructor(props: PropsType) {
        super(props)
    }

    public render() {
        const {data, selectItem} = this.props
        return (
            <ul className='list-detail'>
                {
                    data && data.length && data.map((item: any, index: number) => (
                        <li onClick={() => selectItem(index)} className="list-item" key={index}>
                            <div className='rank'>
                                <span>{index + 1}</span>
                            </div>
                            <div className='content border-1px-bottom'>
                                <h2 className='name'>{item.name}</h2>
                                <p className='desc'>{item.singer} - {item.desc}</p>
                            </div>
                            <div className='play-video border-1px-bottom'>
                                <i className='play icon-play'/>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default ListView
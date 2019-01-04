import * as React from 'react'
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
                                        <span className='play-count-num'>{this.calPlayCount(item.playCount)}</span>
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

    private calPlayCount = (count: number) => {
        const str: string = count.toFixed(0),
            len: number = str.length,
            units: string[] = ['万', '亿', '兆'];
        let temp: number = 0,
            int: string,
            decimal: string,
            unit: string,
            res: string;
        if (len < 5) {
            res = str
        } else {
            temp = Math.floor(len / 4);
            unit = units[temp - 1];
            int = str.substr(0, len - 4 * temp);
            decimal = str.charAt(len - 4 * temp);
            res = +decimal ? `${int}.${decimal}${unit}` : `${int}${unit}`
        }
        return res
    }
}

export default ColumnList
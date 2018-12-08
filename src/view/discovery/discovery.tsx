import * as React from 'react'
import Header from '../../component/header/header'

class Discovery extends React.Component {
    // public componentWillMount() {
    //
    // }
    constructor(props:any) {
        super(props)
    }

    public render() {
        return (
            <div className='discovery'>
                <Header/>
            </div>
        )
    }
}

export default Discovery;
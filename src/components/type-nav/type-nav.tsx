import * as React from 'react';
import {TypeNavPropsType} from "./PropsType";
import './type-nav.scss'

class TypeNav extends React.Component<TypeNavPropsType, any> {
    constructor(props: TypeNavPropsType){
        super(props)
    }
    public render() {
        return (
            <div className='type-nav-container border-1px-bottom'>
                {this.props.children}
            </div>
        )
    }
}

export default TypeNav
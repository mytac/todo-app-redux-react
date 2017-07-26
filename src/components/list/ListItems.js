import React,{Component} from 'react'
import NormalText from '../Content/NormalText'
import CreateTime from '../time/CreateTime'

export default class ListItems extends Component{
    render(){
        const {text,completed,time}=this.props.todo
        return(
            <li className="todo">
                <div className="type-icon">
                    <span className="icon-folder-open"></span>
                </div>
                <div className="content">
                    <CreateTime time="15"/>
                    <NormalText text="121654"/>
                    <NormalText text="121654"/>
                </div>
            </li>
        )
    }
}
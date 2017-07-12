import React,{Component} from 'react'

export default class ListItems extends Component{
    render(){
        const {text,completed,time}=this.props.todo
        return(
            <li className="todo">
                <div className="type-icon">
                    <span className="icon-folder-open"></span>
                </div>
                <div className="content">

                </div>
            </li>
        )
    }
}
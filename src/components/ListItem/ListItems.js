import React,{Component} from 'react'
import NormalText from '../Content/NormalText'
import CreateTime from '../time/CreateTime'
export default class ListItems extends Component{
    render(){
        const {title,content,completed,time}=this.props.todo
        return(
            <li className="todo">
                <div className="type-icon">
                    <span className={`icon-folder${completed?'-open':''}`}></span>
                </div>
                <div className="content">
                    <CreateTime time={time}/>
                    <NormalText text={title} />
                    <NormalText text={content} style={{color:'#ddd',fontSize:'30px'}}/>
                </div>
            </li>
        )
    }
}
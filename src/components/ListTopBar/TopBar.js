import React,{Component} from 'react'
import TaskNumBoard from '../list/TaskNumBoard'

const getDate=()=>{
    const mydate=new Date()
    return mydate.toLocaleDateString().split('/').join(' - ')
}

export default class TopBar extends Component{
    render(){
        return(
            <div className="top-bar">
                <div>
                    <div className="title">TODO THINGS</div>
                    <div className="date">{getDate()}</div>
                </div>
                <div className="taskNum-block">
                    <TaskNumBoard/>
                </div>
            </div>
        )
    }
}
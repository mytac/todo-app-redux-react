import React,{Component} from 'react'
import TaskNumBoard from '../list/TaskNumBoard'
import ProgressBar from '../ProgressBar'

const getDate=()=>{
    const mydate=new Date()
    return mydate.toLocaleDateString().split('/').join(' - ')
}

export default class TopBar extends Component{
    render(){
        return(
            <div>
                <div className="top-bar">
                    <div>
                        <div className="title">TODO THINGS</div>
                        <div className="date">{getDate()}</div>
                    </div>
                    <div className="taskNum-block">
                        <TaskNumBoard/>
                    </div>
                </div>
                <ProgressBar ratio="90%"/>
            </div>

        )
    }
}
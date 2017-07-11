import React,{Component} from 'react'

const getDate=()=>{
    const mydate=new Date()
    return mydate.toLocaleDateString().split('/').join(' - ')
}

export default class TopBar extends Component{
    render(){
        return(
            <div className="top-bar">
                <div className="title">TODO THINGS</div>
                <div className="date">{getDate()}</div>
                <div className="taskNum"></div>
            </div>
        )
    }
}
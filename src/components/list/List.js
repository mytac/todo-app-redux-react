import React,{Component} from 'react'

import ListItems from './ListItems'
export default class List extends Component{
    render(){
        const todos=[
            {text:'12312',completed:true,time:'2017-1-11'},
            {text:'123sadsds12',completed:false},
            {text:'15254562',completed:false},
            {text:'aaaaaaa',completed:true},
        ]
        return(
            <div className="lists">
                <span className="mid-header">INBOX</span>
                <ul>
                    {todos.map((todo,index)=><ListItems todo={todo}  key={index}/>)}
                </ul>
            </div>
        )
    }
}
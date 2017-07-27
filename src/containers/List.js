import React,{Component} from 'react'

import ListItems from '../components/ListItem/ListItems'
export default class List extends Component{
    render(){
        const todos=[
            {title:'meal',content:'with my boss',completed:true,time:'18'},
            {title:'meal',content:'with my boss',completed:false,time:'8'},
            {title:'meal',content:'with my boss',completed:true,time:'18'},
            {title:'meal',content:'with my boss',completed:true,time:'18'},
            {title:'meal',content:'with my boss',completed:true,time:'18'},
            {title:'meal',content:'with my boss',completed:true,time:'18'},
            {title:'meal',content:'with my boss',completed:true,time:'18'},
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
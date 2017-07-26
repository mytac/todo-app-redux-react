import React,{Component} from 'react'
import TopBar from './TopBar'
import ProgressBar from '../ProgressBar'

import '../../less/list.less'

export default class List extends Component{
    render(){
        return(
            <div>
                <TopBar/>
                <ProgressBar ratio="60%"/>
            </div>
        )
    }
}
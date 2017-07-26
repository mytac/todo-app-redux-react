import React from 'react';

import TopBar from './ListTopBar/TopBar'
import ProgressBar from './ProgressBar'
import List from '../containers/List'
import CrossButton from './Button/CrossButton'
import BottomBar from './BottomBar'

import '../less/index.less'
import '../less/list.less'

export default function ListPage(){
    return(
        <div>
            <TopBar/>
            <ProgressBar ratio="60%"/>
            <List/>
            <CrossButton/>
            <BottomBar/>
        </div>
    )
}

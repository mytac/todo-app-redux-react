import React from 'react';

import TopBar from './ListTopBar/TopBar'
import List from '../containers/List'
import CrossButton from './Button/CrossButton'
import BottomBar from './BottomBar'

import '../less/index.less'

export default function Root(){
    return(
        <div>
            <TopBar/>
            <List/>
            <CrossButton/>
            <BottomBar/>
        </div>
    )
}

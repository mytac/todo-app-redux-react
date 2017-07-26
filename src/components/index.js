import React, {Component} from 'react';
import {render} from 'react-dom';
import CrossButton from './Button/CrossButton'
import BottomBar from './BottomBar'
import '../less/index.less'

import AddPage from './list'
import List from './list/List'

render(
    <div>
        <AddPage/>
        <List/>
        <CrossButton/>
        <BottomBar/>
    </div>,
    document.getElementById('root')
)
import React, {Component} from 'react';
import {render} from 'react-dom';
import CrossButton from './Button/CrossButton'
import '../less/index.less'

import AddPage from './list'
import List from './list/List'

render(
    <div>
        <AddPage/>
        <List/>
        <CrossButton/>

    </div>,
    document.getElementById('root')
)
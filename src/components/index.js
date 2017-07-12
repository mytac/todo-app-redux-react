import React, {Component} from 'react';
import {render} from 'react-dom';

import '../less/index.less'

import AddPage from './list'
import List from './list/List'

render(
    <div>
        <AddPage/>
        <List/>
    </div>,
    document.getElementById('root')
)
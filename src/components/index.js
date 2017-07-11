import React, {Component} from 'react';
import {render} from 'react-dom';

import '../less/public.less'
import '../less/index.less'

import AddPage from './list'

render(
    <div>
        <AddPage/>
    </div>,
    document.getElementById('root')
)
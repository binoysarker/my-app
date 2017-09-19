
import ReactDOM from 'react-dom';

import React from 'react';

// main coding start here
function clock() {
    ReactDOM.render(
        <h1>Clock Time: {new Date().toLocaleTimeString()} </h1>,
        document.getElementById('root')
    )
}
setInterval(function () {
    clock()
},1000)


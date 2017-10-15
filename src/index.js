import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


var data = [{ 'when': '2 minutes ago',
    'who': 'Jill Dupre',
    'description': 'Created new account'
    },
    {
        'when': '1 hour ago',
        'who': 'Lose White',
        'description': 'Added fist chapter'
    },
    {
        'when': '2 hours ago',
        'who': 'Jordan Whash',
        'description': 'Created new account'
    }];

var headings = ['Last updated at', 'By Author', 'Summary'];
var title = 'Recent Changes';

ReactDOM.render(<App headings={headings} changeSets={data} title={title} />, document.getElementById('root'));
registerServiceWorker();

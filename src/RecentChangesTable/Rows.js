import React from 'react';
import Row from './Row';

class Rows extends React.Component{
    render() {
        var rows = this.props.changeSets.map(function(changeSet) {
            return(<Row changeSet = {changeSet}/>);
        });
        return <tbody>{rows}</tbody>;
    }
}

export default Rows
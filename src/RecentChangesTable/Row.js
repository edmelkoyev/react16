import React from 'react';

class Row extends React.Component{
    render() {
        return <tr>
            <td>{this.props.changeSet.when}</td>
            <td>{this.props.changeSet.who}</td>
            <td>{this.props.changeSet.description}</td>
        </tr>;
    }
}

export default Row
import React from 'react';

class Heading extends React.Component {
    render() {
        return (
            <th>{this.props.heading}</th>
        );
    }
}

export default Heading
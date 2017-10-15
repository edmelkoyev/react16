import React from 'react';
import Heading from './Heading';

class Headings extends React.Component {
    render() {

        var headings = this.props.headings.map(function(name) {
            return <Heading heading = {name}/>;
        });

        return <thead><tr>{headings}</tr></thead>;
    }
}

export default Headings
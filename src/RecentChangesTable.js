import React from 'react';

class RecentChangesTable extends React.Component {
    render() {
        return (
            <table className = "table">
                {this.props.children}
            </table>
        );
    }
}

export default RecentChangesTable
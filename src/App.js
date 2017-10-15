import React from 'react';
import RecentChangesTable from './RecentChangesTable';
import Headings from './RecentChangesTable/Headings';
import Rows from './RecentChangesTable/Rows';

class App extends React.Component {
  render() {

      return (
          <div>
              <h1>{this.props.title}</h1>

              <RecentChangesTable>
                  <Headings headings = {this.props.headings} />
                  <Rows changeSets = {this.props.changeSets} />
              </RecentChangesTable>

          </div>
      );
  }
}

export default App

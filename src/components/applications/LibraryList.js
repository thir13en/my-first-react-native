import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';


class LibraryList extends Component {
  renderItem(library) {
    return (<ListItem library={library} />);
  }

  render() {
    const { libraries } = this.props;
    console.log(this.state);
    // if (this.state.selectedLibraryId !== null) {
    if (false) {
      return (<Text>Selected</Text>);
    } else {
      return (
        <FlatList
          data={libraries}
          renderItem={this.renderItem}
          keyExtractor={library => library.id.toString()}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  console.log('state change detected in LibraryList');
  return {
    libraries: state.libraries,
    selectedLibraryId: state.selectedLibrary.id
  };
};

export default connect(mapStateToProps)(LibraryList);

import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ListItem from './ListItem';
import { connect } from 'react-redux';


class LibraryList extends Component {
  renderItem(library) {
    return (<ListItem library={library} />);
  }

  render() {
    const { libraries } = this.props;

    return (
      <FlatList
        data={libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries,
    selectedLibraryId: state.selectedLibrary.id
  };
};

export default connect(mapStateToProps)(LibraryList);

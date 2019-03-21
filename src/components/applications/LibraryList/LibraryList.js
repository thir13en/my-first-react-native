import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ListItem from './ListItem';


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

export default LibraryList;

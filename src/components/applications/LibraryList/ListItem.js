// react stuff
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import CardSection from '../../shared/CardSection';
import * as actions from '../../../store/actions';
import selectedLibrary from '../../../store/reducers/SelectionReducer';

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;
    if (library.item.id === selectedLibraryId) {
      return (
        <Text>{library.item.description}</Text>
      );
    }
    return null;
  }

  render() {
    const { library, SelectLibrary } = this.props;
    const { id, title } = library.item;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => SelectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => ({ selectedLibraryId: state.selectedLibrary.id });

export default connect(mapStateToProps, actions)(ListItem);

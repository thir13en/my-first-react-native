// react stuff
import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';
import { connect } from 'react-redux';

import CardSection from '../../shared/CardSection';
import * as actions from '../../../store/actions';


class ListItem extends Component {
  componentWillMount() {
    // necessary for layoutAnimation to work on Android
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { expanded, library } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.item.description}</Text>
        </CardSection>
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibrary.id === ownProps.library.item.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);

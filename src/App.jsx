'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import propTypes from 'prop-types';
import styles from './styles/app';

class App extends Component {

  static propTypes = {
    name: propTypes.string
  };

  static defaultProps = {
    name: "Jonathan"
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    const { name } = this.props;

    return (
      <View style={styles.container}>
        <Text>Hi { name }!, Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default App;
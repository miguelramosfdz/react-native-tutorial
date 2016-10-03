import React, {Component} from 'react';

import {
  View,
  Text,
} from 'react-native';

const Spinner = require('react-native-spinkit');

import User from './User';

import s from '../styles';

export default class ChatUsersTyping extends Component {
  render() {
    const {users} = this.props;

    const itemStyle = [
      s.flxRow,
      s.rounded6,
      s.bgSilver,
      s.h2,
      s.itemsCenter,
      s.jcCenter,
      { left: 5, top: -5 }
    ];

    return (
      <View style={[{flex: 0}, s.flxRow]}>
        {users.map(user =>
          <View key={user.id} style={itemStyle}>
            <User uri={user.avatar_url} size={32}/>
            <View style={[s.ml1]}>
              <Text style={[s.black, s.italics, s.f6, {fontStyle: 'italic'}]}>
                {user.login}
              </Text>
            </View>
            <View style={{ marginTop: -5, marginLeft: 8, marginRight: 10}}>
              <Spinner type="ThreeBounce" />
            </View>
          </View>)}
      </View>
    );
  }
}

ChatUsersTyping.propTypes = {
  users: React.PropTypes.array,
};

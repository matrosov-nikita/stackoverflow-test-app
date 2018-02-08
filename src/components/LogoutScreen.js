import React from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default class LogoutScreen extends React.Component {
  render() {
    return (
        <View style={styles.containerStyle}>
            <Text style={{fontSize: 27}}> Good Bye </Text>

            <Button
              onPress={() => this.props.navigation.navigate('Login')}
              title="Log Out"
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
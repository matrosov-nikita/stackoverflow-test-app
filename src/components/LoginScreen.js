import React from 'react';
import { Image, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { LogIn } from '../actions';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name : '', pass: '', invalidName: false, invalidPass: false };
  }

  render() {
    let warningText = this.state.invalidName || this.state.invalidPass ? 'Incorrect login or password' : '';
    return (
        <View style={styles.containerStyle}>
            <Text style={{fontSize: 27}}> Welcome </Text>
            <View style={styles.rowStyle}>
              <Image source={require('../components/images/user.icon.png')} style={styles.iconStyle} />
              <TextInput placeholder='username' style={styles.input} onChangeText={(name) => this.setState({name})}/>
            </View>
            <View style={styles.rowStyle}>
              <Image source={require('../components/images/lock.icon.png')} style={styles.iconStyle} />
              <TextInput placeholder='password' style={styles.input} secureTextEntry onChangeText={(pass) => this.setState({pass})}/>
            </View>
            <Text style={{color: 'red'}}>{warningText}</Text>
            <Button onPress={() => {
              if (this.state.name.length == 0 || this.state.pass.length == 0) {
                return this.setState({
                  invalidName: true,
                  invalidPass: true,
                });
              }
                this.props.navigation.dispatch(LogIn(this.state.name));
                this.props.navigation.navigate('Drawer');
              }}

              style={styles.button}
              title="Log In"
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
  input: {
    height: 37,
    width: 250,
    paddingLeft: 10
  },
  button: {
    height: 30,
    width: 250,
  },
  rowStyle: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 16,
    height: 16
  },
});
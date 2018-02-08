import React from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { LogIn } from '../actions';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name : '', pass: '' };
  }

  render() {
    return (
        <View style={styles.containerStyle}>
            <Text style={{fontSize: 27}}> Welcome </Text>
            <TextInput placeholder='username' style={styles.input} onChangeText={(name) => this.setState({name})}/>
            <TextInput placeholder='password' style={styles.input} secureTextEntry onChangeText={(pass) => this.setState({pass})}/>
            <Button onPress={() => {
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
    width: 250
  },
  button: {
    height: 30,
    width: 250,
  }
});
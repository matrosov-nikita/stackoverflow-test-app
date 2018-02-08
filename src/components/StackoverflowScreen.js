import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { LogOut, FetchResources } from '../actions/index';

export default class StackoverflowScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Stackoverflow',
  };

  render() {
    const data = this.props.screenProps.dataSource;

    return (
        <View style={styles.containerStyle}>
            {this.props.screenProps.isLoading > 0 &&
                 <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            }       

            <FlatList
                data={data}
                renderItem ={({item}) => (
                    <View> 
                      <Text style={{ padding: 10 }}> {item.title} </Text> 
                    </View>
                )}
            />
        </View>
    );
  }

  componentWillMount() {
    FetchResources(this.props.navigation.dispatch);
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  containerStyle: {
    flex: 1,
  },
  button: {
    height: 30,
    width: 250,
  }
});
import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default class HomeScreen extends React.Component {
  render() {

    
    this.props.navigation.setOptions({
      headerBackTitle: '',
      headerShown: false,
    })

    return (
      <View style={styles.container}>
        <Image 
          style={{
            width: "100%",
            height: 300,
          }}
          source={require('../assets/home.jpg')}
          resizeMode="contain"
        />
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
        }}>Hello!</Text>
        <Text style={{
          fontSize: 16, 
          color: 'gray', 
          textAlign: 'center', 
          marginHorizontal: 20,
        }}>Welcome</Text>

        <View style={{ 
          flexDirection: 'row', 
          margin: 20,
          paddingVertical: 50,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')} 
            style={{
              backgroundColor: '#0d47a1',
              padding: 15,
              width: 150,
              borderRadius: 30,
            }}>
            <Text style={{
              textAlign: 'center',
              color: '#FFF',
              fontSize: 18,
            }}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

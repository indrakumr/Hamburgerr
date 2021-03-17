import React from 'react'
import {View,Text, StyleSheet, SafeAreaView, TouchableOpacity}
       from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'

export default class Screen extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <SafeAreaView  style = {{Flex : 1}}>
                    <TouchableOpacity style ={{alignItems : 'flex-end', margin :16 }}
                        onPress = {this.props.navigation.openDrawer} >
                        <FontAwesome5  name = 'bars' size = {24} color = '#161924'/>
                    </TouchableOpacity>
                    <View style = {{Flex :1,alignItems : 'center' , justifyContent :'center' }} >
                        <Text style = {StyleSheet.text}> {this.props.name} Screen </Text>
                    </View>
                </SafeAreaView>

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
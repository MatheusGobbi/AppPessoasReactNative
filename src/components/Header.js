import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => (
 <View style={Style.container}>
     <Text style={Style.title}>{props.title}</Text>
 </View>

);


const Style = StyleSheet.create ({
    container: {
        marginTop: 25,
        backgroundColor: '#4B0082',

        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize:50,
        color: '#fff',
    }
});

export default Header;
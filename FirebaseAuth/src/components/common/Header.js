// Import libraries for making 

import React from 'react';
import {Text, View} from 'react-native';

// make a component 
const Header = (props) => {
    const { textStyle, viewStyles } = styles;
return (
    <View style = {viewStyles}> 
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles = {
    viewStyles: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'flex-end',
        alignItems: 'center',
        topPadding: 50,
        height: 90,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 30
    }
};


// Make the component available to other parts of the app
export { Header };
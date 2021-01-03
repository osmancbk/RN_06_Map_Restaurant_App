import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { cityStyle } from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const City = (props) => {
    return (
        <TouchableOpacity
            style={cityStyle.container}
            onPress={props.onSelect}
        >
             <Icon name='home-city-outline' color='#424242' size={20} />
            <Text style={cityStyle.text} >{props.cityName}</Text>
        </TouchableOpacity>
    );
};
export { City };
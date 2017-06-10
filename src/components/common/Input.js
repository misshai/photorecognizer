import React from 'react';
import { TextInput, Text, View} from 'react-native';

const Input = ({ label, placeHolder, onChangeText, value, secureTextEntry }) => {
    const { labelStyle, inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
        labelStyle: {
            flex: 1,
            fontSize: 18,
            paddingLeft: 20
        },
        containerStyle: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            height: 40
        },
        inputStyle: {
            width: 100,
            height: 40,
            color: '#000',
            fontSize: 18,
            paddingRight: 5,
            paddingLeft: 5,
            lineHeight: 23,
            flex: 2

        }
    }
    ;
export { Input };

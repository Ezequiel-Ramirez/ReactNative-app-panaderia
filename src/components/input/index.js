import React, {useReducer, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Button } from 'react-native';
import { styles } from './styles';



const Input = (props) => {
    const { onInputChange, onInputBlur, inputState, inputChangeHandler, inputBlurHandler, email, required, min, max, minLength, errorText } = props;

    const [inputState, setInputState] = useReducer(reducer, { 
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initiallyValid,
        touched: false,
    });

    const INPUT_CHANGE = 'INPUT_CHANGE';
    const INPUT_BLUR = 'INPUT_BLUR';

    const inputReducer = (state, action) => {
        switch (action.type) {
            case INPUT_CHANGE:
                return {
                    ...state,
                    value: action.value,
                    isValid: action.isValid
                };
            case INPUT_BLUR:
                return {
                    ...state,
                    touched: true
                }
            default:
                return state;
        }
    }

    const handleOnChange = (text) => {
        const emailregex = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
        let isValid = true;
        if (required && text.trim().length === 0) isValid = false;
        if (email && !emailregex.test(text.toLowerCase())) isValid = false;
        if (min != null && +text < min) isValid = false;
        if (max != null && +text > max) isValid = false;
        if (minLength != null && text.length < minLength) isValid = false;
       
        dispatch(
            {
                type: INPUT_CHANGE,
                value: text,
                isValid: isValid
            })
        
    }

    const handleOnBlur = (text) => {
        dispatch(
            {
                type: INPUT_BLUR
            })
    }

 useEffect(() => {
    if (inputState.touched) {
        onInputChange(inputState.value, inputState.isValid);
    }
}, [inputState, onInputChange]);


    return (
        <View style={styles.containerForm}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input}
                {...props}
                autoCorrect={false}
                onChangeText={handleOnChange}
                onBlur={handleOnBlur}
                value={inputState.value}
            />
            {!inputState.isValid && inputState.touched && (
                <Text style={styles.error}>{errorText}</Text>
            )}
           
        </View>
    )
}

export default Input;

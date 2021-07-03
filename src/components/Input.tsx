import React, { forwardRef, ForwardRefRenderFunction } from 'react';

import {
    Text,
    TextInput,
    StyleSheet,
    TextInputProps
} from 'react-native'
import { useForm } from '../hooks/useForm';


interface InputProps {
    title: string
}

const InputBase: ForwardRefRenderFunction<any, InputProps> = ({ title }, ref) => {
 
    return (
        <>
            <TextInput 
                style={styles.input} 
                placeholder={title}
                ref={ref}
            />
        </>
    )
}

export const Input = forwardRef(InputBase);

const styles = StyleSheet.create({
    input: {
        height: 54,
        width: '100%',
        backgroundColor: "#FFF",
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 10,
        fontSize: 14
    }
})
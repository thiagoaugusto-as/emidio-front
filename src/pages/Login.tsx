import React, { useState, useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    Image
} from 'react-native'

import colors from '../styles/colors';


//import { Input } from 'react-native-elements'

import LoginImg from '../assets/login.png';

import { Button } from '../components/Button';
import { useAuth } from '../contexts/auth';
import { validateEmail } from '../utils/validateEmail';
import fonts from '../styles/fonts';

interface InputLogin {
    username: string;
    password: string;
}

export function Login() {
    const { handleSubmit, control, formState: {errors} } = useForm();

    const [inputValid, setInputValid] = useState<boolean>(false)

    const { signed, signIn, user } = useAuth();

    useEffect(() => {
        
    }, [])

    function handleSignIn({password, username}: InputLogin) {
        signIn({
            username,
            password
        });
    }
 
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image style={styles.loginImg} source={LoginImg}/>

            <Text style={styles.title}>Login</Text>

            <Controller 
                control={control}
                rules={{
                    required: true,
                    
                }}
                render={({ field: { onChange, onBlur, value} }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Username"
                        autoCapitalize = 'none'
                    />
                )}
                name="username"
                defaultValue=""                
            />
            {errors.username && <Text style={styles.error}>Preencha o campo de usuário.</Text>}

            <Controller 
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Password"
                        secureTextEntry={true}
                        
                    />
                )}
                name="password"
                defaultValue=""                
            />
            {errors.password && <Text style={styles.error}>Preencha o campo de senha.</Text>}
            
            <Button colorButton={colors.green} onPress={handleSubmit(handleSignIn)} title="Enviar" />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        
        height: '100%',
        padding: 20,
        backgroundColor: colors.white
    },
    input: {
        height: 54,
        width: '100%',
        backgroundColor: colors.gray_light,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 10,
        fontSize: 14
    },
    error: {
        color: colors.red,
        marginBottom: 15
    },
    loginImg: {
        height: 200,
        width: '100%',
        marginBottom: 50
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 20,
        color: colors.heading
    }
})
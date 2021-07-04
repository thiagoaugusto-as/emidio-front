import React, {useContext} from 'react';

import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Button } from '../components/Button';
import { SmallButton } from '../components/SmallButton';
import { Header } from '../components/Header';
import colors from '../styles/colors';
import { useForm, Controller } from 'react-hook-form';

import AuthContext from '../contexts/auth';
import fonts from '../styles/fonts';

import Avatar from '../assets/thiago.png';

export function Profile() {
    const { handleSubmit, control, formState: {errors} } = useForm();

    const { signOut } = useContext(AuthContext);

    function handleSignOut() {
        signOut();
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Editar perfil</Text>
                <SmallButton title="sair" onPress={handleSignOut} colorButton={colors.red} height={35}/>
            </View>

            <View style={styles.upload}>
                <Image style={styles.uploadPhoto} source={Avatar}/>
                <SmallButton colorButton={colors.heading} title="Troque sua foto"/>
            </View>

            <View>
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
                            placeholder="Senha atual"
                            secureTextEntry={true}
                            
                        />
                    )}
                    name="currentPassword"
                    defaultValue=""                
                />
                {errors.currentPassword && <Text style={styles.error}>Preencha o campo de senha.</Text>}

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
                            placeholder="Nova senha"
                            secureTextEntry={true}
                            
                        />
                    )}
                    name="newPassword"
                    defaultValue=""                
                />
                {errors.newPassword && <Text style={styles.error}>Preencha o campo de senha.</Text>}
                
                <Button 
                    colorButton={colors.green} 
                    onPress={handleSubmit(handleSignOut)} 
                    title="Enviar"
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight(),
        paddingHorizontal: 20,
        height: '95%'
    },
    title: {
        fontSize: 40,
        fontFamily: fonts.heading
    },
    upload: {
        alignItems: 'center',
        paddingVertical: 30
    },
    uploadPhoto: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 15
    },
    input: {
        height: 54,
        width: '100%',
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: colors.gray_light,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 10,
        fontSize: 14
    },
    error: {
        color: colors.red,
        marginBottom: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    }
});
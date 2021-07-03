import React, {useContext} from 'react';

import {
    Text,
    StyleSheet,
    View
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import colors from '../styles/colors';

import AuthContext from '../contexts/auth';

export function Profile() {
    const { signOut } = useContext(AuthContext);

    function handleSignOut() {
        signOut();
    }

    return(
        <View style={styles.container}>
            <Header />
            <Button title="sair" onPress={handleSignOut} colorButton={colors.red}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight(),
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        height: '95%'
    }
});
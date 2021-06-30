import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button } from '../components/Button';

export function SendTask() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Faça o upload da atividade</Text>
                <Text style={styles.headerInfo}>Os arquivos precisam estar em PDF, PNG ou JPG</Text>
            </View>

            <TouchableOpacity style={styles.boxSubmit}>
                <View style={styles.boxSubmitContent}>
                    <AntDesign name="upload" size={50} color="black" />
                    <Text>Clique aqui e faça o upload</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.sendedFiles}>
                <Text>Arquivos enviados:</Text>
            </View>

            <Button title="Enviar" colorButton={colors.green}></Button>
        </SafeAreaView>
    )
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight(),
        paddingHorizontal: 20,
        height: windowHeight,
        justifyContent: 'space-between'
    },
    header: {
        paddingTop: 20
    },
    headerTitle: {
        fontSize: 35,
        fontFamily: fonts.heading
    },
    headerInfo: {
        fontSize: 15
    },
    boxSubmit: {
        width: '100%',
        height: 250,
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: 'dashed',
        borderColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendedFiles: {
        height: 230
    },
    boxSubmitContent: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
import { Jost_300Light_Italic } from '@expo-google-fonts/jost';
import React from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import colors from '../styles/colors';

export function ProgressBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Seu progresso
            </Text>

            <View style={styles.progress}>
                <View style={styles.progressTotal}>
                    <View style={styles.progressCurrent}></View>
                </View>
                <Text>80%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20
    },
    title: {
        color: colors.heading,
        marginBottom: 5
    },
    progress: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },  
    progressTotal: {
        height: 5,
        backgroundColor: colors.gray,
        width: '90%',
        borderRadius: 4
    },
    progressCurrent: {
        width: '20%',
        height: '100%',
        backgroundColor: colors.green,
        borderRadius: 4
    }
});
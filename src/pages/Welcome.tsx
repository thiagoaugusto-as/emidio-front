import React from 'react';
import { 
    SafeAreaView, 
    Text, 
    Image, 
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';

export function Welcome() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Header />

            <ProgressBar />

            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Vamos iniciar
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    }
})
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
import { Card } from '../components/Card';

export function Welcome() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Header />

            <ProgressBar />

            <View style={styles.tasks}>
                <Card 
                    color={colors.red}
                    icon="book"
                    sendedTask={false}
                    avaliatedTask={false}
                    titleCard="Português"
                    description="04 Abril | Pet 08 | Termina em 07 de Abril"
                />

                <Card 
                    color={colors.green}
                    icon="book"
                    sendedTask={true}
                    avaliatedTask={true}
                    avaliation="A"
                    titleCard="Portugues"
                    description="04 Abril | Pet 08 | Termina em 07 de Abril"
                />

                <Card 
                    color={colors.green}
                    icon="globe"
                    sendedTask={true}
                    avaliatedTask={false}
                    titleCard="Geografia"
                    description="04 Abril | Pet 08 | Termina em 07 de Abril"
                />

                <Card 
                    color={colors.green}
                    icon="calculator"
                    sendedTask={true}
                    avaliatedTask={true}
                    titleCard="Matemática"
                    description="04 Abril | Pet 08 | Termina em 07 de Abril"
                    avaliation="B"
                />
            </View>

            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    .
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
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
    },
    tasks: {
        marginTop: 20,
        paddingHorizontal: 20
    }
})
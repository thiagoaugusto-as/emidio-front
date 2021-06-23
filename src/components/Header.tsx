import React from 'react';
import { 
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import colors from '../styles/colors';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import avatar from '../assets/thiago.jpeg';
import { Jost_100Thin_Italic } from '@expo-google-fonts/jost';
import fonts from '../styles/fonts';

export function Header() {
    return(
        <View style={styles.container}>
            <Image source={avatar} style={styles.image} />
            
            <View>
                <Text style={styles.nameTitle}> 
                    Thiago Augusto
                </Text>

                <Text style={styles.nameClass}> 
                    4º ano amarelo
                </Text>
            </View>

        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        padding: 20
    },
    image: {
        width: 85,
        height: 85,
        borderRadius: 50,
        marginRight: 15
    },
    nameTitle: {
        fontFamily: fonts.heading,
        fontSize: 25,
        color: 'black'
    },
    nameClass: {
        fontSize: 16,
        color: colors.heading
    }
});
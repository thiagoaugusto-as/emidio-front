import React from 'react';
import { 
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import colors from '../styles/colors';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import avatar from '../../src/assets/thiago.jpeg';

import fonts from '../styles/fonts';
import { useAuth } from '../contexts/auth';

export function Header() {
    const { user } = useAuth();

    return(
        <View style={styles.container}>
            <Image source={avatar} style={styles.image} />
            
            <View>
                <Text style={styles.nameTitle}> 
                    {user?.name}
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
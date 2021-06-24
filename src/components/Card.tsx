import React from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import colors from '../styles/colors';

import { 
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    Entypo
} from '@expo/vector-icons'
import fonts from '../styles/fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {  } from '@expo/vector-icons/build/createIconSet';

interface ButtonProps {
    color: string;
    icon: string;
    sendedTask: boolean;
    avaliatedTask: boolean;
    avaliation?: string;
    titleCard: string;
    description: string;
}

export function Card({
    color, 
    icon,
    sendedTask,
    avaliation,
    avaliatedTask,
    titleCard,
    description
}: ButtonProps) {
    return(
        <View style={styles.container}>
            <View style={[styles.barStyle, {backgroundColor: color}]}/>

            <View style={styles.content}>
                <View style={styles.infoStyles}>
                    <Entypo 
                        name={icon as "book"}
                        size={40}
                        color={colors.gray}
                    />

                    <View style={styles.title}>
                        <Text style={styles.titleMain}>
                            {titleCard}
                        </Text>

                        <Text style={styles.titleSec}>
                            {description}
                        </Text>
                    </View>
                </View>

                {
                    !sendedTask && 
                    <TouchableOpacity 
                    style={styles.buttonStyle}
                    >
                            <AntDesign name="plus" size={20} color={colors.gray_light}/>
                        </TouchableOpacity>
                }

                {
                    (sendedTask && !avaliatedTask) &&
                        <FontAwesome name="check-circle" size={55} color={colors.gray}/>
                }

                {
                    (sendedTask && avaliatedTask) &&
                        <Text style={styles.avaliation}>{avaliation}</Text>
                }

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        marginVertical: 5,
        borderRadius: 7,
        flexDirection: 'row',
        backgroundColor: colors.gray_light
    },
    barStyle: {
        width: 5,
        height: '100%',
        backgroundColor: colors.red,
        borderBottomStartRadius: 7,
        borderTopLeftRadius: 7 ,
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18
    },
    buttonStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoStyles: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        paddingLeft: 15
    },
    titleMain: {
        fontFamily: fonts.heading,
        fontSize: 17
    },
    titleSec: {
        color: colors.heading,
        fontSize: 13
    },
    avaliation: {
        fontSize: 70,
        fontFamily: fonts.heading,
        color: colors.gray
    }
});
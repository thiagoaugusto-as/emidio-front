import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { MaterialIcons } from '@expo/vector-icons';
import { SystemInfo } from '../pages/SystemInfo';
import { Profile } from '../pages/Profile';

const AppTab = createBottomTabNavigator();

const TabRoutes = () => {
    return(
        <AppTab.Navigator
            initialRouteName="Minhas Atividades"
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: 0,
                    height: 60,
                    paddingTop: 0
                }
            }}    
        >
            <AppTab.Screen 
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: (({ size, color}) => (
                        <MaterialIcons
                            name="person"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <AppTab.Screen 
                name="Minhas Atividades"
                component={Welcome}
                options={{
                    tabBarIcon: (({ size, color}) => (
                        <MaterialIcons
                            name="school"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            
            <AppTab.Screen 
                name="Sistema"
                component={SystemInfo}
                options={{
                    tabBarIcon: (({ size, color}) => (
                        <MaterialIcons
                            name="info"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

        </AppTab.Navigator>
    )
}

export default TabRoutes;
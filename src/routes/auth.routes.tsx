import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';

import { Login } from '../pages/Login';

const stackRoutes = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen 
            name="Login"
            component={Login}
        />   

    </stackRoutes.Navigator>
)

export default AuthRoutes;
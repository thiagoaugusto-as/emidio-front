import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';

import { SendTask } from '../pages/SendTask';

import TabRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >

        <stackRoutes.Screen 
            name="Welcome"
            component={TabRoutes}
        />   

        <stackRoutes.Screen 
            name="SendTask"
            component={SendTask}
        />   
        
        <stackRoutes.Screen 
            name="SystemInfo"
            component={TabRoutes}
        />  
    </stackRoutes.Navigator>
)

export default AppRoutes;
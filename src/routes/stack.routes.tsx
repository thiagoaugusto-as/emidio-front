import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { SendTask } from '../pages/SendTask';

import AuthRoutes from './tab.routes';
import { SystemInfo } from '../pages/SystemInfo';

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
            component={AuthRoutes}
        />   


        <stackRoutes.Screen 
            name="SendTask"
            component={SendTask}
        />   
        
        <stackRoutes.Screen 
            name="SystemInfo"
            component={AuthRoutes}
        />  
    </stackRoutes.Navigator>
)

export default AppRoutes;
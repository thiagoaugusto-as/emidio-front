import React, {useContext} from 'react';

import { useAuth } from '../contexts/auth';

import StackRoutes from './stack.routes';

import AuthRoutes from './auth.routes';

import {
    View,
    ActivityIndicator
} from 'react-native';

const Routes: React.FC = () => {
    const { signed, loading } = useAuth();

    // if(loading) {
    //     return (
    //         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //             <ActivityIndicator size="large" color="666"/>
    //         </View>
    //     )
    // }

    return signed ? <StackRoutes /> : <AuthRoutes />
}

export default Routes;
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserDTO } from '../Dtos/systemDtos';
import { api } from '../services/api';

import * as auth from '../services/auth';

interface InputLogin {
    username: string;
    password: string;
}

interface User {
    id: string;
    name: string;
    username: string;
    isProfessor: boolean;
    className: string;
    classLevel: string;
    classId: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(data: InputLogin): Promise<void>;
    signOut(): void;
    loading: boolean
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@Emidio:user');
            const storageToken = await AsyncStorage.getItem('@Emidio:token');

            if(storageUser && storageToken) {
                api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
        }

        loadStorageData();
    },[])

    async function signIn({ password, username }: InputLogin) {
        const response = await auth.signIn({ password, username });

        if(response) {
            setUser(response.user);

            console.log(response);
    
            api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
    
            await AsyncStorage.setItem('@Emidio:user', JSON.stringify(response.user));
            await AsyncStorage.setItem('@Emidio:token', response.token);
        }
    }

    async function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }


    return(
        <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export default AuthContext;
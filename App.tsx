import React from 'react';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes';

import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
    return <AppLoading/>

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
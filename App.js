import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntroPage1 from './pages/intro/IntroPage1';
import IntroPage2 from './pages/intro/IntroPage2';
import IntroPage3 from './pages/intro/IntroPage3';

import AuthIndexPage  from './pages/auth/index';
import LoginPage      from './pages/auth/LoginPage';
import RegistPage1    from './pages/auth/RegistPage1';
import RegistPage2    from './pages/auth/RegistPage2';
import RegistPage3    from './pages/auth/RegistPage3';
import RegistPage4    from './pages/auth/RegistPage4';
import RegistEndPage  from './pages/auth/RegistEndPage';

import LoadingPage    from './pages/main/LoadingPage';
import FailedPage     from './pages/main/FailedPage';
import WorkListPage   from './pages/main/WorkListPage';
import WorkDetailPage from './pages/main/WorkDetailPage';
import CertificatePage from './pages/main/CertificatePage';
import CertificatePhotoPage1 from './pages/main/CertificatePhotoPage1';
import CertificatePhotoPage2 from './pages/main/CertificatePhotoPage2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CertificatePhotoPage2"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="IntroPage1" component={IntroPage1} />
        <Stack.Screen name="IntroPage2" component={IntroPage2} />
        <Stack.Screen name="IntroPage3" component={IntroPage3} />
        <Stack.Screen name="AuthIndexPage" component={AuthIndexPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegistPage1" component={RegistPage1} />
        <Stack.Screen name="RegistPage2" component={RegistPage2} />
        <Stack.Screen name="RegistPage3" component={RegistPage3} />
        <Stack.Screen name="RegistPage4" component={RegistPage4} />
        <Stack.Screen name="RegistEndPage" component={RegistEndPage} />
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="FailedPage" component={FailedPage} />
        <Stack.Screen name="WorkListPage" component={WorkListPage} />
        <Stack.Screen name="WorkDetailPage" component={WorkDetailPage} />
        <Stack.Screen name="CertificatePage" component={CertificatePage} />
        <Stack.Screen name="CertificatePhotoPage1" component={CertificatePhotoPage1} />
        <Stack.Screen name="CertificatePhotoPage2" component={CertificatePhotoPage2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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

import LoadingPage    from './pages/search/LoadingPage';
import FailedPage     from './pages/search/FailedPage';
import WorkListPage   from './pages/search/WorkListPage';
import WorkDetailPage from './pages/search/WorkDetailPage';
import CertificatePage from './pages/search/CertificatePage';
import CertificatePhotoPage1 from './pages/search/CertificatePhotoPage1';
import CertificatePhotoPage2 from './pages/search/CertificatePhotoPage2';
import CertificateEndPage from './pages/search/CertificateEndPage';
import WorkConformPage from './pages/search/WorkConformPage';

import MessageListPage from './pages/message/MessageListPage';
import MessageDetailPage from './pages/message/MessageDetailPage';

import WorkContractListPage from './pages/work/WorkContractListPage';
import PastHirePage from './pages/work/PastHirePage';
import WorkQRPage from './pages/work/WorkQRPage';
import SalaryFinalConformPage from './pages/work/SalaryFinalConformPage';
import ReviewInputPage from './pages/work/ReviewInputPage';
import WorkEndPage from './pages/work/WorkEndPage';

import TransferAccountPage from './pages/mine/TransferAccountPage';
import ContactPage from './pages/mine/ContactPage';
import MySkillPage from './pages/mine/MySkillPage';
import MyPage from './pages/mine/MyPage';

import FavouriteShopPage from './pages/favourite/FavouriteShopPage';
import FavouriteShopDetailPage from './pages/favourite/FavouriteShopDetailPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyPage"
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
        <Stack.Screen name="CertificateEndPage" component={CertificateEndPage} />
        <Stack.Screen name="WorkConformPage" component={WorkConformPage} />
        <Stack.Screen name="MessageListPage" component={MessageListPage} />
        <Stack.Screen name="MessageDetailPage" component={MessageDetailPage} />
        <Stack.Screen name="WorkContractListPage" component={WorkContractListPage} />
        <Stack.Screen name="PastHirePage" component={PastHirePage} />
        <Stack.Screen name="WorkQRPage" component={WorkQRPage} />
        <Stack.Screen name="SalaryFinalConformPage" component={SalaryFinalConformPage} />
        <Stack.Screen name="ReviewInputPage" component={ReviewInputPage} />
        <Stack.Screen name="WorkEndPage" component={WorkEndPage} />
        <Stack.Screen name="TransferAccountPage" component={TransferAccountPage} />
        <Stack.Screen name="ContactPage" component={ContactPage} />
        <Stack.Screen name="MySkillPage" component={MySkillPage} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="FavouriteShopPage" component={FavouriteShopPage} />
        <Stack.Screen name="FavouriteShopDetailPage" component={FavouriteShopDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

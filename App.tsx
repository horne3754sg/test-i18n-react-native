import React from 'react';
import {t} from 'i18next';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import './i18n';
import AppText from './AppText';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <AppText text={t('common.welcome')}>{t('common.welcome')}</AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

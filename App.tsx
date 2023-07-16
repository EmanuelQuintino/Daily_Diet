import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import { ActivityIndicator } from 'react-native'

import { Home } from '@screens/Home';

export default function App() {
  const [fontLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? <Home /> : <ActivityIndicator />} 
    </ThemeProvider>
  );
};

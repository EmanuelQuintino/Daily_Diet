import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? <Home /> : <Loading />} 
    </ThemeProvider>
  );
};

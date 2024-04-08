import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from './src/estilos/temas';
import Rotas from './src/Rotas';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  AsyncStorage.removeItem('token')
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}

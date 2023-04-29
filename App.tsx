import { NativeBaseProvider } from 'native-base';
import ToDo from './ToDo';

export default function App() {
  return (
    <NativeBaseProvider>
          <ToDo />
    </NativeBaseProvider>
  );
}
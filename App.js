import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './containers/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" backgroundColor="#13012c" />
          <AppNavigator />
        </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
});
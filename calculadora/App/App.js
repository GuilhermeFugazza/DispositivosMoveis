import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchebleOpacity } from 'react-native';



const buttons = ['AC', '/', 'X', '-', '+', '=', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

export default function App() {
  return (
    <View>
      <View style={styles.result}>
        <Text style={{ fontSize: 20, margin: 10 }}>2 + 2 = 10</Text>
        {buttons.map((button) =>
          <TouchebleOpacity key={button} style={styles.button}>
            <Text style={styles.textButton}>
              {button}
            </Text>
          </TouchebleOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#dfe6e9',
    width: '100%',
    height: 300
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    minWidth: 80,
    minHeight: 80
  },
  textButton: {
    color: '#2d3436',
    fontSize: 25,
  },
});

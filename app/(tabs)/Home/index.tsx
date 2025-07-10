import React from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Home() {
  // Mova o uso do hook useRouter para o topo
  const router = useRouter();

  const handleNavigate = () => {
    router.push('./Calculadora');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text>Welcome to the home page!</Text>
      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
        <Text style={styles.buttonText}>Go to Calculadora</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

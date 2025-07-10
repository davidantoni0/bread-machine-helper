import React from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Calculadora() {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.push('./Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <Text style={styles.description}>Esta é uma calculadora simples.</Text>
      {/* Aqui você pode adicionar a lógica da calculadora */}
      
      <TouchableOpacity onPress={handleNavigateHome} style={styles.button}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Calculadora;

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
  description: {
    fontSize: 16,
    color: '#666',
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

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

export default function TimeDifferenceCalculator() {
  const [startTime, setStartTime] = useState(new Date()); // Hora inicial
  const [endTime, setEndTime] = useState(new Date()); // Hora de término
  const [showStartPicker, setShowStartPicker] = useState(false); // Controla a exibição do picker de hora de início
  const [showEndPicker, setShowEndPicker] = useState(false); // Controla a exibição do picker de hora de término
  const [timeDifference, setTimeDifference] = useState('');

  // Função para calcular a diferença entre os horários
  const calculateTimeDifference = () => {
    const diffInMillis = endTime.getTime() - startTime.getTime();

    // Verifica se a hora de término é antes da hora de início
    if (diffInMillis < 0) {
      Alert.alert("Erro", "A hora de término não pode ser antes da hora de início.");
      return;
    }

    // Calcula a diferença em horas, minutos e segundos
    const hours = Math.floor(diffInMillis / 1000 / 60 / 60);
    const minutes = Math.floor((diffInMillis % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMillis % (1000 * 60)) / 1000);

    // Exibe o tempo restante no formato 'Xh Xm Xs'
    setTimeDifference(`${hours}h ${minutes}m ${seconds}s`);
  };

  // Função para exibir o DateTimePicker e capturar o horário selecionado
  const onChangeStartTime = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowStartPicker(false);
    if (selectedDate) {
      setStartTime(selectedDate); // Atualiza a hora de início
    }
  };

  const onChangeEndTime = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowEndPicker(false);
    if (selectedDate) {
      setEndTime(selectedDate); // Atualiza a hora de término
    }
  };

  // Função para pegar a hora atual do sistema
  const setCurrentTime = () => {
    const currentTime = new Date();
    setStartTime(currentTime); // Define a hora inicial como o horário atual
    setEndTime(currentTime);   // Define a hora de término como o horário atual
  };

  // Adicionando console.logs para depuração
  const handleShowStartPicker = () => {
    console.log("Iniciando seleção de hora de início...");
    setShowStartPicker(true); // Controla exibição do picker de hora de início
  };

  const handleShowEndPicker = () => {
    console.log("Iniciando seleção de hora de término...");
    setShowEndPicker(true); // Controla exibição do picker de hora de término
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Diferença de Tempo</Text>

      <View style={styles.inputContainer}>
        <Text>Hora Atual: {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</Text>
        <Button title="Selecionar Hora de Início" onPress={handleShowStartPicker} />
      </View>

      <View style={styles.inputContainer}>
        <Text>Hora de Término: {endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</Text>
        <Button title="Selecionar Hora de Término" onPress={handleShowEndPicker} />
      </View>

      <Button title="Pegar Hora Atual" onPress={setCurrentTime} />

      <Button title="Calcular Diferença" onPress={calculateTimeDifference} />

      {timeDifference ? (
        <Text style={styles.result}>Tempo restante: {timeDifference}</Text>
      ) : null}

      {showStartPicker && (
        <DateTimePicker
          value={startTime}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={onChangeStartTime}
        />
      )}

      {showEndPicker && (
        <DateTimePicker
          value={endTime}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={onChangeEndTime}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

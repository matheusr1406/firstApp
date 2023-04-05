import { useState } from "react";
import {
  Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const [participants, setParticipants] =  useState<string []>([]);
  const [participantName, setParticipantName] = useState('');

  function handlePartipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante existe", "Já existe um participante com esse nome na lista.")
    }
   setParticipants(prevState => [...prevState, participantName ])
  }

  function handleParticipantRemove(name: string) {
     

    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>07 de Abril de 2023</Text>

      <View style={styles.form}>
      <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={''}
        />

        <TouchableOpacity style={styles.button} onPress={handlePartipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={ () => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}

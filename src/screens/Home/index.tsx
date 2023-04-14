import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function App() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");
  const [addedBy, setAddedBy] = useState<string>("");

  function handlePartipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante com esse nome na lista."
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setAddedBy(participantName);
    setParticipantName("");

    Alert.alert(
      "Presença confirmada!",
      `Olá ${participantName}, a festa será realizada no dia 14/06 às 20h. O endereço é Rua blablabla, nº 123.`
    );

    // if (addedBy !== "" && addedBy !== participantName) {
    //   return Alert.alert(
    //     "Apenas um convidado por pessoa",
    //     "Você só pode adicionar um convidado na lista."
    //   );
    // }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
return (
  <View style={styles.container}>
    <Text style={styles.eventName}> Resenha aniversario </Text>
    <Text style={styles.eventDate}>🥳🍻</Text>

    <View style={styles.form}>
      <TextInput
        value={participantName}
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        onChangeText={setParticipantName}
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
          onRemove={() => handleParticipantRemove(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de
          presença.
        </Text>
      )}
    />
  </View>
    );
}

function setParticipants(arg0: (prevState: any) => any): void {
  throw new Error("Function not implemented.");
}

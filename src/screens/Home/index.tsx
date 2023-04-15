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

export default function App() { // Declaração do componente App
  const [participants, setParticipants] = useState<string[]>([]); // Declara um estado chamado participants, inicializado como um array vazio
  const [participantName, setParticipantName] = useState(""); // Declara um estado chamado participantName, inicializado como uma string vazia
  const [addedBy, setAddedBy] = useState<string>(""); // Declara um estado chamado addedBy, inicializado como uma string vazia

  function handlePartipantAdd() { // Função que adiciona participantes
    if (!participantName.trim()) { // Verifica se o valor de participantName está vazio ou contém apenas espaços em branco
      return Alert.alert("Erro", "Digite um nome de participante válido."); // Retorna um alerta com uma mensagem de erro
    }
  
    if (participants.includes(participantName)) { // Verifica se já existe um participante com o mesmo nome na lista
      return Alert.alert(
        "Participante existe",
        "Já existe um participante com esse nome na lista."
      ); // Retorna um alerta com uma mensagem informando que o participante já existe
    }
  
    setParticipants((prevState) => [...prevState, participantName]); // Adiciona o participante na lista de participantes usando o setState
    setAddedBy(participantName); // Define o valor de addedBy como o nome do participante adicionado
    setParticipantName(""); // Limpa o valor do input de nome do participante
  
    Alert.alert(
      "Presença confirmada!",
      `Olá ${participantName}, a festa será realizada no dia 14/06 às 20h. O endereço é Rua blablabla, nº 123.`
    ); // Retorna um alerta com uma mensagem de confirmação da presença

    // if (addedBy !== "" && addedBy !== participantName) {
    //   return Alert.alert(
    //     "Apenas um convidado por pessoa",
    //     "Você só pode adicionar um convidado na lista."
    //   );
    // } Comentado, pois a validação de adicionar apenas um convidado por pessoa não está sendo utilizada
  }

  function handleParticipantRemove(name: string) { // Função que remove um participante da lista
    Alert.alert("Remover", `Remover o participante ${name}?`, [ // Retorna um alerta perguntando se o usuário deseja remover o participante
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ), // Remove o participante da lista
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

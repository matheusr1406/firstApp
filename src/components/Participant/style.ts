import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },

    name: {
        flex:1,
        fontSize: 20,
        color: '#fff',
        marginLeft: 16,

    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center'
      },
});
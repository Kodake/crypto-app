import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contenedor: {
        paddingTop: Platform.OS === 'ios' ? 50 : 0,
    },
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
        fontFamily: 'Lato-Black',
        backgroundColor: '#0077b6',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFF',
        marginBottom: 30,
    },
});
import { View, Text, StyleSheet, Button } from 'react-native'

export const Product = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenidos a mi tienda, Soy ESTEBAN SANCHEZ </Text>
        <Text style={styles.p1}>Producto1: Cigarrillos</Text>
        <Text style={styles.p2}>Producto2: Cerveza</Text>
        <Text style={styles.p3}> Producto3: Snacks</Text>
        <Button
            title='HOME'
            onPress={() => {
                navigation.navigate('WellcomeEsteban_Sanchez');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
    },
    p1: {
        color: 'red'
    },
    p2: {
        color: 'orange'
    },
    p3: {
        color: 'yellow'
    }
});
import { View, Text, StyleSheet, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>BIENVENIDO A MI APLICACION , SOY KEVIN </Text>
      <Text>ESTAMOS RULAY ssss </Text>
      <View style={styles.botones}>
        <View style={styles.boto1}>
          <Button
            color="red"
            title="CONTACTS"
            onPress={() => {
              navigation.navigate("ContactsNav");
            }}
          />
        </View>

        <Button
          title="PRODUCTOS"
          onPress={() => {
            navigation.navigate("ProductNavigation");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  botones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  boton1: {
    marginRight: 60,
  },

  Btn: {},
});

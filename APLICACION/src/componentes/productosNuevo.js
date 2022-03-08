import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function tipoEntrega() {
  const { sucursal, setSucursal } = useState(null);
  return (
    <View style={styles.Entregas}>
      <View style={styles.entrega1}>

        <View style={styles.tilOp}>
          <Text style={styles.ti}>Productos</Text>
          <View style={styles.opciones}>
            <AntDesign name='bars' style={{ fontSize: 30 }} />
          </View>
        </View>

        <View style={styles.OpEntrega1}>

          <TouchableOpacity style={styles.OpEntrega}>
            <View style={styles.circleIcon}>
              <Feather name='plus' style={{ fontSize: 25 }} />
            </View>
            <Text style={styles.tituloEntrega}></Text>
            <Text style={styles.horario}>Producto1</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.OpEntrega1}>

          <TouchableOpacity style={styles.OpEntrega}>
            <View style={styles.circleIcon}>
              <Feather name='plus' style={{ fontSize: 25 }} />
            </View>
            <Text style={styles.tituloEntrega}></Text>
            <Text style={styles.horario}>Producto2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.OpEntrega1}>

          <TouchableOpacity style={styles.OpEntrega}>
            <View style={styles.circleIcon}>
              <Feather name='plus' style={{ fontSize: 25 }} />
            </View>
            <Text style={styles.tituloEntrega}></Text>
            <Text style={styles.horario}>Producto3</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.OpEntrega1}>

          <TouchableOpacity style={styles.OpEntrega}>
            <View style={styles.circleIcon}>
              <Feather name='plus' style={{ fontSize: 25 }} />
            </View>
            <Text style={styles.tituloEntrega}></Text>
            <Text style={styles.horario}>Producto4</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.OpEntrega1}>

          <TouchableOpacity style={styles.OpEntrega}>
            <View style={styles.circleIcon}>
              <Feather name='plus' style={{ fontSize: 25 }} />
            </View>
            <Text style={styles.tituloEntrega}></Text>
            <Text style={styles.horario}>Producto5</Text>
          </TouchableOpacity>
        </View>



        <TouchableOpacity style={styles.menu1}>
          <View style={styles.menu}>
            <FontAwesome name='home' style={{ fontSize: 25 }} />
            <AntDesign name='search1' style={{ fontSize: 25 }} />
            <AntDesign name='filetext1' style={{ fontSize: 25 }} />
            <AntDesign name='shoppingcart' style={{ fontSize: 25 }} />
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Entregas: {
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 4,
    width: "100%",
    height: "100%",
  },
  entrega1: {
    backgroundColor: '#BAFBB9',
    borderWidth: 2,
    borderColor: "#dedede",
    borderRadius: 5,
    alignItems: "stretch",
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  ti: {
    alignContent: "center",
    alignItems: "center",
    fontSize: 40,
  },
  avanceTitulo: {
    backgroundColor: "#31C02E",
    paddingBottom: 0,
    alignItems: "stretch",
    paddingTop: 100,
    position: "relative",
    top: -80
  },
  opciones: {
    flexDirection: "row",
    position: 'relative',
    left: 350,
    position: "relative",
    top: -26
  },
  tilOp: {
    backgroundColor: "#31C02E",
    paddingBottom: 0,
    alignItems: "stretch",
    paddingTop: 10,
    position: "relative",
    top: -80
  },
  ti: {
    position: "relative",
    top: 5,
    fontSize: 25,
    left: 140,
  },
  progre: {
    position: "relative",
    top: -158
  },
  avance: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avanceTitulo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  circleIcon: {
    backgroundColor: "#5FBC3E",
    borderRadius: 100,
    padding: 9,
    position: 'relative',
    left: -5,
    fontSize: 10,
  },
  OpEntrega: {
    flexDirection: "row",
    marginTop: 40,
    backgroundColor: "#FFFFFF",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 10,
    position: "relative",
    top: -80,
  },
  horario: {
    position: 'relative',
    left: 115,
    paddingVertical: 15,
    fontSize: 12,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    position: "relative",
    top: 120,
  },
  continuar: {
    flexDirection: "row",
  },
  ico: {
    paddingVertical: 5,
  },
  menu: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    paddingHorizontal: 15,
    position: "relative",
    top: 100,
  },
  registrar: {
    width: 380,
    height: 70,
    marginTop: 40,
    alignContent: "center",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 40,
    backgroundColor: 'white',
  },
  tituloBoton2: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  }
});
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Input } from 'react-native';
//import { withTheme } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Position from 'react-native/Libraries/Components/Touchable/Position';

export default function tipoEntrega() {
  const { sucursal, setSucursal } = useState(null);
  return (
    <View style={styles.Entregas}>
      <View style={styles.entrega1}>

        <View style={styles.tilOp}>
          <Text style={styles.ti}>Historial de Pedidos</Text>
          <View style={styles.opciones}>
            <AntDesign name='bars' style={{ fontSize: 30 }} />
          </View>
        </View> 
        <View style={styles.contenedorTitulo}>
          <Text style={styles.tituloLogin}></Text>
        </View>
            
        <View style={styles.OpEntrega1}>
          <TouchableOpacity style={styles.OpEntregaPedi}>
            <View style={styles.circleIcon}>
              <Feather name='image' style={{ fontSize: 25, marginTop:35, height:30, width:110, }} />
              <Text style={styles.tituloEntrega}>L. 0.00</Text>
            </View>
            <View>
                <Text style={styles.tituloEntrega}>Historial:</Text>
                <TouchableOpacity style={styles.OpEntregaPediC}>
                  <Text style={styles.tituloEntrega}>Fecha Pedido:</Text>
                  <TextInput placeholder='__/__/____' style={styles.input} onChangeText={(text) => onChangeText(text)}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OpEntregaPediC}>
                  <Text style={styles.tituloEntrega}>Cantidad:</Text>
                  <TextInput placeholder='0.00' style={styles.input2} onChangeText={(text) => onChangeText(text)}/>
                </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.OpEntregaPedi}>
            <View style={styles.circleIcon}>
              <Feather name='image' style={{ fontSize: 25, marginTop:35, height:30, width:110, }} />
              <Text style={styles.tituloEntrega}>L. 0.00</Text>
            </View>
            <View>
                <Text style={styles.tituloEntrega}>Historial:</Text>
                <TouchableOpacity style={styles.OpEntregaPediC}>
                  <Text style={styles.tituloEntrega}>Fecha Pedido:</Text>
                  <TextInput placeholder='__/__/____' style={styles.input} onChangeText={(text) => onChangeText(text)}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OpEntregaPediC}>
                  <Text style={styles.tituloEntrega}>Cantidad:</Text>
                  <TextInput placeholder='0.00' style={styles.input2} onChangeText={(text) => onChangeText(text)}/>
                </TouchableOpacity>
            </View>
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
    padding: 10,
    width: "100%",
    height: "100%",
  },
  contenedorTitulo: {
    backgroundColor: '#328642',
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
    marginTop:27,
    height:50,
    borderBottomWidth:3,
    borderColor:'#000000'
  },
  tituloLogin: {
    color: "#FFFFFF" ,
    fontSize: 20,
    fontWeight: "700",
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
    top: -110
  },
  tilOp: {
    backgroundColor: "#31C02E",
    paddingBottom: 0,
    alignItems: "stretch",
    paddingTop: 100,
    position: "relative",
    top: -50
  },
  ti: {
    position: "relative",
    top: -70,
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
    borderRadius: 20,
    padding: 9,
    position: 'relative',
    textAlign: 'center',
    left: -5,
    fontSize: 10,
  },
  OpEntregaPedi: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 10,
    position: "relative",
    top: -90,
    height: 140,
  },
  OpEntregaPediC: {
    flexDirection: "row",
    marginTop: 5,
    backgroundColor: "#BAFBB9",
    borderRadius: 10,
    position: "relative",
    textAlign: 'center',
    height: 40,
    width: 180
  },
  tituloEntrega:{
    textAlign: 'center'
  },
  input:{
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 8,
    textAlign: 'center',
    width: 70,
    position: 'relative'
  },
  input2:{
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 38,
    textAlign: 'center',
    width: 70,
    position: 'relative'
  },
  OpEntrega: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 10,
    position: "relative",
    top: -70,
    height: 130,
  },
  horario: {
    position: 'relative',
    left: -90,
    paddingVertical: 15,
    fontSize: 10,
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
    top: -10,
  },
  //-----------
  contenedorControles: {
    
    flexDirection:"column",
    alignItems: "stretch",
    justifyContent:"center",
    padding:0,
    top:-50,
  },
  sombraControles: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  controles:{
    flex:3,
    flexDirection: "row",
    marginBottom:30,
    paddingLeft:10,
    paddingRight:10,
  },
  contenedorBotones:{
    paddingLeft:10,
    marginTop:0,
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "row",
    height:100,
  },
  boton:{
    flex:1,
    marginTop:10,
    alignItems:"stretch",
    marginLeft:10,
    marginRight:10,
    height:'40%',
    width:170,
  },
  OpEntrega2: {
    flexDirection: "row",
    marginTop: 5,
    backgroundColor: "#BAFBB9",
    borderRadius: 10,
    position: "relative",
    height: 40,
    width: 220
  },
});

import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-web';

export default function sucursales() {
  const { sucursal, setSucursal } = useState(null);
  return (
    <View style={styles.Carrito}>
      <View style={styles.carrito1}>


        <View style={styles.tilOp}>
          <Text style={styles.ti}>Carrito</Text>
          <View style={styles.opciones}>
            <AntDesign name='bars' style={{ fontSize: 30 }} />
          </View>
        </View>


        <View style={styles.progre}>
          <View style={styles.avance}>
            <Text style={{ padding: 20 }}>
              <AntDesign name='checkcircle' />
            </Text>
            <Text style={{ padding: 20 }}>
              <AntDesign name='checkcircle' />
            </Text>
            <Text style={{ padding: 20 }}>
              3
            </Text>
          </View>
          <View style={styles.avanceTitulo}>
            <Text style={styles.subtitulo}>Carrito</Text>
            <Text style={styles.subtitulo}>Tipo de Entrega</Text>
            <Text style={styles.subtitulo}>Confirmar</Text>
          </View>
        </View>


        <View style={styles.OpEntrega1}>
          <View style={styles.OpEntrega}>
            
            
            <Text style={styles.item1}>Nombre Producto</Text>
            <Text style={styles.item2}>Precio Unidad(L.):</Text>
            <Text style={styles.item3}>Total + ISV(L.):</Text>
            <Text style={styles.cantidad}>Cantidad:</Text>
            <View style={styles.botonesA}> 
            <TouchableOpacity style={styles.botones}>
            <Text style={styles.tituloBoton}>+</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.botonesD}>
          <TouchableOpacity style={styles.botones}>
            <Text style={styles.tituloBoton}>-</Text>
          </TouchableOpacity>
            </View>
           
            
            
          </View>
        
          
        </View>

                

        <View style={styles.OpCarrito1}>
          <TouchableOpacity style={styles.OpCarrito}>
            <Text style={styles.tituloBoton2}>BUSCAR MAS PRODUCTOS</Text>
          </TouchableOpacity>
        
          
        </View>
       


       
          <View style={styles.total}>
            <Text>Total: L</Text>
           
            <TouchableOpacity style={styles.Totales}>
            <View style={styles.continuar}>
              <Text>Siguiente</Text>
              <AntDesign name='right' style={styles.ico} />
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
  Carrito: {
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 10,
    width: "100%",
    height: "100%",
  },
  carrito1: {
    backgroundColor: '#DEFFDA',
    borderWidth: 2,
    borderColor: "#dedede",
    borderRadius: 5,
    alignItems: "stretch",
    justifyContent: 'center',
    height: '90%',
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
    backgroundColor: "#00A41F",
    paddingBottom: 0,
    alignItems: "stretch",
    paddingTop: 100,
    position: "relative",
    top: -80
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
    padding: 9,
    position: 'relative',
    left: -5,
    top: 30,
    fontSize: 10,
  },
  OpEntrega: {
    flexDirection: "row",
    marginTop: 40,
    backgroundColor: "#FFFFFF",
    position: "relative",
    top: -160,
  },
  OpCarritos: {
    flexDirection: "row",
    marginTop: 40,
    backgroundColor: '#31C02E',
    borderColor: "#dedede",
    position: "relative",
    top: 100,
  },
  OpCarrito: {
  flexDirection: "row",
  marginTop: 40,
   width:'100%',
   height: 70,
   marginTop: 40,
   alignContent: "center",
   justifyContent: "center",
   alignItems: "center",
   padding: 10,
   borderRadius: 40,
   backgroundColor: '#FFFFFF',
   position: "relative",
   top: 30,
  },
  botones:{
    flexDirection: "row",
    marginTop: 40,
     width:20,
     height: 20,
     marginTop: 40,
     alignContent: "center",
     justifyContent: "center",
     alignItems: "center",
     padding: 10,
     borderRadius: 5,
     backgroundColor: '#000000',
     position: "relative",
     top: 30,
  },

  entradascantidad:{
    flexDirection: "row",
    marginTop: 40,
     width:50,
     height: 30,
     marginTop: 40,
     alignContent: "center",
     justifyContent: "center",
     alignItems: "center",
     padding: 10,
     borderRadius: 5,
     borderBottomWidth: 1,
     backgroundColor: '#FFFFFF',
     position: "relative",
     top: 20,
    left: -30,
    borderColor: '#000000'
  
  },
  cantidad: {
    position: 'relative',
    left: -50,
    top: 30,
    paddingVertical: 40,
    fontSize: 12,
  },
  entradaC: {
    position: 'relative',
    left: -70,
    top: -15,
    paddingVertical: 40,
    fontSize: 12,
  },
  botonesA: {
    position: 'relative',
    left: -75,
    top: -5,
    paddingVertical: 40,
    fontSize: 12,
  },
  botonesD: {
    position: 'relative',
    
    left: -65,
    top: -5,
    paddingVertical: 40,
    fontSize: 12,
  },
 item1: {
    position: 'relative',
    left: 20,
    top: 20,
    paddingVertical: 20,
    fontSize: 12,
  },
  item2: {
    position: 'relative',
    left: -75,
    top: 30,
    paddingVertical: 40,
    fontSize: 12,
  },
  item3: {
    position: 'relative',
    left: -165,
    top: 40,
    paddingVertical: 60,
    fontSize: 12,
  },
  total: {
    flexDirection: "row",
    backgroundColor: "#31C02E",
    justifyContent: "space-between",
    padding: 30,
    position: "relative",
    top: 40,
  },
  continuar: {
    flexDirection: "row",
  },
  ico: {
    paddingVertical: 5,
  },
  tituloBoton2:{
    color: '#000000',
    fontSize: 15,
    fontWeight: "600",
  },
  tituloBoton:{
    color: '#FFFFFF',
  },
 
 
  menu: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    paddingHorizontal: 15,
    position: "relative",
    top: 100,
  }
});
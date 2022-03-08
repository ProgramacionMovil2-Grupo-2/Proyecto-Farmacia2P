import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function login() {
    const [usuario, setUsuario] = useState(null);
    const [contrasena, setContrasena] = useState(null);

    const presIniciarSesion = async() =>{
        if(!usuario || !contrasena){
            console.log("Escriba los datos completos");
            Alert.alert("ALERTA", "Escriba los datos completos");
        }else{
            try {
                const respuesta = await fetch(
                    'http://192.168.1.2:4001/api/autenticacion/iniciosesion',{
                        method: 'POST',
                        headers:{
                            accept: 'application/json',
                            'Content-Type':'application/json'
                        },
                        body:  JSON.stringify({
                            usuario: usuario,
                            contrasena: contrasena
                        })
                    });
                const json = await respuesta.json();
                console.log(json);
                Alert.alert("ALERTA", "Petición procesada");
            } catch (error) {
                console.error(error);
            }
        }
    }
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorLogin}>
        <View style={styles.contenedorTitulo}>
          <Text style={styles.tituloLogin}>LOGIN</Text>
        </View>
        <View style={styles.contenedorLogo}>
          <Image style={{ width: 130, height: 130, marginBottom: 20, marginTop: 10 }}
          source={require("../../images/Logo.png")}/>
        </View>
        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View style={styles.controles}>
          <Text>   Usuario:</Text>
            <TextInput
            value={usuario}
            onChangeText= {setUsuario}

              placeholder="Ej. rodri_23"
              style={styles.entradas}
            >
            </TextInput>
            <Text>   Contraseña:</Text>
            <TextInput
            value={contrasena}
            onChangeText= {setContrasena}

              placeholder="Ej. *********"
              style={styles.entradas}
              passwordRules=""
              secureTextEntry={true}
            >
            </TextInput>
          </View>
          <View style={styles.botonRedes}>
              <Button 
                title="INICIAR SESIÓN" color={"#0D7701"} 
                onPress={presIniciarSesion} >
              </Button>
            </View>
            <View style={styles.contenedorBotones}>
            <View style={styles.boton}>
              <Text onPress={presIniciarSesion}>¿No tienes una cuenta?</Text>
            </View>
            <View style={styles.boton}>
              <Button title="Registrate" color={"#3A6C96"} //hover={"#FFFFFF"}
              onPress={presIniciarSesion}
              ></Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor:"#DEFFDA",
    alignItems: 'center',
    justifyContent: "center",
    margin:0,
    padding: 20,
    width:"100%",
    height:"100%",
  },
  contenedorLogin: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: '80%',
    width: '100%',
  },
  contenedorTitulo: {
    backgroundColor: '#328642',
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
    marginTop:-0,
    marginVertical:20,
    height:60,
    borderBottomWidth:3,
    borderColor:'#000000'
  },
  contenedorLogo: {
    flexDirection:"column",
    alignItems: "center",
    justifyContent:"center",
  },
  contenedorControles: {
    flex: 3,
    flexDirection:"column",
    alignItems: "stretch",
    justifyContent:"center",
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius:25,
    backgroundColor:"#fff",
    padding:20
    
  },
  sombraControles: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tituloLogin: {
      color: "#FFFFFF" ,
      fontSize: 30,
      fontWeight: "700",
    },
  controles:{
    flex:4,
    //backgroundColor: "#29291f",
    marginBottom: 20,
    paddingTop:30,
    paddingVertical:30
  },
  contenedorBotones:{
    flex:1,
    padding: 10,
    justifyContent:"space-evenly",
    flexDirection: "row",
  },
  contenedorBotonesRedes:{
    flex:2,
    padding: 10,
    justifyContent:"space-evenly",
    flexDirection: "column",
  },
  boton:{
    flex:1,
    alignItems:"stretch",
    marginLeft:10,
    marginRight:10,
  },
  botonRedes:{
    flex:1,
    alignItems:"stretch",
    margin:5,
  },
  entradas:{
    flex:1,
    alignItems:"stretch",
    margin:10,
    padding:10,
    fontSize: 20,
    fontWeight:"400",
    color: "#495057",
    backgroundColor:"#fff",
    borderWidth:1,
    borderStyle:"solid",
    borderColor: "#ced4da",
    borderRadius: 15,
  }
});

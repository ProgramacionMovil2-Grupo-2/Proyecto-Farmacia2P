import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function perfil() {
    const [correo, setCorreo] = useState(null);
    const [contrasena, setContrasena] = useState(null);
    const [login, setLogin] = useState(null);
    const [id_personas, setIdPersonas] = useState(null);
    const [estado, setEstado] = useState(null);
    const [pin, setpin] = useState(null);
    const [id, setid] = useState(null);

    const presModificar = async() =>{
        if(!id_personas || !correo || !contrasena || !login){
            console.log("Escriba los datos completos");
            Alert.alert("MEDI", "Escriba los datos completos");
        }else{
            try {
                const resp = await fetch(
                    'http://192.168.1.2:4001/api/usuarios/modificarUsuario?id=7',{
                        method: 'PUT',
                        headers:{
                            accept: 'application/json',
                            'Content-Type':'application/json'
                        },
                        body:  JSON.stringify({
                            correo: correo,
                            contrasena: contrasena,
                            id_personas: id_personas,
                            login: login
                        })
                    });
                const json2 = await resp.json();
                console.log(json2);
                Alert.alert("MEDI", "Petición procesada");
            } catch (error) {
              console.error(error);
            }
        }
    }
    return (
      <View style={styles.contenedor}>
        <View style={styles.contenedorRegistro}>
          <View style={styles.contenedorTitulo}>
            <Text style={styles.tituloLogin}>PERFIL DE USUARIO</Text>
          </View>
          <View style={styles.contenedorLogo}>
            <Image style={{ width: 80, height: 80, marginBottom: 10, marginTop: 10 }}
            source={require("../../images/Logo.png")}/>
          </View>
          <View style={[styles.contenedorControles, styles.sombraControles]}>
            <View style={styles.controles}>
              <Text>   Id persona:</Text>
              <TextInput
                value={id_personas}
                onChangeText= {setIdPersonas}
  
              placeholder="Ej. 12"
              style={styles.entradas}
              >
              </TextInput>
              <Text>   Usuario:</Text>
              <TextInput
                value={login}
                onChangeText= {setLogin}
  
                placeholder="Ej. Velásquez12"
                style={styles.entradas}
              >
              </TextInput>
              <Text>   Correo electrónico:</Text>
              <TextInput
                value={correo}
                onChangeText= {setCorreo}
  
                placeholder="Ej. rodri@gmail.com"
                style={styles.entradas}
              >
              </TextInput>
              <Text>   Contraseña:</Text>
              <TextInput
                value={contrasena}
                onChangeText= {setContrasena}
  
                placeholder="Ej. ********"
                style={styles.entradas}
              >
              </TextInput>
              <Text>   Pin:</Text>
              <TextInput
                value={pin}
                onChangeText= {setpin}
  
                placeholder="Ej. 2312"
                style={styles.entradas}
              >
              </TextInput>
              <View style={styles.actualizar}> 
                <TouchableOpacity 
                  onPress={presModificar}> 
                  <Text style={styles.tituloBoton2}>MODIFICAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    contenedor: {
      alignItems: 'center',
      justifyContent: "center",
      padding: 10,
      width:"100%",
      height:"100%",
      backgroundColor:"#DEFFDA",
    },
    contenedorRegistro: {
      alignItems: "stretch",
      justifyContent: 'center',
      height: '100%',
      width: '100%',
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
    contenedorControles: {
      flex: 3,
      flexDirection:"column",
      alignItems: "stretch",
      justifyContent:"center",
      padding:0,
    },
    contenedorLogo: {
      flexDirection:"column",
      alignItems: "center",
      justifyContent:"center",
    },
    sombraControles: {
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    tituloLogin: {
        color: "#FFFFFF" ,
        fontSize: 20,
        fontWeight: "700",
      },
    tituloBoton: {
      color: "#FFFFFF" ,
      fontSize: 14,
      fontWeight: "500",
    },
    tituloBoton2: {
      color: "#FFFFFF" ,
      fontSize: 15,
      fontWeight: "600",
    },
    controles:{
      flex:3,
      marginBottom:30,
      paddingLeft:10,
      paddingRight:10,
    },
    contenedorBotones:{
      paddingLeft:10,
      marginTop:0,
      alignItems:"center",
      justifyContent:"center",
      flexDirection: "column",
      height:100,
    },
    boton:{
      alignItems:"center",
      marginLeft:5,
      marginRight:5,
      height:'40%',
      width:170,
    },
    botonRedes:{
      flex:0.3,
      alignItems:"stretch",
      marginTop:20,
    },
    entradas:{
      flex:0.2,
      alignItems:"stretch",
      margin:5,
      padding:8,
      fontSize: 16,
      fontWeight:"400",
      color: "#495057",
      backgroundColor:"#fff",
      borderWidth:2,
      borderStyle:"solid",
      borderColor: '#FFFFFF',
      borderRadius: 25,
    },
    iniciarSesion:{
      width: 150,
      height: 40,
      alignContent:"center",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 40,
      backgroundColor: '#3A6C96',
    },
    actualizar:{
      width: 380,
      height: 40,
      marginTop:100,
      alignContent:"center",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 40,
      backgroundColor: '#0D7701',
    }
  });
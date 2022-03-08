import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatLists } from 'react-native';
import { withTheme } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function sucursales() {
    
    return (
        <View style={styles.Entregas}>
            <View style={styles.entrega1}>
                <View style={styles.tilOp}>
                    <Text style={styles.ti}>Entregas</Text>
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
                    <TouchableOpacity style={styles.OpEntrega}>
                        <View style={styles.circleIcon}>
                            <AntDesign name='enviroment' style={{ fontSize: 25 }} />
                        </View>
                        <Text style={styles.nombre}>  Nombre  </Text>
                        <Text style={styles.telefono}>   Telefono </Text>
                        <Text style={styles.horario}>Atendemos de 8:00a.m - 5:00p.m</Text>
                    </TouchableOpacity>


                </View>


                <TouchableOpacity style={styles.Totales}>
                    <View style={styles.total}>
                        <Text>Atrás</Text>
                        <AntDesign name='left' style={styles.icoAtras} />
                        <View style={styles.continuar}>
                            <Text>Siguiente</Text>
                            <AntDesign name='right' style={styles.ico} />
                        </View>
                    </View>
                </TouchableOpacity>


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
    entrega1: {
        backgroundColor: '#BAFBB9',
        borderWidth: 2,
        borderColor: "#dedede",
        borderRadius: 5,
        alignItems: "stretch",
        justifyContent: 'center',
        height: '90%',
        width: '100%',
    },
    nombre:{
      position: "relative",
      top: 15,
      left:30,
    },
    telefono:{
        position: "relative",
        top: 40,
        left:-20,
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
        top: -80,
    },
    horario: {
        position: 'relative',
        left: -70,
        top: 45,
        paddingVertical: 50,
        fontSize: 10,
    },
    total: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 30,
        position: "relative",
        top: 120,
        backgroundColor: "#31C02E",
    },
    continuar: {
        flexDirection: "row",  
    },
    ico: {
        paddingVertical: 5,
    },
    icoAtras: {
        position: "relative",
        left: -155,
        top: 2
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

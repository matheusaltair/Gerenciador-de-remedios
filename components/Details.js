import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../src/Services/api';
import { useEffect } from 'react/cjs/react.production.min';


const width  = Dimensions.get('screen').width / 1.1
const height = Dimensions.get('screen').height / 7



const Details = ({route}) =>{

    const navigation = useNavigation();
    const { name, amount, measure, qttPillBox, dailyPill, balance, endDate, id } = route.params;

    const update = async ()  => {
        try{
            const response = await api.put(`/remedios/saldo/${id}`)
            Alert.alert('Sucesso', 'Saldo atualizado com sucesso!')
        }
        catch(e) {
            console.log(e)
            Alert.alert('Erro', 'Erro ao tentar atualizar!')
        }
    }


    const del = async () => {
        
        try{
            await api.delete(`/remedios/${id}`)
            Alert.alert('Sucesso', 'Remédio deletado com sucesso!')
            navigation.goBack()

        }
        catch(e) {
            console.log(e)
            Alert.alert('Erro', 'Erro ao tentar deletar!')
        }
      }

    return (<SafeAreaView style={styles.screen}>
        <View style={styles.contentTitle}>
            <Text style={styles.title}>INFORMAÇÕES</Text>
        </View>
        <View style={styles.viewInformations}>

            <View style={styles.informations}>
                <Text style={styles.text}>Nome: { name }</Text>
                <Text style={styles.text}>Concentração: {amount}{measure}</Text>
                <Text style={styles.text}>Comprimidos: {qttPillBox}</Text>
                <Text style={styles.text}>Pilulas por dia: {dailyPill}</Text>
                <Text style={styles.text}>Saldo: {balance}</Text>
                <Text style={styles.text}>Data fim: {endDate}</Text>
            </View>

        </View>
        
        <View style={styles.buttonView}>

            <TouchableOpacity 
            style={styles.Button}
            onPress={() => 
                Alert.alert(
                    "Deletar",
                    "Deseja realmente deletar?",
                    [
                      {
                        text: "Cancelar",
                      },
                      { text: "OK", onPress: del}
                    ]
                  )
              }>
                <Text style={styles.textButton}>Deletar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.Button}
            onPress={update}>
                <Text style={styles.textButton}>Nova Compra</Text>
            </TouchableOpacity>

        </View>
    
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    contentTitle: {
        alignItems: 'center',
        marginVertical: 40,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'rgb(130, 10, 209)',
      
    },
    viewInformations: {
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'rgb(130, 10, 209)',

    },
    informations: {
        marginTop: 15,
        marginHorizontal: 50,
    },
    text: {
        marginTop: 25,
        fontSize: 15,
        lineHeight: 20,
        fontWeight: 'bold',
        color: 'white',

    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(130, 10, 209)',

    },
    Button: {
        height: 60,
    },
    textButton: { 
        fontWeight: 'bold',
        fontSize: 17, 
        color: 'white'
    }
})

export default Details;
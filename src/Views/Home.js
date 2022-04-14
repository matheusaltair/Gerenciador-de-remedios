import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, FlatList, ScrollView } from 'react-native';
import Card from '../../components/Card.js'


import logo from '../../assets/health.png'
import api from '../Services/api'


const Home = () =>{
    const [remedios, setRemedios] = useState();

    const APIMedicines = async () => {
        try {
          const response = await api.get(`/remedios`)
          setRemedios(response.data);
        } catch (e) {
          console.log(e);
        };
      };
    
      useEffect(() => {
        APIMedicines()
      }, [remedios]);

   return <SafeAreaView style={styles.screen}>
            <ScrollView>
       <View style={styles.header}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.welcome}>Gerenciador de remedios</Text>
       </View>
       <View>
            <Text style={styles.titleMedicinesList}>Lista de Remédios</Text>
            <FlatList
                style={styles.flatList}
                data={remedios}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                <View style={styles.MedicinesList}>
                    <Card name={item.nome} amount={item.qtdConcentracao} measure={item.medidaConcentracao} qttPillBox={item.qtdComprimidoCaixa} 
                    dailyPill={item.qtdComprimidoDiario} balance={item.saldo} endDate={item.dataFim} id={item.id}/>
                </View>}/>
        </View>
        </ScrollView>
   
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25, 
        paddingHorizontal:20,
        backgroundColor: 'rgb(130, 10, 209)',

    },
    welcome: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    logo: {
        width: 40,
        height: 40,
    },
    titleMedicinesList: {
        marginTop: 10,
        marginHorizontal: 25,
        paddingTop: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'rgb(130, 10, 209)',
    },
    MedicinesList: {
        alignItems: 'center',
    },

})

export default Home;

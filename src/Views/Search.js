import React, { useState, useEffect }  from 'react';
import { SafeAreaView, TextInput, StyleSheet, Dimensions, View, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../Services/api';
import Card from '../../components/Card';

import Icon from 'react-native-vector-icons/Ionicons';


const width  = Dimensions.get('screen').width / 1.2
const height = Dimensions.get('screen').height / 18

const Search = ({route}) =>{

    
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState('');

    const search = async () => {
        try {
          const response = await api.get(`/remedios`, {
          })
          setSearchText(response.data)
          console.log(response.data)
        } catch (e) {
          console.log(e);
        };
        
      };
    
    
return <SafeAreaView style={styles.screen}>
            <View style={styles.divInput}>
                <TextInput 
                style={styles.textInput}
                placeholder='Busque um remédio'
                value={searchText}
                onChangeText={(value) => setSearchText(value)}
                placeholderTextColor='#D3D3D3'
                autoCapitalize='none'
                autoCorrect={false}
                />
                <TouchableOpacity 
                style={styles.touchableSearch}
                onPress={search}>
                    <Icon name='search' color={'rgb(130, 10, 209)'} size={25} style={styles.iconSearch}/> 
                </TouchableOpacity>

            </View>
            <FlatList
                style={styles.flatList}
                data={searchText}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                <View style={styles.MedicinesList}>
                    <Card name={item.nome} amount={item.qtdConcentracao} measure={item.medidaConcentracao} qttPillBox={item.qtdComprimidoCaixa} 
                    dailyPill={item.qtdComprimidoDiario} balance={item.saldo} endDate={item.dataFim} id={item.id}/>
                </View>}/>

        </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    divInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20

    },
    textInput :{
        width: width,
        height: height,
        paddingHorizontal: 16,
        fontWeight: 'bold',
        fontSize: 13,
        borderRadius: 10,
        color: 'white',
        backgroundColor: 'rgb(130, 10, 209)'
      
    },
    touchableSearch: {
        marginLeft: 12,
        borderRadius: 30,
    },
    flatList: {
        flex: 1
    },
    MedicinesList: {
        alignItems: 'center',
    } 
})

export default Search;

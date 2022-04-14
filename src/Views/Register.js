import React, { useState }  from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, Text, TouchableOpacity, Alert } from 'react-native';
import api from '../Services/api';

import InputText from '../../components/InputText';

const width  = Dimensions.get('window').width / 1.1;
const height = Dimensions.get('window').height / 18;

const DismissKeyboard = ({children}) => {
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        {children}
        </TouchableWithoutFeedback>
}

const Register = () =>{

    const [ medicines, setMedicines ] = useState({});
    const [ name, setName ] = useState('');
    const [ amountConcentration, setAmountConcentration ] = useState('');
    const [ concentrationMeasure, setConcentrationMeasure] = useState('');
    const [ qttPillBox, setQttPillBox ] = useState('');
    const [ dailyPill, setDailyPill ] = useState('');
        
    const apiSend = async () => {
        try {
          const response = await api.post(`/remedios`,{
            nome: name,
            qtdConcentracao: amountConcentration,
            medidaConcentracao: concentrationMeasure,
            qtdComprimidoCaixa: qttPillBox,
            qtdComprimidoDiario: dailyPill
          });
          setMedicines(response.data);
          Alert.alert('Sucesso', 'Remédio adicionado com sucesso');
        } catch (e) {
          console.error(e);
          Alert.alert('Erro', 'Houve um erro ao tentar adicionar o Remédio');
        };
      };


 
   return <SafeAreaView style={styles.screen}>
       <Text style={styles.title}>Cadastro de remédios</Text>
       <View style={styles.containerInput}>
            <InputText 
             placeholder='Nome do Remédio'
             value={name}
             onChangeText={setName}
            />
            <InputText
                placeholder='Quantidade de concentração'
                value={amountConcentration}
                onChangeText={setAmountConcentration}
                keyboardType='number-pad'
            />
            <InputText
                placeholder='Medida de concentração'
                value={concentrationMeasure}
                onChangeText={setConcentrationMeasure}
            />
            <InputText
                placeholder='Comprimidos Caixa'
                value={qttPillBox}
                onChangeText={setQttPillBox}
                keyboardType='number-pad'
            />
            <InputText
                placeholder='Comprimidos por dia'
                value={dailyPill}
                onChangeText={setDailyPill}
                keyboardType='number-pad'
            />
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={apiSend}>
                <Text style={styles.textButton}>Cadastrar</Text>
           </ TouchableOpacity>
            </View>
             
       </View>
     
  
    </SafeAreaView>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    title: {
        marginTop: 10,
        marginHorizontal: 20,
        paddingTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color:  'rgb(130, 10, 209)',

    },
    containerInput: {
        flex: 1,
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 45,
        borderRadius: 10,
        backgroundColor: 'rgb(130, 10, 209)',
    },
    textButton: {
        fontWeight: 'bold',
        color: 'white',
    } 
});


export default Register;

import React from 'react';
import { useNavigation  } from '@react-navigation/native';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';


const width  = Dimensions.get('window').width / 1.1
const height =  Dimensions.get('window').height / 10.5

const Card = ({ name, amount, measure, qttPillBox, dailyPill, balance, endDate, id}) =>{
    const navigation = useNavigation() 

   return (<TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details',{name: name, amount: amount, measure: measure,
   qttPillBox: qttPillBox, dailyPill: dailyPill, balance: balance, endDate: endDate, id: id})}>
       <View style={styles.infoContent}>
           <View>
               <Text style={styles.medicineName}>{name} ( {dailyPill} / dia )</Text>
               <Text style={styles.balance}>Saldo: {balance}</Text>
            </View>
            <View style={styles.infosconcentrationEendDate}>
                <Text style={styles.infoConcentration}>{amount} {measure}</Text>
                <Text style={styles.endDate}>{endDate}</Text>
            </View>
       </View>
      
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: width,
        height: height,
        marginTop: 17,
        backgroundColor: 'rgb(130, 10, 209);',
        borderRadius: 8,
        elevation: 5,

        shadowColor: '#000',
        shadowOffset: {
        width:0,
        height: 3
    },

        shadowOpacity: 0.50,
        shadowRadius: 2.62

    },
    infoContent :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    medicineName: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 14,
        color: 'white',
        marginVertical: 6
      
    },
    infoConcentration: {
        fontSize: 10,
        lineHeight: 14,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 6

    },
    infosconcentrationEendDate: {
        alignItems: 'flex-end',
    },
    balance: {
        fontSize: 13,
        lineHeight: 13,
        color: 'white',
        marginVertical: 6
    },
    endDate: {
        fontSize: 13,
        lineHeight: 13,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 6

    }
})


export default Card;
import * as React from 'react'
import {Text, Image, Button, View, StyleSheet} from 'react-native'

export default class Landing extends React.Component{
    render(){
        return (
            <View style = {styles.viewStyle}> 
                <Text style = {styles.TextStyle}>Book Santa</Text>
                <Image source = {require ('../assets/book.png')} style = {{ width : 700, height : 502}}/>
                <Button title = "GET STARTED"onPress={() => this.props.navigation.navigate('Login')}/>

            </View>                
        )
    }
}
const styles = StyleSheet.create({ 
TextStyle : {

fontWeight : 'bold',
fontSize : 30,
fontFamily : 'Aerial',
color : 'white'
},
viewStyle : {
alignItems : 'center', 
justifyContent : 'center',
backgroundColor: '#f55a42',
flex : 1,
marginTop : 50,
}    

 })
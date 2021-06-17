import * as React from 'react'
import { Text, Image, Button, View, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Modal } from 'react-native'
import db from '../config'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Login extends React.Component {



  UserSignUp = (EmailId, password, Confirm_Password) => {
    if (password != Confirm_Password) {
      alert('Error, Password does not match')

    }
    else {

      firebase.auth().createUserWithEmailAndPassword(EmailId, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          db.collection('users').add({
            First_Name: this.state.First_Name,
            Last_Name: this.state.Last_Name,
            EmailId: this.state.EmailId,
            Address: this.state.Address,
            Contact_Number: this.state.Contact_Number,


          })
          alert("You have succesfully signed up to our website !")

        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("Error 201")
        });
    }
  }
  userLogin = (EmailId, password) => {
    firebase.auth().signInWithEmailAndPassword(EmailId, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert("Logged in succesfully !")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error 333")
      });
  }

  Show_Modal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.Is_Modal_Visible}
      >
        <View>
          <ScrollView>

            <KeyboardAvoidingView>

              <TextInput style={{ width: 100, height: 100, border: 'solid' }}
                placeholder='Jason'
                maxLength={10}
                onChangeText={(text) => { this.setState({ First_Name: text }) }} />

              <TextInput style={{ width: 100, height: 100, border: 'solid' }}
                placeholder='Holder'
                maxLength={10}
                onChangeText={(text) => { this.setState({ Last_Name: text }) }} />

              <TextInput style={{ width: 100, height: 100, border: 'solid' }}
                placeholder='Your Address line 1'
                multiline={true}
                onChangeText={(text) => { this.setState({ Address: text }) }} />

              <TextInput style={{ width: 100, height: 100, border: 'solid' }}
                placeholder='+1 (234) 5678910'
                keyboardType='numeric'
                onChangeText={(text) => { this.setState({ Contact_Number: text }) }} />

              <TextInput style={{ width: 100, height: 100, border: 'solid' }}
                placeholder='example@example.com'
                keyboardType='email-address'
                onChangeText={(text) => { this.setState({ EmailId: text }) }} />

              <TextInput style={{ width: 100, height: 100, border: 'solid' }}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(text) => { this.setState({ Password: text }) }} />

              <TextInput style={{ width: 100, height: 100, border: 'solid' }}
                placeholder='Confirm Password'
                secureTextEntry={true}
                onChangeText={(text) => { this.setState({ Confirm_Password: text }) }} />

            </KeyboardAvoidingView>

            <TouchableOpacity onPress={() => {
              this.UserSignUp(this.state.EmailId, this.state.Password, this.state.Confirm_Password)
            }}>
              <Text> Sign Up </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {
              this.setState({ Is_Modal_Visible: false })
            }}>
              <Text> Cancel </Text>
            </TouchableOpacity>


          </ScrollView>
        </View>

      </Modal>
    )
  }

  constructor() {

    super()

    this.state = {
      EmailId: '',
      Password: '',
      Confirm_Password: '',
      First_Name: '',
      Last_Name: '',
      Contact_Number: '',
      Address: '',
      Country: '',
      Is_Modal_Visible: false
    }

  }

  render() {

    return (
      <View>
        <View> {this.Show_Modal()} </View>
        <Text> Welcome To Our Login Screen </Text>
        <TextInput style={{ width: 500, height: 60, border: 'solid' }} placeholder='Example@Gmail.com'
          keyboardType='email-address'
          onChangeText={(text) => { this.setState({ EmailId: text }) }} />

        <TextInput style={{ width: 500, height: 60, border: 'solid', marginTop: 20 }}
          placeholder='Password@123'
          secureTextEntry={true}
          onChangeText={(text) => { this.setState({ Password: text }) }} />

        <Button title='Login' onPress={() => {
          this.userLogin(this.state.EmailId, this.state.password)
        }} />

        <Button title='New Member ? Sign up now' onPress={() => {
          this.setState({ Is_Modal_Visible: true })
        }} />

      </View>
    )
  }
}
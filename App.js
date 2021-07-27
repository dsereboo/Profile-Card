import React from 'react';
import { StyleSheet,Image, Text,TouchableOpacity,View } from 'react-native';
import profile from "./assets/profile.jpg"

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={profile}/>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>School</Text>
        <Text style={styles.text}>Achimota School</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Email Address</Text>
        <Text style={styles.text}>greycity@mobile.com</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={[styles.label,styles.blueLabel]}>Name</Text>
        <Text style={[styles.text,styles.blueText]}>Kojo Antwi</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={[styles.label,styles.blueLabel]}>Nick name</Text>
        <Text style={[styles.text,styles.blueText]}>Kojo Antwi</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={[styles.label,styles.blueLabel]}>Emergency Contact</Text>
        <Text style={[styles.text,styles.blueText]}>+233 205 000000</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>UPDATE PROFILE</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 40,
  },

  image:{
    width:150,
    height:150,
    marginTop:50,
    marginBottom:40,
    alignSelf:"center",
    borderRadius:75,
  },

  detailsContainer:{
   marginVertical:10,
  },

  label:{
    flexDirection:"row",
    color:"#BEBEBE",
    marginBottom:2,
  },

  blueLabel:{
    color:"#007FFF",
  },

  text:{
      fontSize:18,
  },

  blueText:{
    borderBottomColor:"#E8E8E8",
    borderBottomWidth:1,
    paddingBottom:7,
  },

  button:{
    backgroundColor:"#007FFF",
    padding:12,
    marginTop:20,
    borderRadius:20,
    alignItems:'center',
   
    
  },

  buttonText:{
    color:"#FFFFFF",
    fontSize:18,
  }

  




});

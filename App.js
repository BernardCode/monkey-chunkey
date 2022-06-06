import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from './localdb';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      text:'',
      chunks:[]
    }
  }
  render(){
    return(
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text:'Monkey Chunky',
            style:{color:'#ffffff', fontSize:24}
          }}
          />
          <Image 
          style={styles.imageIcon}
          source={{uri:"https://stickershop.line-scdn.net/stickershop/v1/product/4077442/LINEStorePC/main.png;compress=true"}}/>
          <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({text: text});
          }}
          value={this.state.text}
          />
          <TouchableOpacity style={styles.goButton}
          onPress={()=>{
            this.setState({chunks:db[this.state.text].chunks})
          }}
          >
          <Text style={styles.buttonText}>GO</Text>
          </TouchableOpacity>
          <View>
          {this.state.chunks.map(item=>{
            return(
              <TouchableOpacity style={styles.chunkButton}>
                <Text style={styles.displayText}>{item}</Text>
              </TouchableOpacity>
            );


          })}


          </View>
      </View>
      </SafeAreaProvider>
    );
  }


}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#3d222d'
  },
  imageIcon:{
  width:150,
  height:150,
  marginLeft:105,
  marginTop:30
  },
  inputBox: { 
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  chunkButton: {
  width: '60%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: 10,
  margin: 5,
  backgroundColor: 'crimson'
}

});
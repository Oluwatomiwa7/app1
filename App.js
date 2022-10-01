import {useState} from 'react';

import { Button, StyleSheet, View,Text, TextInput,ScrollView,FlatList} from 'react-native';
import goalItem from './component/GoalItem';

export default function App() {

  const [enteredGoalText,setEnteredGoalText]=useState('');
  const[cousrseGoals,setCourseGoals]=useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
   
  };
  function addGoalHandler(){
    setCourseGoals(currentCourseGoal=>[...cousrseGoals,enteredGoalText]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course Goal' onChangeText={goalInputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalcontainer}>
      <FlatList  data={cousrseGoals} 
      renderItem={itemData=>{
        return<GoalItem. text={itemData.item.text}/>;
      }}
      keyExtractor={(item,index)=>{return item.id;
      }}
       />
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding:60,
    paddingLeft:15,
    paddingTop:50,
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:35,
    borderBottomWidth:3,
    

  },
  textInput:{
    borderWidth:1,
    width:'80%',
    borderColor:'pink',
    marginRight:8,
    padding:2,

  },
  goalcontainer:{
    flex:5,
    
  
  },
  

  }
);

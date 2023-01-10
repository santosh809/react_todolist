// import libariries to create component
import React, {useState} from "react";
import { Text, View,StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard} from "react-native";
import Task from "./component/task";

// create a component that return some jsx /simple function
function App(){
  const[task, setTask] = useState();
  const[taskitem, setTaskItem] = useState([]);

  const handleAddTask= () =>{
    Keyboard.dismiss()
    setTaskItem([...taskitem, task])
    setTask(null);
  }
  
  const completeTask = (index) =>{
    let itemscopy = [...taskitem];
    itemscopy.splice(index,1);
    setTaskItem(itemscopy);
  }
  return (
    <View style={styles.container}>
      {/* Todolist */}
      <View style={styles.taskWapper}>
        <Text style={styles.sectionTitle}>Today's Taskes</Text>
        <View style={styles.items}>
          {/* This is where task go */}
          {
            taskitem.map((items,index) => {
              return(
                <TouchableOpacity key= {index}  onPress={()=> completeTask(index)}>
                  <Task text={items}/>
                </TouchableOpacity>
              ) 
            })
          }
        </View>
      </View>
      {/* Write the task section (input) */}
      <KeyboardAvoidingView 
      behavior={Platform.OS == 'android'?"padding":"height"}
      style ={styles.writeTask}>
        <TextInput style={styles.input} placeholder={"write a task"} value={task} onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

// create a stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#E8EAED",
  },
  taskWapper:{
    paddingTop:100,
    paddingHorizontal:20,    
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: "bold",
  },
  items:{
    marginTop:30,
  },
  writeTask:{
    position:"absolute",
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  },
  addWapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{},
});

// create the files so that we can use it elsewhere in our app
export default App;
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, Button, TextInput} from 'react-native';
import { ADD_TODO } from '../action';
import { exp } from 'react-native-reanimated';
const mapStateToProps= (state =>{
    return {todos:state.todos};
});
const mapDispatchToProps=(dispatch=>{
    return {
        onClick:text=>{
            dispatch(ADD_TODO(text));
        }
    };
});
class ToDo extends Component{
    render(){
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:40,color:'skyblue'}}>{this.props.id}</Text>
                <Text style={{fontSize:40,color:'red'}}>{this.props.text}</Text>
                <Text style={{fontSize:40,color:'green'}}>{this.props.completed?'完成了':'未完成'}</Text>
            </View>
        );
    }
}
class ToDoList extends Component{
    render(){
        return(
            this.props.data.map((data)=><ToDo text={data.text} id={data.id} completed={data.completed}/>)
        );
    }
}
class AddToDo extends Component{
    state={text:''};
    render(){
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between',height:50,marginTop:5}}>
                <View style={{flex:3,borderBottomWidth:2}}><TextInput onChangeText={(text)=>{this.setState({text})}} style={{flex:1,fontSize:20}}/></View>
                <View style={{flex:1}}><Button onPress={()=>{this.props.onClick(this.state.text)}} title='提交'/></View>
            </View>
        );
    }
}
class FirstScreen extends Component{
    render(){
        return (
            <View>
                <AddToDo onClick={this.props.onClick}/>
                <ToDoList data={this.props.todos}/>
            </View>
            
        );
    };
}
var fs=connect(mapStateToProps,mapDispatchToProps)(FirstScreen);
export default fs;

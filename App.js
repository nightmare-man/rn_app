import React,{Component}from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import all_reducer from './reducer/index';
import FirstScreen from './screen/index';
let store=createStore(all_reducer,{visibilityFilter:'show_all',todos:[{id:10,text:'hhh',completed:false}]});
export default class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <FirstScreen/>
      </Provider>
    );
  }
}
import React from 'react';
import {  Text, View, Alert } from 'react-native';

import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';

import axios from 'axios';


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    peoples: []
    };
  }

  componentDidMount() {
  axios
       .get('https://randomuser.me/api/?nat=br&results=6')
       .then(response => {
           const {results} = response.data;
           this.setState({
              peoples: results
           });})
      .catch(erro => Alert.alert('Error da promise'))



  }
  render() {
     return (
      <View>
          <Header title="Pessoas!" />
         <PeopleList peoples={this.state.peoples} />
      </View>
    );
  }
}

import React from 'react';
import { Text, View, Alert } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';


export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      peoples: []
    };
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=20')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });
      })
      .catch(erro => Alert.alert('Error da promise'))

  }
  render() {
      
    return (
      <View>
        <PeopleList 
            peoples={this.state.peoples} 
            onPressItem={pageParams => {
                this.props.navigation.navigate('PeopleDetail', pageParams);
            }} />
      </View>
    );
  }
}

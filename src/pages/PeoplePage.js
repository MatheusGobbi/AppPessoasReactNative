import React from 'react';
import { Text, View, Alert, ActivityIndicator, StyleSheet } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';


export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=br&results=120')
        .then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false
          });
        }).catch(error => {
          this.setState({
            error: true,
            loading: false
          })
        });
    }, 1500)
  }

  renderPage() {
    if (this.state.loading) {
        return <ActivityIndicator size="large" color="#1E90FF" />;
    }
    if(this.state.error) {
        return <Text style={styles.error}>Ops... algo deu errado =(</Text>;
    }
    return (
      <PeopleList
          peoples={this.state.peoples}
          onPressItem={pageParams => {
          this.props.navigation.navigate('PeopleDetail', pageParams);
      }} />
    )
    
  }

  render() {

    return (
      <View style={StyleSheet.container}>
        {this.renderPage()}
        {/*            --- Outro jeito de fazer o funçao renderPage();---
          this.state.loading
            ? <ActivityIndicator size="large" color="#1E90FF" />
            : this.state.error
              ? <Text style={styles.error}>Ops... algo deu errado =(</Text>
              : <PeopleList
                peoples={this.state.peoples}
                onPressItem={pageParams => {
                  this.props.navigation.navigate('PeopleDetail', pageParams);
                }} />
              */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20
  }
});

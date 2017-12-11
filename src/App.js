import React, { Component } from 'react';
import './App.css';
import Spinner from './components/Spinner/Spinner';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';

import { getUsers } from './helpers/api';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      users: [],
      isLoading: false,
    }
  }

  handleSearchInput = (event) => {
    
    this.setState({
      search: event.target.value,
    });
  }

  handleClick = () => {
    
    this.setState({
      isLoading: true,
    });
    getUsers(this.state.search)
      .then((result) => {
        this.setState({
          users: result.data.items,
          isLoading: false,
        });
      });
  }

  render() {
    const { isLoading, users } = this.state;
    const loading = isLoading
      ? <Spinner message='Loading' />
      : <UserList users={users}/>;
    
    return (
      <div>
        <Header title="github search" />
        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">
              <input onChange={this.handleSearchInput} type="text"/>
              <button onClick={this.handleClick} className="search-button">search</button>
              { loading }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
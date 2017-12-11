import React, { Component } from 'react'

export default class UserList extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map((user) => {
          return (
            <li key={user.login}><a href={user.html_url} target="_blank">{user.login}</a></li>
          );
        })}
      </ul>
    )
  }
}

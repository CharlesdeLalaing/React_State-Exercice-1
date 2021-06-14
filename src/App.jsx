import React from 'react'

export default class App extends React.Component {

  state = [
    {nom: 'Felix', prenom: 'Gus', age: 14},
    {nom: 'Charles', prenom: 'Ralph', age: 42},
    {nom: 'Patrick', prenom: 'Alrph', age: 1620}
  ]

  render() {
    return (
      <div>
      {this.state.map(userInfo => {
        return (
          <h1>{userInfo.nom}, {userInfo.prenom}, {userInfo.age}</h1>
        )
      })}
      {/* {this.state.map((userInfo) => {
        return <h1>{userInfo.nom + userInfo.prenom + userInfo.age}</h1>
      })} */}
      </div>
    )
  }
}

import React from 'react'
import Perso from './composant/perso/Perso'

export default class App extends React.Component {

  state = [
    {nom: 'Felix', prenom: 'Gus', age: 14},
    {nom: 'Charles', prenom: 'Ralph', age: 42},
    {nom: 'Patrick', prenom: 'Alrph', age: 1620}
  ]

  render() {
    return (
      <div>

      <Perso 
        nom={this.state.map(elemNom => {return (elemNom.nom)})} 
        prenom={this.state.map(elemPrenom => {return(elemPrenom.prenom)})}
        age={this.state.map(elemAge => {return(elemAge.age)})}
        />


      {/* {this.state.map(userInfo => {
        return (
          <h1>{userInfo.nom}, {userInfo.prenom}, {userInfo.age}</h1>
        )
      })} */}
      {/* {this.state.map((userInfo) => {
        return <h1>{userInfo.nom + userInfo.prenom + userInfo.age}</h1>
      })} */}
      </div>
    )
  }
}

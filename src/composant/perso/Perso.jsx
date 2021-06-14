import React from 'react'

export default class Perso extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p> Je m'appelle {this.props.nom[0]}, {this.props.prenom[0]}, j'ai {this.props.age[0]}</p>
                <p> Je m'appelle {this.props.nom[1]}, {this.props.prenom[1]}, j'ai {this.props.age[1]}</p>
                <p> Je m'appelle {this.props.nom[2]}, {this.props.prenom[2]}, j'ai {this.props.age[2]}</p>
            </div>
        )
    }
}

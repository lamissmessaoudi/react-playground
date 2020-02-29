import React from "react";
import { Component } from "react";
import "./App.css";
import Person from "./Person/Person"; //.js facultatif

class App extends Component {
  state = {
    //etat de component
    persons: [
      { id: "lms", name: "lamiss", age: 21, postionA: true }, //chacun doit avoir a unique id
      { id: "mlk", name: "Maleek", age: 19, postionA: true },
      { id: "mnr", name: "Manar", age: 16, postionA: true }
    ],
    showPersons: true
  };

  switchNameHandler = () => {
    console.log("Button was clicked !!");

    //persons[0].name="ahmed " est fausse , il faut creer une variable

    const newPersons = [...this.state.persons];
    newPersons[0].name = "ahmed "; // il faut creer un nouveau tab pour les changements
    // car on ne peut pas modifier les obj de state directement
    //les modifications sont faites dans le setState()
    this.setState({
      persons: newPersons // n'est pas une affectaion par"="  mais obj key: value
    });
  };

  changeNameHandler = (event, person) => {
    const newPersons = [...this.state.persons];
    const index = newPersons.indexOf(person);
    newPersons[index].name = event.target.value; //valeur entree dans l'input

    this.setState({
      persons: newPersons
    });
  };
  deletePerson = person => {
    const newPersons = [...this.state.persons];
    const index = newPersons.indexOf(person);
    newPersons.splice(index, 1); //remove starting from index 1 item
    this.setState({
      persons: newPersons
    });
  };

  showPersonsHandeler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  movePersonsHandeler = person => {
    const newPersons = [...this.state.persons];
    const index = newPersons.indexOf(person);
    newPersons[index].postionA = !newPersons[index].postionA;

    this.setState({
      persons: newPersons
    });
  };

  render() {
    //ce code va executer chaque fois of fait appel à render
    //return jsx
    let personsComponentsA = null;
    let personsComponentsB = null;
    if (this.state.showPersons)
      personsComponentsA = (
        <div>
          {this.state.persons.map(person => {
            if (person.postionA == true)
              return (
                <Person //tag jsx
                  name={person.name} //properties
                  age={person.age}
                  key={person.id}
                  deleted={() => {
                    this.deletePerson(person);
                  }}
                  changed={event => {
                    this.changeNameHandler(event, person); //on ajoute ici les () car on veut excuter la methode ici
                  }}
                  moved={() => {
                    this.movePersonsHandeler(person);
                  }}
                />
              );
          })}
        </div>
      );
    if (this.state.showPersons)
      personsComponentsB = (
        <div>
          {this.state.persons.map(person => {
            if (person.postionA == false)
              return (
                <Person //tag jsx
                  name={person.name} //properties
                  age={person.age}
                  key={person.id}
                  deleted={() => {
                    this.deletePerson(person);
                  }}
                  changed={event => {
                    this.changeNameHandler(event, person); //on ajoute ici les () car on veut excuter la methode ici
                  }}
                  moved={() => {
                    this.movePersonsHandeler(person);
                  }}
                />
              );
          })}
        </div>
      );

    return (
      <div className="App">
        <h1>Hello React App !!!</h1>
        <button onClick={this.switchNameHandler}>Switch Name </button>
        <button onClick={this.showPersonsHandeler}>Toggle </button>
        <br />

        <div className="A">
          <h2>"List A"</h2>
          {personsComponentsA}
        </div>
        <div className="B">
          <h2>"List B"</h2>
          {personsComponentsB}
        </div>
      </div>
    );
  }

}
export default App;
// <Person> doesn't have a css class
//les name et age props should be string in "" no numbers in this case <Person name="Manar" age="16" />
// if we're using objs we can put numbers persons={name:"lamiss", age:21} ]
// {} : contenu dynamique => we want the value of the var else it will show the name of the var
// state : variable , objet de Js specifique a une seule component
// onClick is an event Listener
// setState() is how react detects the changes in state
//to chnage a state we create a new variable identiqua a state , we do the changes in it and then we call setState and affect the changes to the state
//on change traja3 event (ay event)
//one way data bind .. echange des donnes entres les componrnts through props
//class lkbira tab3ath lel sghar by props
//l'autre sens se fait par creer une function dans la classe lkbira , sghira ta3mel appel lel function w thot donne eli bech tab3athha comme parametre
//import won't work => boucle infinie : onchange needs the method ant the method needs an argument
//arrow function permet l'acces le this inside the class

var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var App = React.createClass({
  getInitialState() {
    return {
      contacts
    }
  },

  addContactToList({firstName, lastName, email}, callback) {
    this.setState(state => {
      state.contacts = [{
        firstName, lastName, email, id: (length => ++length)(state.contacts.length)
      }, ...state.contacts]
    }, callback());
  },

  render() {
    return (
      <div className={'app'}>
        <ContactForm action={(first, second, third) => this.addContactToList(first, second, third)}></ContactForm>
        <Contacts items={this.state.contacts}></Contacts>
      </div>
    );
  }
});
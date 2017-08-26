var ContactForm = React.createClass({
  render() {
    return (
      <form className={'contactForm'} onSubmit={event => this.handleSubmit(event) }>
        <input required type='text' ref={input => this.firstName = input} placeholder='Imię'></input>
        <input required type='text' ref={input => this.lastName = input} placeholder='Nazwisko'></input>
        <input required type='email' ref={input => this.email = input} placeholder='Email'></input>
        <button type='submit' placeholder='Email'>Dodaj kontakt</button>
      </form>
    )
  },

  handleSubmit(event) {
    event.preventDefault()
    
    this.props.action({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
    }, this.resetForm) // App.js will call this after state update
  },

  resetForm() {
    this.firstName.value = null
    this.lastName.value = null
    this.email.value = null
  }
})
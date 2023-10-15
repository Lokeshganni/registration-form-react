import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    first: '',
    last: '',
    showFirstNameError: false,
    showLastNameError: false,
    firstParaErr: false,
    lastParaErr: false,
    submitForm: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {first, last} = this.state
    const showFirstParaError = first === ''
    const showLastParaError = last === ''
    if (showFirstParaError || showLastParaError) {
      this.setState({
        firstParaErr: showFirstParaError,
        lastParaErr: showLastParaError,
      })
    } else {
      this.setState({
        submitForm: true,
        firstParaErr: false,
        lastParaErr: false,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({first: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({last: event.target.value})
  }

  onBlurFirstName = () => {
    const {first} = this.state
    const firstNameError = first === ''
    this.setState({showFirstNameError: firstNameError})
  }

  onBlurLastName = () => {
    const {last} = this.state
    const lastNameError = last === ''
    this.setState({showLastNameError: lastNameError})
  }

  renderFormContainer = () => {
    const {
      showFirstNameError,
      showLastNameError,
      firstParaErr,
      lastParaErr,
    } = this.state
    const firstNameClass =
      firstParaErr || showFirstNameError ? 'blur-input-ele' : null
    const lastNameClass =
      lastParaErr || showLastNameError ? 'blur-input-ele' : null
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label className="label-ele" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          onBlur={this.onBlurFirstName}
          onChange={this.onChangeFirstName}
          placeholder="First name"
          className={`input-ele ${firstNameClass}`}
          id="firstName"
          type="text"
        />
        {firstParaErr || showFirstNameError ? (
          <p className="required">Required</p>
        ) : null}
        <label className="label-ele" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          onBlur={this.onBlurLastName}
          onChange={this.onChangeLastName}
          placeholder="Last name"
          className={`input-ele ${lastNameClass}`}
          id="lastName"
          type="text"
        />
        {lastParaErr || showLastNameError ? (
          <p className="required">Required</p>
        ) : null}
        <div className="btn-container">
          <button type="submit" className="btn-ele">
            Submit
          </button>
        </div>
      </form>
    )
  }

  onClickSubmitBtn = () => {
    this.setState({submitForm: false})
  }

  renderSubmitForm = () => (
    <div className="form-container submit-form">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="submitted-para">Submitted Successfully</p>
      <div className="btn-container">
        <button onClick={this.onClickSubmitBtn} className="btn-ele">
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {submitForm} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        {submitForm ? this.renderSubmitForm() : this.renderFormContainer()}
      </div>
    )
  }
}
export default RegistrationForm

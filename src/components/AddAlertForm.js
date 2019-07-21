import React from "react";

export class AddAlertForm extends React.Component {
  state = {
    message: ''
  }

  inputRef = React.createRef()

  focus = () => {
    this.inputRef.current.focus()
  }

  reset = () => {
    this.setState({
      message: ''
    })
  }

  onChange = e => {
    this.setState({
      message: e.target.value
    })
  }

  onKeyDown = e => {
    const { message } = this.state

    if (e.keyCode === 13) {
      e.preventDefault()
    }

    if (e.keyCode === 13 && message.trim()) {
      this.addAlert()
    }
  }

  addAlert = () => {
    const { message } = this.state
    const { onSubmit } = this.props

    onSubmit(message)

    this.reset()
    this.focus()
  }

  componentDidMount() {
    this.focus()
  }

  render() {
    const { message } = this.state

    return (
      <form>
        <div className="field">
          <input
            value={ message }
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            type="text"
            placeholder="Alert message..."
            ref={this.inputRef}
          />
          <button
            onClick={this.addAlert}
            disabled={!message.trim()}
            type="button"
          >
            Add alert
          </button>
        </div>
      </form>
    )
  }
}

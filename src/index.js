import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { withPortal } from "./utils/HOCs"
import { AlertsList } from "./components/AlertsList"
import { AddAlertForm } from "./components/AddAlertForm"

const alertsElement = document.getElementById("alerts")
const AlertsPortal = withPortal(alertsElement)(AlertsList)

class App extends React.Component {
  state = {
    alerts: []
  }

  formRef = React.createRef()
  alert_id = 0

  focusForm = () => this.formRef.current.focus()

  getNextId = () => this.alert_id++

  addAlert = message => {
    const { alerts } = this.state

    this.setState({
      alerts: [...alerts, {id: this.getNextId(), message}]
    })
  }

  removeAlert = id => {
    const alertsList = this.state.alerts

    this.setState({
      alerts: alertsList.filter(alert => alert.id !== id)
    })

    this.focusForm()
  }

  render() {
    const { alerts } = this.state

    return (
      <div className="App">
        <AlertsPortal alerts={alerts} removeAlert={this.removeAlert} />
        <h1>React Portal Homework</h1>
        <AddAlertForm onSubmit={this.addAlert} ref={this.formRef} />
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

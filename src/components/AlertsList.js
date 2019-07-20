import React from "react"
import { Alert } from "./Alert"

export const AlertsList = ({ alerts, removeAlert }) => (
  alerts.map(alert => (
    <Alert alert={alert} key={alert.id} onRemove={removeAlert} />
  ))
)

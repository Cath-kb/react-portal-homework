import React from "react"

import { Alert } from "./Alert"
import { withAutoRemove } from "../utils/HOCs"

const delay = 10000
const AlertWithAutoRemove = withAutoRemove(delay)(Alert)

export const AlertsList = ({ alerts, removeAlert }) => (
  alerts.map(alert => (
    <AlertWithAutoRemove alert={alert} key={alert.id} onRemove={removeAlert} />
  ))
)

import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'

class CoreContext {
  step: number = 1
  user: object = {}
  token: null
  apiPath: String ="http://4.tcp.ngrok.io:18115"

  constructor() {
    makeAutoObservable(this)
  }

  setValue = (name, value) => {
    this[name] = value
  }

  stepUp = () => {
    this.step++
  }

  stepDown = () => {
    this.step--
  }
}

export const coreContext = createContext(new CoreContext())
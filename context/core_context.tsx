import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'

class CoreContext {
  step: number = 7

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
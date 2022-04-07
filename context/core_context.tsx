import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'

class CoreContext {
  step: number = 1

  constructor() {
    makeAutoObservable(this)
  }

  setValue = (name, value) => {
    this[name] = value
  }
}

export const coreContext = createContext(new CoreContext())
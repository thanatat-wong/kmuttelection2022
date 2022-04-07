import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'

class CoreContext {
  step: number = 1

  constructor() {
    makeAutoObservable(this)
  }
}

export const coreContext = createContext(new CoreContext())
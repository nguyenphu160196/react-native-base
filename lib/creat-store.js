import {initializeStore, InitialState} from '../store'

export function getOrCreateStore (initialState) {
  // Always make a new store if server, otherwise state is shared between requests
    return initializeStore(initialState)
  
}

export let store = getOrCreateStore()
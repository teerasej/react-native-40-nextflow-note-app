

import { createStore } from 'redux'
import reducer from './reducer'


export default function configureStore() {
    let store = createStore(reducer)
    return store
}

import actions from './actions'

const initialState = {
    notes: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.SAVE_NEW_NOTE:
        console.log('new note message:', payload)
        const newNotesArray = [ ...state.notes, { title: payload } ]
        return { ...state, notes: newNotesArray }

    default:
        return state
    }
}

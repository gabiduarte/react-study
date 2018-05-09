const INITIAL_STATE = { value: 'Opa' }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case('VALUE_CHANGED'):
            return { value: action.payload } //pode retornar só um objeto com o value pq ele nao altera TODO o estado global, e sim só no escopo do field
        default:
            return state   
    }
}
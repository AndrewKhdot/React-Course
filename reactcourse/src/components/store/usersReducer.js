const defaultState = {
    usersMessages: []
  }

  export const usersReducer = (state = defaultState,  action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {...state, users: state.usersMessages.push(action.payLoad)}
      case 'UPDATE_USER':
        const user = state.usersMessages.find(item => item.name === action.payLoad.name)
        const index = state.usersMessages.indexOf(user)
        const newState = state.usersMessages
        newState[index] = action.payLoad
        return {...state, users: newState}
      case 'DELETE_USER':
        return {...state, activeUser: null}
      default:
        return state
    }
  }
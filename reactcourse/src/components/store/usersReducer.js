const defaultState = {
    usersMessages: []
  }

  export const usersReducer = (state = defaultState,  action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {...state, users: state.usersMessages.push(action.payLoad)}
 
      case 'DELETE_USER':
        return {...state, activeUser: null}
      default:
        return state
    }
  }
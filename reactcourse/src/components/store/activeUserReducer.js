const defaultState = {
    activeUser: null
  }

  export const activeUserReducer = (state = defaultState,  action) => {
    switch (action.type) {
      case 'ACTIVATE_USER':
        return {...state, activeUser: action.payLoad}
      case 'DEACTIVATE_USER':
        return {...state, activeUser: null}
      case 'UPDATE_ACTIVEUSER':
        return {...state, activeUser: action.payLoad}
      default:
        return state
    }
  }
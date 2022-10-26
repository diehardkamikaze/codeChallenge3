
export default function usersReducer(state, action) {
  switch (action.type) {
    case 'user/Search':
      return {...state, ...action.payload }
    default:
      return state;
  }
} 
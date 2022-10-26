
export const PAGES = {
}

export default function pageReducer(state, action) {
  if (action.type === 'page/change')
    return  { ...action.payload }
  return state;
} 
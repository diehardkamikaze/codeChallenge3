import './index.css'
import { useCallback } from 'react';
import { searchUserByName } from '../../api/userApi'
import { useStore } from "../../store/init";
import { throttle } from '../../utils';

export default function UserSearch() {

  const [, dispatch ] = useStore(); 

  const onUserSearch = useCallback(throttle((event) => {
    (async () => {
      let data = await searchUserByName(event.target.value);
      if (data.items)
        dispatch({type: 'user/Search', payload: { list: data.items,
        search: event.target.value, padding: 0
    }});
    })();
  }, 1000), []);

  return <>
      <p className="Search-text">Search</p>
      <input onInput={onUserSearch} type="text" className="Search-input" placeholder="user login" />
  </>
}
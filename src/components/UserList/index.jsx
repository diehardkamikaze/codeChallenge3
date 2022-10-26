import { useStore } from "../../store/init";
import './index.css'


export default function UserList() {

const [ { users: { padding, list, search}}, dispatch] = useStore(); 

return <div>
  {list.slice(padding, padding + 5).map(({avatar_url, login, id, text_matches}) => {
    return <div key={id} className="user-board">
      <img width="50" src={avatar_url} />
      <p className="login">
      {text_matches[0] ? login.split('').map((ch, i) => {
        let from = text_matches[0].matches[0].indices[0];
        if (from <= i && from + search.length > i)
          return <span className="marked">{ch}</span>
        return ch;
      }) : login}
      </p>
      <button onClick={() => dispatch({ type: 'page/change', payload: { address: '/user/repository/', localprops: { name: login}  }})}>View Repos</button>
    </div>
  })}
  </div>

}
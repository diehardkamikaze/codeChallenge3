import { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import left_arrow from '../../assets/left_arrow.svg';
import { getReposEndpoints, getUserByName } from '../../api/userApi';
import { useStore } from '../../store/init';

export default function UserRepos({name}) {
  
  const [ , dispatch] = useStore();
  const [ user, setUser ] = useState(null);
  const [ userRepos, setUserRepos ] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await getUserByName(name);
      setUser(result);
      result = await getReposEndpoints(name);
      setUserRepos(result);
    })();
  }, [name]);


  const onBackClick = () => {
    dispatch({ type: 'page/change', payload: { address: '', localprops: {}}});
  }
  
  return <div>
          <img onClick={onBackClick} width="50" src={left_arrow} />
          <h1>{name} Repositories</h1>
          {user &&
          (<> 
            <p>
              Repositories: {user?.public_repos}
            </p>
            <p>
              Followers: {user?.followers}
            </p>
            <p>
              Following: {user?.following}
            </p>
          </>)} 
          <Slider slides={userRepos} />
        </div>
}
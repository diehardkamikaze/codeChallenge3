import { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import { getReposEndpoints, getUserByName } from '../../api/userApi';

export default function UserRepos({name}) {
  
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
  
  return <div>
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
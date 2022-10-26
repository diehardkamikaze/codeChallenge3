import logo from './logo.svg';
import './App.css';
import UserRepos from  './ui/UserRepos';
import Main from './ui/Main';
import PageRouter from './components/PageRouter';
import { StoreProvider } from './store/init';


function App() {
  return (
    <div className="App">
      <StoreProvider>
        <PageRouter>
          <div address="">
            <Main />
          </div>
          <div address="/user/repository/">
            <UserRepos name="diehardkamikaze" />
          </div>
        </PageRouter>
      </StoreProvider>
    </div>
  );
}

export default App;

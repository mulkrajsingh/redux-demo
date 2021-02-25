import './App.css';
import { Provider } from 'react-redux';
import store from "./redux/store";

import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/itemContainer';
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <NewCakeContainer />
        <hr />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;

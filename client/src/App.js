import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import DataItem from "./components/DataItem";
import DataList from "./components/DataList";
import DataAdd from "./components/add/DataAdd";
import DetailProduct from "./components/detail/DetailProduct";
import history from './history'

import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/items'



const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)


function App() {
  return (
    <Provider store={store}>
    <Router history={history}>
      <div className="App">
        <Switch>
          
          <Route exact path="/" component={DataList} />
          <Route path="/DataAdd" component={DataAdd} />
          <Route path="/Navbar" component={Navbar} />
          <Route path="/DetailProduct" component={DetailProduct} />
          <Route path="/DataItem" component={DataItem} />

        </Switch>
        
      </div>
    </Router>
    </Provider>
  );
}

export default App;

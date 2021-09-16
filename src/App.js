import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Home from './pages/Home/Home';
import ListAdd from './pages/ListAdd/ListAdd';
import ListEdit from './pages/ListEdit/ListEdit';
import ListView from './pages/ListView/ListView';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/new" component={ListAdd}/>
          <Route path="/view/:id" component={ListView}/>
          <Route path="/edit/:id" component={ListEdit}/>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;

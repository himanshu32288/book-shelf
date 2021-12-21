import './App.css';
import Navbar from './components/style/Navbar';
import Bookitems from './components/Books/Bookitems';
import BooksCatagary from './components/Books/BooksCatagary';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import DisplayBook from './components/displaybook/DisplayBook';

function App() {
  let routes = (<Switch>
    <Route path="/catagory">
      <BooksCatagary />
    </Route>
    <Route exact path="/books/:type">
      <Bookitems />
    </Route>
    <Route exact path="/books">
      <Bookitems />
    </Route>
    <Route exact path="/books/:type/:bid">
      <DisplayBook />
    </Route>
    <Redirect path="/catagory">
      <BooksCatagary />
    </Redirect>
  </Switch>)
  return (
    <>
      <Router>
        <Navbar />
        {routes}
      </Router>
    </>
  );
}

export default App;

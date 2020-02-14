import React, { Suspense , Provider} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListCustomers from './components/ListCustomers';

import ReduxCounter from './components/ReduxCounter';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CustomerDetails from './components/hooks/CustomerDetails';
import { Grid } from '@material-ui/core';
import { routes } from './routes/routes';
import SideBar from './components/SideBar';
import ReducerDemoError from './components/hooks/ReducerDemoError';
import { AppContext } from './context/AppContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactPortalDemo from './components/ReactPortalDemo';
import ProtectedRoute from './routes/ProtectedRoute'

//import Search from './components/hooks/Search';

const Search = React.lazy(() => import('./components/hooks/Search'))

function App() {
  return (
    <AppContext.Provider value={{ appName: "The React App", userName: "Avinash" }}>
      <div className="App">
        <Router>
          <Grid container>
            <Grid item xs={12}>
              <header className="App-header">
              </header>
            </Grid>

            <Grid container>
              <Grid item xs={3}>
                <section>
                  <SideBar routes={routes} />
                  {/* <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/counter">Counter</Link>
                  </li>
                  <li>
                    <Link to="/redux">Redux Counter</Link>
                  </li>
                  <li>
                    <Link to="/search">Search</Link>
                  </li>
                  <li>
                    <Link to="/customers">Customers</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </nav> */}
                </section>
              </Grid>

              <Grid item xs={9}>
                <section>
                  <Route exact path="/" render={() => <Hello message="React Router" />} />
                  <Route path="/counter" component={Counter} />
                  <Route path="/redux" component={ReduxCounter} />
                  <Suspense fallback={<CircularProgress/>}>
                    <Route path="/search" component={Search} />
                  </Suspense>

                  <ProtectedRoute exact path="/customers" component={ListCustomers} />
                  <Route path="/customers/:id" component={CustomerDetails} />
                  <Route path="/register" component={Register} />
                  <Route path="/error" component={ReducerDemoError} />
                  <Route path="/portal" component={ReactPortalDemo} />
                </section>
              </Grid>
            </Grid>
          </Grid>

        </Router>
      </div>
    </AppContext.Provider>

  );
}

export default App;

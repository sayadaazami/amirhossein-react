import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Page3 from "./pages/Page3";
import PageBlog from "./pages/PageBlog";
import PageDashboard from "./pages/PageDashboard";
import RouteAdmin from "./components/RouteAdmin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/page1">Page 1</Link>
              </li>
              <li>
                <Link to="/page2?name=sayad">Page 2</Link>
              </li>
              <li>
                <Link to="/page3">Page 3</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <Page1 {...props} name="armin" />}
          />
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/page3" component={Page3} />
          <Route path="/blog" component={PageBlog} />
          <RouteAdmin path="/dashboard" component={PageDashboard} />
          <RouteAdmin path="/dashboard1" component={PageDashboard} />

          <Route render={() => "404"} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

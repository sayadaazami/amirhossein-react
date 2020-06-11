import React from "react";
import { Link, Redirect, NavLink } from "react-router-dom";

function Page2({ history, name, location }) {
  const params = new URLSearchParams(location.search);
  if (!params.get("name")) {
    return <Redirect to="/page1" />;

    // history.replace("/page1");
    // return null;
  }

  return (
    <section>
      <h1>Page 2</h1>

      <ul>
        <li>
          <Link to="/page1">page1</Link>
        </li>
        <li>
          <Link to="/page2">page2</Link>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink to="/page1" activeClassName="activeLink">
            page1
          </NavLink>
        </li>
        <li>
          <NavLink to="/page2" activeClassName="activeLink">
            page2
          </NavLink>
        </li>
      </ul>

      {/* <a
        href="/page1"
        onClick={(e) => {
          e.preventDefault();
          history.push(e.currentTarget.getAttribute("href"));
        }}
      >
        page 1
      </a> */}
    </section>
  );
}

export default Page2;

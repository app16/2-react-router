import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const dashboardClass = location.pathname === "/" ? "active" : "";
    const uploaddataClass = location.pathname.match(/^\/uploaddata/) ? "active" : "";
    const responseClass = location.pathname.match(/^\/response/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-default fixedtop2" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={uploaddataClass}>
                <Link to="dashboard" onClick={this.toggleCollapse.bind(this)}>Dashboard</Link>
              </li>
              <li class={responseClass}>
                <Link to="permissions" onClick={this.toggleCollapse.bind(this)}>Permissions</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

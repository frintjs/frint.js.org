import React from 'react'
import Link from "gatsby-link"

const sidebars = require('../../static/data/sidebar.json');


class SideBar extends React.Component {
  renderMenuItems(menuItems) {
    if (menuItems.length > 0) {
      return menuItems.map((menuItem, index) => (
        <li key={menuItem.id}>
          <Link to={menuItem.to} activeClassName="is-active">{menuItem.label}</Link>
        </li>
      ));
    }
    else return [];
  }

  renderSidebars(sidebars) {
    if (sidebars.length > 0) {
      return sidebars.map((sidebar, index) => {
        const renderedMenuItems = this.renderMenuItems(sidebar.menu_items);
        return (
          <div className="menu-block" key={sidebar.menu_label}>
            <p className="menu-label">
              {sidebar.menu_label}
            </p>
            <ul className="menu-list">
              { renderedMenuItems }
            </ul>
          </div>
        )
      });
    }
    else return [];
  }

  render() {
    const renderedSidebars = this.renderSidebars(sidebars);

    return (
      <div className="menu-container docs">
        <aside className="menu docs">
          { renderedSidebars }
        </aside>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="menu-container docs">
  //       <aside className="menu docs">
  //         <p className="menu-label">
  //
  //         </p>
  //
  //         <ul className="menu-list">
  //           <li>
  //             <Link to="/guides/hello-world" activeClassName="is-active">Hello World</Link>
  //           </li>
  //         </ul>
  //
  //         <p className="menu-label"></p>
  //
  //         <ul className="menu-list">
  //           <li><Link to="/guides/apps" activeClassName="is-active">Apps</Link></li>
  //           <li><Link to="/guides/providers" activeClassName="is-active">Providers</Link></li>
  //           <li><Link to="/guides/components" activeClassName="is-active">Components</Link></li>
  //           <li><Link to="/guides/observables" activeClassName="is-active">Observables</Link></li>
  //           <li><Link to="/guides/higher-order-components" activeClassName="is-active">Higher-Order Components</Link></li>
  //           <li><Link to="/guides/regions" activeClassName="is-active">Regions</Link></li>
  //         </ul>
  //
  //         <p className="menu-label">
  //
  //         </p>
  //
  //         <ul className="menu-list">
  //           <li>
  //             <Link to="/guides/state-management" activeClassName="is-active">State management</Link>
  //           </li>
  //         </ul>
  //
  //         <ul className="menu-list">
  //           <li><Link to="/guides/routing" activeClassName="is-active">Routing</Link></li>
  //         </ul>
  //
  //         <p className="menu-label">
  //
  //         </p>
  //
  //         <ul className="menu-list">
  //           <li><Link to="/guides/code-splitting" activeClassName="is-active">Code splitting</Link></li>
  //           <li><Link to="/guides/async-loading" activeClassName="is-active">Async loading</Link></li>
  //         </ul>
  //
  //         <p className="menu-label">
  //
  //         </p>
  //
  //         <ul className="menu-list">
  //           <li><Link to="/docs/packages/frint" activeClassName="is-active">frint</Link></li>
  //           <li><Link to="/docs/packages/frint-store" activeClassName="is-active">frint-store</Link></li>
  //           <li><Link to="/docs/packages/frint-data" activeClassName="is-active">frint-data</Link></li>
  //           <li><Link to="/docs/packages/frint-react" activeClassName="is-active">frint-react</Link></li>
  //           <li><Link to="/docs/packages/frint-react-server" activeClassName="is-active">frint-react-server</Link></li>
  //           <li><Link to="/docs/packages/frint-router" activeClassName="is-active">frint-router</Link></li>
  //           <li><Link to="/docs/packages/frint-router-react" activeClassName="is-active">frint-router-react</Link></li>
  //           <li><Link to="/docs/packages/frint-cli" activeClassName="is-active">frint-cli</Link></li>
  //         </ul>
  //
  //         <p className="menu-label">
  //
  //         </p>
  //
  //         <ul className="menu-list">
  //           <li><Link to="/docs/packages/frint-config" activeClassName="is-active">frint-config</Link></li>
  //           <li><Link to="/docs/packages/frint-test-utils" activeClassName="is-active">frint-test-utils</Link></li>
  //           <li><Link to="/docs/packages/frint-compat" activeClassName="is-active">frint-compat</Link></li>
  //         </ul>
  //
  //         <p className="menu-label">
  //
  //         </p>
  //
  //         <ul className="menu-list">
  //           <li><Link to="/docs/packages/frint-component-utils" activeClassName="is-active">frint-component-utils</Link></li>
  //           <li><Link to="/docs/packages/frint-component-handlers" activeClassName="is-active">frint-component-handlers</Link></li>
  //           <li><Link to="/docs/packages/frint-router-component-handlers" activeClassName="is-active">frint-router-component-handlers</Link></li>
  //         </ul>
  //
  //         <p className="menu-label">
  //
  //         </p>
  //
  //         <ul className="menu-list">
  //           <li><Link to="/docs/migration/v1" activeClassName="is-active">Migrating to v1.x</Link></li>
  //           <li><Link to="/docs/migration/v2" activeClassName="is-active">Migrating to v2.x</Link></li>
  //           <li><Link to="/docs/migration/v3" activeClassName="is-active">Migrating to v3.x</Link></li>
  //           <li><Link to="/docs/migration/v4" activeClassName="is-active">Migrating to v4.x</Link></li>
  //           <li><Link to="/docs/migration/v5" activeClassName="is-active">Migrating to v5.x</Link></li>
  //         </ul>
  //
  //         <p className="menu-label">
  //
  //         </p>
  //
  //         <ul className="menu-list">
  //           <li><Link to="/docs/faq" activeClassName="is-active">FAQ</Link></li>
  //           <li><Link to="/docs/changelog" activeClassName="is-active">Changelog</Link></li>
  //           <li><Link to="/docs/contributing" activeClassName="is-active">Contribution guide</Link></li>
  //           <li><Link to="/docs/contributing/maintainers" activeClassName="is-active">Maintainers guide</Link></li>
  //         </ul>
  //       </aside>
  //     </div>
  //   )
  // }
}

export default SideBar

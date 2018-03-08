import React from 'react';
import Link from "gatsby-link";

const sidebars = require('../../static/data/sidebar.json');


const SideBar = () => {
  const renderMenuItems = (menuItems) => {
    if (menuItems.length > 0) {
      return menuItems.map(menuItem => (
        <li key={menuItem.id}>
          <Link activeClassName="is-active" to={menuItem.to}>{menuItem.label}</Link>
        </li>
      ));
    }
    return [];
  };

  const renderSidebars = (sidebarsData) => {
    if (sidebarsData.length > 0) {
      return sidebarsData.map((sidebar) => {
        const renderedMenuItems = renderMenuItems(sidebar.menu_items);
        return (
          <div className="menu-block" key={sidebar.menu_label}>
            <p className="menu-label">
              {sidebar.menu_label}
            </p>
            <ul className="menu-list">
              { renderedMenuItems }
            </ul>
          </div>
        );
      });
    }
    return [];
  };

  const renderedSidebars = renderSidebars(sidebars);

  return (
    <div className="menu-container docs">
      <aside className="menu docs">
        { renderedSidebars }
      </aside>
    </div>
  );
};

export default SideBar;

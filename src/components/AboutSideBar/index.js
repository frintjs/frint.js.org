import React from 'react'

class AboutSideBar extends React.Component {
  render() {
    return (
      <div className="menu-container docs">
        <aside className="menu docs">
          <p className="menu-label">
            Links
          </p>

          <ul className="menu-list">
            <li><a href="https://github.com/frintjs/frint">GitHub</a></li>
            <li><a href="https://twitter.com/frintjs">Twitter</a></li>
            <li><a href="https://medium.com/frintjs">Medium</a></li>
          </ul>
        </aside>
      </div>
    )
  }
}

export default AboutSideBar
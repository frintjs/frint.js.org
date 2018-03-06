---
title: About
processTemplate: true
path: '/about1'
---

# History

FrintJS was originally built at [Travix International](https://travix.com) for building applications in a faster, modular and more scalable way.

## Contributors

<div class="columns is-multiline contributors">
  <% data.contributors.forEach(function (contributor) { %>
  <div class="column is-one-quarter">
    <div class="contributor">
      <a target="_blank" href="<%= contributor.html_url %>">
        <img alt="<%= contributor.name %>" src="<%= contributor.avatar_url %>" />

        <h4 class="no-permalink"><%= contributor.name %></h4>
      </a>
    </div>
  </div>
  <% }) %>
</div>

More on [GitHub](https://github.com/frintjs/frint/graphs/contributors).

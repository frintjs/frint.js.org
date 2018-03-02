const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const request = require('request');
const yaml = require('js-yaml');

const config = require('./config');

const ORG = config.org;
const REPO = config.repo;
const TOKEN = process.env.GITHUB_API_TOKEN;
const FILEPATH = path.join(__dirname, '/../data/contributors.yml');

const contributorsOptedIn = config.contributorsOptedIn;

function fetchContributors() {
  return new Promise(function (resolve, reject) {
    const url = 'https://api.github.com/repos/' + ORG + '/' + REPO + '/contributors';
    console.log('requesting: ' + url);

    request.get({
      headers: {
        'User-Agent': 'request'
      },
      json: true,
      url: url + '?token=' + TOKEN,
    }, function (error, response, body) {
      if (error) {
        return reject(error);
      }

      return resolve(body);
    });
  });
}

function fetchUser(username) {
  return new Promise(function (resolve, reject) {
    const url = 'https://api.github.com/users/' + username;
    console.log('reuqesting: ' + url);

    request.get({
      headers: {
        'User-Agent': 'request'
      },
      json: true,
      url: url + '?token=' + TOKEN,
    }, function (error, response, body) {
      if (error) {
        return reject(error);
      }

      return resolve(body);
    });
  });
}

fetchContributors()
  .then(function (contributors) {
    const userPromises = [];

    contributors
      .filter(function (contributor) {
        return contributorsOptedIn.indexOf(contributor.login) > -1;
      })
      .forEach(function (contributor) {
        const username = contributor.login;
        userPromises.push(
          fetchUser(username)
            .then(function (u) {
              return Object.assign({}, contributor, u);
            })
        );
      });

    return Promise.all(userPromises);
  })
  .then(function (users) {
    return users.map(function (u) {
      return _.pick(u, [
        'id',
        'login',
        'html_url',
        'contributions',
        'name',
        'avatar_url',
      ]);
    });
  })
  .then(function (users) {
    const yamlContent = yaml.safeDump(users);
    fs.writeFileSync(FILEPATH, yamlContent);

    console.log('file written at: ' + FILEPATH);
  })
  .catch(function (error) {
    console.log(error);
    console.log('Could not fetch contributors list');
  });

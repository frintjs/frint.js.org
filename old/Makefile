GITHUB_API_TOKEN := ""

##
# Site
site-fetch-contributors:
	GITHUB_API_TOKEN=$(GITHUB_API_TOKEN) node ./site/scripts/fetch-contributors.js

site-build:
	node ./site/scripts/build-content.js

	mkdir -p ./_site/css
	./node_modules/.bin/node-sass --include-path ./node_modules ./site/assets/css/main.scss ./_site/css/site.css

	mkdir -p ./_site/js
	cp -r ./site/assets/js/ ./_site/js/
	# ./node_modules/.bin/babel ./site/assets/js --out-dir ./_site/js

	cp -rf ./site/assets/img ./_site/img

site-watch:
	make site-build
	fswatch -or './site' | xargs -I{} make site-build

site-serve-only:
	echo "Starting server at http://localhost:6001"
	./node_modules/.bin/live-server --port=6001 ./_site/

site-serve:
	make site-build
	make site-serve-only

site-publish:
	rm -rf ./_site
	make site-build
	make site-publish-only

site-publish-only:
	rm -rf ./_site/.git

	cp -f CNAME ./_site/CNAME

	(cd ./_site && git init)
	(cd ./_site && git commit --allow-empty -m 'update site')
	(cd ./_site && git checkout -b gh-pages)
	(cd ./_site && touch .nojekyll)
	(cd ./_site && git add .)
	(cd ./_site && git commit -am 'update site')
	(cd ./_site && git push git@github.com:frintjs/frint.js.org gh-pages --force)

# Site

site-develop:
	node ./node_modules/gatsby/dist/bin/gatsby.js develop


site-build:
	node ./node_modules/gatsby/dist/bin/gatsby.js build

site-serve:
	node ./node_modules/gatsby/dist/bin/gatsby.js serve

site-publish:
	rm -rf ./public
	make site-build
	make site-publish-only

site-publish-only:
	rm -rf ./public/.git

	cp -f CNAME ./public/CNAME

	(cd ./public && git init)
	(cd ./public && git commit --allow-empty -m 'update site')
	(cd ./public && git checkout -b gh-pages)
	(cd ./public && touch .nojekyll)
	(cd ./public && git add .)
	(cd ./public && git commit -am 'update site')
	(cd ./public && git push git@github.com:frintjs/frint.js.org gh-pages --force)

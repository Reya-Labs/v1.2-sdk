install:
	yarn

install-ci:
	yarn --frozen-lockfile

eslint-check:
	yarn lint:check

prettier-check:
	yarn prettier:check

ts-check:
	yarn ts:check

test:
	yarn test

build:
	yarn build

build-release:
	rm -rf dist/
	yarn build-release
	chmod +x dist/cli.js

release:
	yarn release

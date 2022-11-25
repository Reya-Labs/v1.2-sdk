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
	yarn build-release

release:
	yarn release

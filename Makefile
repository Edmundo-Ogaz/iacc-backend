run:
	npm run dev

test:
	npm run test

loadtest:
	npm run loadtest

test-test:
	'node_modules/.bin/jest' 'src/test/unit/student.test.js' -t "removing student success"
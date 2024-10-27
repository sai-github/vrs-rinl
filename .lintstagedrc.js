const path = require('path');

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => `"${path.relative(process.cwd(), f)}"`)
		.join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
	`prettier --write ${filenames
		.map((f) => `"${path.relative(process.cwd(), f)}"`)
		.join(' ')}`;

module.exports = {
	'*.{js,jsx,ts,tsx}': (filenames) => [
		buildPrettierCommand(filenames),
		buildEslintCommand(filenames),
	],
	'*.{css,scss,md}': (filenames) =>
		`prettier --write ${filenames.map((f) => `"${f}"`).join(' ')}`,
};

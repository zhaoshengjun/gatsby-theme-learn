const fs = require("fs");
// 1. make sure data directory exists
exports.onPreBootstrap = ({ reporter }) => {
	const contentPath = "data";

	if (!fs.existsSync(contentPath)) {
		reporter.info("creating the ${contentPath} directory");
		fs.mkdirSync(contentPath);
	}
};
// 2. define the evnt type

// 3. define resolvers for customized field (slug)
// 4. query event data and create pages

#!/usr/bin/env node

const importLocal = require("import-local"); // import-local 需要自行安装

if (importLocal(__filename)) {
    require("npmlog").info("cli", "using local version of andre-run");
} else {
    require("../lib")(process.argv.slice(2));
}
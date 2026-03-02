#!/usr/bin/env node
process.argv.splice(2, 0, "test");
require("../lib/cli");
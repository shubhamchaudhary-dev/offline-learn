#!/usr/bin/env node
process.argv.splice(2, 0, "dashboard");
require("../lib/cli");
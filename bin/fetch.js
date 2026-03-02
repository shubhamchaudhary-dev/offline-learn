#!/usr/bin/env node

process.argv.splice(2, 0, "fetch");
require("../lib/cli");
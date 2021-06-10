const { unlinkSync, writeFileSync } = require("fs");
module.exports = function (opts) {
  opts.file = opts.file || "postcss.lock";
  writeFileSync(opts.file, "");
  return {
    postcssPlugin: "postcss-lockfile",
    Once() {
      unlinkSync(opts.file, "");
    },
  };
};

module.exports.postcss = true;

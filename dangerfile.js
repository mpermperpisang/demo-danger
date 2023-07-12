const { danger } = require("danger");

console.warn(`sample: ${danger.github.pr.title}`);

message(danger.github.pr.title);
warn(danger.github.pr.title);
fail(danger.github.pr.title);

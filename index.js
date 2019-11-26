const core = require("@actions/core");
const github = require("@actions/github");
const request = require("request");
const fs = require("fs");
const Octokit = require("@octokit/rest");
const auth = core.getInput("gh-token");
const octokit = new Octokit({auth});

try {
  const context = github.context.payload;
  const owner = context.repository.owner.name;
  const repo = context.repository.name;
  const pull_number = context.number;

  console.log("✔️");
  octokit.pulls.createReview({
    owner,
    repo,
    pull_number,
    body: "❤️"
  });

} catch (error) {
  core.setFailed(error.message);
}

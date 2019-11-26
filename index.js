const core = require("@actions/core");
const github = require("@actions/github");
const request = require("request");
const fs = require("fs");
const Octokit = require("@octokit/rest");
const auth = core.getInput("gh-token");
const octokit = new Octokit({ auth });

try {
  const payload = github.context.payload;
  console.log(payload);
  const owner = payload.repository.owner.id;
  const repo = payload.repository.name;
  const pull_number = payload.number;

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

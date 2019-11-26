const core = require("@actions/core");
const github = require("@actions/github");
const Octokit = require("@octokit/rest");
const auth = core.getInput("gh-token");
const octokit = new Octokit({ auth });

try {
  const payload = github.context.payload;
  const owner = payload.repository.owner.login;
  const repo = payload.repository.name;
  const pull_number = payload.number;

  octokit.pulls
    .createReview({
      owner,
      repo,
      pull_number,
      body: "❤️"
    })
    .then(() => {
      console.log("✔️");
    })
    .catch(error => {
      throw new Error(error);
    });
} catch (error) {
  console.log(auth);
  core.setFailed(error.message);
}

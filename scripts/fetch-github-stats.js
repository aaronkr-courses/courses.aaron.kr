const fs = require("fs");

const orgs = [
  "aaronkr-classroom",
  "ut-nodejs",
  "2023-aaronkr",
  "aaronkr-2026-2"
];

function formatNumber(num) {
  return num.toLocaleString("en-US");
}

async function fetchRepos() {
  let total = 0;

  for (const org of orgs) {
    const res = await fetch(`https://api.github.com/users/${org}`);

    if (!res.ok) {
      console.error(`Failed to fetch ${org}: ${res.status}`);
      continue;
    }

    const data = await res.json();
    total += data.public_repos || 0;
  }

  const output = {
    total_repos: total,
    total_repos_formatted: formatNumber(total),
    updated_at: new Date().toISOString()
  };

  fs.mkdirSync("_data", { recursive: true });
  fs.writeFileSync("_data/github.json", JSON.stringify(output, null, 2));

  console.log("Saved _data/github.json:", output);
}

fetchRepos();
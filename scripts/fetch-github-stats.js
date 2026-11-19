// Counts student repositories across the GitHub Classroom orgs → _data/github.json
// (homepage "Student Repositories" stat). Run by .github/workflows/deploy.yml.
//
// Auth: uses STATS_TOKEN if set, else GITHUB_TOKEN.
//   - Any token lifts the 60 req/hr unauthenticated limit. Shared Actions runner IPs
//     hit that limit constantly, which is what produced the "0" and "4,957" values in
//     Nov 2026: every (or some) org request came back 403 and the old script wrote the
//     partial sum anyway.
//   - Private repo counts (`total_private_repos`) are only returned to an org OWNER's
//     token. The built-in GITHUB_TOKEN can't see other orgs' private counts, so add a
//     classic PAT with the `read:org` scope as the repo secret STATS_TOKEN to include
//     them. Without it, private counts fall back to the last known value.
//
// Never goes backwards on failure: if an org request fails, that org's previous
// numbers are kept; if everything fails, the file is left untouched.
const fs = require("fs");

const OUT = "_data/github.json";
const orgs = [
  "aaronkr-classroom",
  "ut-nodejs",
  "2023-aaronkr",
  "aaronkr-2026-2"
];

const fmt = n => n.toLocaleString("en-US");

function readPrevious() {
  try { return JSON.parse(fs.readFileSync(OUT, "utf8")); } catch { return {}; }
}

async function main() {
  const prev = readPrevious();
  const prevOrgs = prev.orgs || {};
  const token = process.env.STATS_TOKEN || process.env.GITHUB_TOKEN || "";
  const headers = { "Accept": "application/vnd.github+json", "User-Agent": "course-stats" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const result = {};
  let ok = 0;
  for (const org of orgs) {
    try {
      const res = await fetch(`https://api.github.com/orgs/${org}`, { headers });
      if (!res.ok) throw new Error(`HTTP ${res.status} (rate limit remaining: ${res.headers.get("x-ratelimit-remaining")})`);
      const d = await res.json();
      const p = prevOrgs[org] || {};
      result[org] = {
        public: d.public_repos ?? p.public ?? 0,
        // null when this token can't see it (not an owner token) → keep last known
        private: typeof d.total_private_repos === "number" ? d.total_private_repos : (p.private ?? 0)
      };
      ok++;
    } catch (e) {
      console.error(`Failed to fetch ${org}: ${e.message} — keeping previous value`);
      if (prevOrgs[org]) result[org] = prevOrgs[org];
    }
  }

  if (ok === 0) {
    console.error("All org requests failed — leaving", OUT, "unchanged.");
    return;
  }

  const pub = Object.values(result).reduce((s, o) => s + (o.public || 0), 0);
  const priv = Object.values(result).reduce((s, o) => s + (o.private || 0), 0);
  const total = pub + priv;
  const output = {
    total_repos: total,
    total_repos_formatted: fmt(total),
    public_repos: pub,
    public_repos_formatted: fmt(pub),
    private_repos: priv,
    private_repos_formatted: fmt(priv),
    orgs: result,
    updated_at: new Date().toISOString()
  };

  fs.mkdirSync("_data", { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(output, null, 2) + "\n");
  console.log("Saved", OUT, output);
}

main().catch(e => { console.error(e); process.exitCode = 0; });

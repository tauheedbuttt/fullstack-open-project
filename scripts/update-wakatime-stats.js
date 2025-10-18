const fs = require("fs");
const https = require("https");

const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
const PROJECT_NAME = process.env.PROJECT_NAME || "project";

if (!WAKATIME_API_KEY) {
  console.error("Error: WAKATIME_API_KEY environment variable is required");
  process.exit(1);
}

function fetchWakaTimeStats() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "wakatime.com",
      path: `/api/v1/users/current/all_time_since_today?project=${encodeURIComponent(
        PROJECT_NAME
      )}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${WAKATIME_API_KEY}`,
      },
    };

    https
      .get(options, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          if (res.statusCode === 200) {
            resolve(JSON.parse(data));
          } else {
            reject(
              new Error(
                `API request failed with status ${res.statusCode}: ${data}`
              )
            );
          }
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

function updateReadme(totalTime, projectUrl) {
  const readmePath = "README.md";
  const badgeDataPath = "wakatime-badge.json";

  if (!fs.existsSync(readmePath)) {
    console.error("Error: README.md not found");
    process.exit(1);
  }

  let readme = fs.readFileSync(readmePath, "utf8");

  // Create badge data JSON for shields.io endpoint
  const badgeData = {
    schemaVersion: 1,
    label: PROJECT_NAME,
    message: totalTime,
    color: "blue",
  };

  // Write badge data to file
  fs.writeFileSync(badgeDataPath, JSON.stringify(badgeData, null, 2));
  console.log("Created/updated wakatime-badge.json");

  // GitHub raw URL for the badge data
  const githubRepo = process.env.GITHUB_REPOSITORY || "username/repo";
  const badgeJsonUrl = `https://raw.githubusercontent.com/${githubRepo}/main/wakatime-badge.json`;
  const encodedBadgeUrl = encodeURIComponent(badgeJsonUrl);

  // Create shields.io badge with clickable link
  const badge = `[![WakaTime](https://img.shields.io/endpoint?url=${encodedBadgeUrl})](${projectUrl})`;

  // Create the stats line
  const statsLine = `${badge}`;

  // Check if badge already exists in README (first line only)
  const lines = readme.split("\n");
  const badgeRegex = /\[\!\[WakaTime\]/;

  if (badgeRegex.test(lines[0])) {
    // Replace the first line
    lines[0] = statsLine;
    readme = lines.join("\n");
    console.log("Updated existing WakaTime badge in README.md");
  } else {
    // Add badge at the very top
    readme = `${statsLine}\n\n${readme}`;
    console.log("Added WakaTime badge to README.md");
  }

  fs.writeFileSync(readmePath, readme);
}

async function main() {
  try {
    console.log(`Fetching WakaTime stats for project: ${PROJECT_NAME}`);
    const response = await fetchWakaTimeStats();

    if (!response.data) {
      console.error("Error: Invalid API response");
      process.exit(1);
    }

    const { text, total_seconds, range } = response.data;

    console.log(`Total time: ${text}`);
    console.log(`Total seconds: ${total_seconds}`);
    console.log(`Date range: ${range.start_text} - ${range.end_text}`);

    // Generate project URL
    const projectUrl = `https://wakatime.com/@current/projects/${encodeURIComponent(
      PROJECT_NAME
    )}`;

    updateReadme(text, projectUrl);

    console.log("✓ README.md updated successfully");
    console.log("✓ wakatime-badge.json created successfully");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();

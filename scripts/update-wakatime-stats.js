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
        Authorization: `Basic ${WAKATIME_API_KEY}`,
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

  if (!fs.existsSync(readmePath)) {
    console.error("Error: README.md not found");
    process.exit(1);
  }

  let readme = fs.readFileSync(readmePath, "utf8");

  // Create static shields.io badge with encoded values
  const label = encodeURIComponent(PROJECT_NAME);
  const message = encodeURIComponent(totalTime);
  const color = "blue";

  // Create shields.io static badge with clickable link
  const badge = `[![WakaTime](https://img.shields.io/badge/${label}-${message}-${color})](${projectUrl})`;

  // Check if badge already exists in README (first line only)
  const lines = readme.split("\n");
  const badgeRegex = /\[\!\[WakaTime\]/;

  if (badgeRegex.test(lines[0])) {
    // Replace the first line
    lines[0] = badge;
    readme = lines.join("\n");
    console.log("Updated existing WakaTime badge in README.md");
  } else {
    // Add badge at the very top
    readme = `${badge}\n\n${readme}`;
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
    const projectUrl = `https://wakatime.com/@436e4a6b-ccd5-49ff-b80f-1e57d59d7ee3/projects/rzpbwqrxrj?start=2025-10-12&end=2025-10-18`;

    updateReadme(text, projectUrl);

    console.log("✓ README.md updated successfully");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();

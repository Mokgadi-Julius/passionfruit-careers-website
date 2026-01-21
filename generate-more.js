import fs from "fs";
import path from "path";

const GEMINI_API_KEY = "AIzaSyByfVH8zRDVp3v7cytBAbFrrxAs1FtODU4";

const outputDir = "./src/assets/generated";

async function generateImage(prompt, filename) {
  try {
    console.log(`\nGenerating: ${filename}...`);
    console.log(`Prompt: ${prompt.substring(0, 80)}...`);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            responseModalities: ["TEXT", "IMAGE"],
          },
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      console.error(`API Error: ${data.error.message}`);
      return false;
    }

    if (data.candidates && data.candidates[0]?.content?.parts) {
      for (const part of data.candidates[0].content.parts) {
        if (part.inlineData) {
          const imageData = part.inlineData.data;
          const buffer = Buffer.from(imageData, "base64");
          const filepath = path.join(outputDir, filename);
          fs.writeFileSync(filepath, buffer);
          console.log(`✓ Saved: ${filepath} (${(buffer.length / 1024).toFixed(1)} KB)`);
          return true;
        }
      }
    }

    console.log(`✗ No image in response`);
    return false;
  } catch (error) {
    console.error(`✗ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log("Generating additional unique images...\n");

  const images = [
    // Service - Employer Dashboard
    {
      prompt: "Generate a futuristic digital dashboard interface showing recruitment analytics. Multiple floating holographic screens displaying candidate profiles, match scores, pie charts, and hiring metrics. Dark background with yellow (#F4E04D) glowing UI elements and data visualizations. Clean tech aesthetic. 4K digital art.",
      filename: "service-dashboard.png",
    },
    // Service - Career Insights
    {
      prompt: "Generate a visualization of career growth and insights. A person's silhouette looking at a futuristic holographic career path with branching options, skill trees, and salary projections displayed as glowing yellow charts and graphs. Dark background with golden light effects. Modern tech aesthetic.",
      filename: "service-insights.png",
    },
    // Service - Global/Remote Jobs
    {
      prompt: "Generate a digital art piece showing a globe with glowing connection lines linking major cities. Job opportunity icons floating around the Earth. Yellow (#F4E04D) network lines on a dark space background with stars. Futuristic, clean design representing global remote work opportunities.",
      filename: "service-global.png",
    },
    // How it works - Get Hired / Success
    {
      prompt: "Generate an image of a happy Black South African professional celebrating getting a job offer. They're holding a tablet showing 'Congratulations! You're Hired!' with confetti effects. Modern office background. Warm celebratory lighting. Ultra realistic photography style.",
      filename: "success-hired.png",
    },
  ];

  for (const img of images) {
    await generateImage(img.prompt, img.filename);
    await new Promise(r => setTimeout(r, 5000));
  }

  console.log("\nDone!");
}

main().catch(console.error);

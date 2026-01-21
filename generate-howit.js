import fs from "fs";
import path from "path";

const GEMINI_API_KEY = "AIzaSyByfVH8zRDVp3v7cytBAbFrrxAs1FtODU4";

const outputDir = "./src/assets/generated";

async function generateImage(prompt, filename) {
  try {
    console.log(`\nGenerating: ${filename}...`);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
        }),
      }
    );

    const data = await response.json();
    if (data.candidates?.[0]?.content?.parts) {
      for (const part of data.candidates[0].content.parts) {
        if (part.inlineData) {
          const buffer = Buffer.from(part.inlineData.data, "base64");
          fs.writeFileSync(path.join(outputDir, filename), buffer);
          console.log(`✓ Saved: ${filename}`);
          return true;
        }
      }
    }
    console.log(`✗ Failed`);
    return false;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return false;
  }
}

async function main() {
  const images = [
    {
      prompt: "Generate a digital art image of a person uploading their resume to a futuristic glowing tablet. The resume document transforms into golden digital particles floating upward. Modern clean aesthetic with yellow (#F4E04D) glow effects on dark background. Tech recruitment theme.",
      filename: "step-upload.png",
    },
    {
      prompt: "Generate a digital art visualization of AI analyzing a candidate profile. Show a holographic brain/neural network processing data with floating skills badges, experience timelines, and match percentages. Yellow and gold glowing elements on dark background. Futuristic recruitment tech.",
      filename: "step-matching.png",
    },
    {
      prompt: "Generate an image showing automated job applications. Multiple job application forms with company logos flying through a digital portal. A friendly AI assistant robot is orchestrating the process. Yellow accent lights on dark tech background. Clean modern aesthetic.",
      filename: "step-apply.png",
    },
  ];

  for (const img of images) {
    await generateImage(img.prompt, img.filename);
    await new Promise(r => setTimeout(r, 5000));
  }
  console.log("\nDone!");
}

main();

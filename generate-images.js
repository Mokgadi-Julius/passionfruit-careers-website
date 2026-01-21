import fs from "fs";
import path from "path";

const GEMINI_API_KEY = "AIzaSyByfVH8zRDVp3v7cytBAbFrrxAs1FtODU4";

const outputDir = "./src/assets/generated";

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateImage(prompt, filename, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`\n[${attempt}/${retries}] Generating: ${filename}...`);
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

        // Check if it's a rate limit error and we should retry
        if (data.error.message.includes("quota") || data.error.message.includes("rate")) {
          const waitTime = 60000; // Wait 60 seconds
          console.log(`Rate limited. Waiting ${waitTime/1000}s before retry...`);
          await new Promise(r => setTimeout(r, waitTime));
          continue;
        }
        return false;
      }

      if (data.candidates && data.candidates[0]?.content?.parts) {
        for (const part of data.candidates[0].content.parts) {
          if (part.inlineData) {
            const imageData = part.inlineData.data;
            const mimeType = part.inlineData.mimeType || "image/png";
            const extension = mimeType.split("/")[1] || "png";
            const buffer = Buffer.from(imageData, "base64");
            const finalFilename = filename.replace(".png", `.${extension}`);
            const filepath = path.join(outputDir, finalFilename);
            fs.writeFileSync(filepath, buffer);
            console.log(`✓ Saved: ${filepath} (${(buffer.length / 1024).toFixed(1)} KB)`);
            return true;
          }
        }
      }

      console.log(`✗ No image in response for ${filename}`);
      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        console.log(`Text response: ${data.candidates[0].content.parts[0].text.substring(0, 200)}`);
      }
      return false;

    } catch (error) {
      console.error(`✗ Error (attempt ${attempt}): ${error.message}`);
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, 5000));
      }
    }
  }
  return false;
}

async function main() {
  console.log("=".repeat(60));
  console.log("PASSIONFRUIT CAREERS - AI Image Generation");
  console.log("Using Gemini 2.5 Flash Image (Nano Banana)");
  console.log("=".repeat(60));

  const images = [
    // Hero Images
    {
      prompt: "Generate a stunning professional photograph of diverse young South African professionals celebrating career success in a modern tech office. Include a Black African man, a white woman, and an Indian man. They look confident and happy, wearing smart casual clothing. Beautiful cinematic golden hour lighting through large glass windows. Modern minimalist office with stylish yellow accent chairs. Ultra realistic photography, 4K quality, shallow depth of field.",
      filename: "hero-team.png",
    },
    {
      prompt: "Generate an abstract futuristic digital art piece representing AI-powered recruitment technology. Show glowing golden neural network connections linking floating digital resume documents and professional profile silhouettes. Use a dark black background with vibrant yellow (#F4E04D) glowing light streams and particles. High-tech, clean, modern aesthetic. 4K digital art quality.",
      filename: "hero-abstract.png",
    },

    // About Section
    {
      prompt: "Generate a powerful professional photograph of two business people shaking hands, with futuristic holographic AI interface overlays showing '95% Match' compatibility score and data visualization graphics floating around them. One person is a Black South African professional in a suit. Yellow and gold digital hologram elements on a dark corporate background. Futuristic yet professional style. Ultra realistic.",
      filename: "about-connection.png",
    },

    // Service Images
    {
      prompt: "Generate a futuristic digital art visualization of a glowing resume document being scanned and analyzed by artificial intelligence. The resume paper transforms into golden data particles and floating skill tags rising upward. Dark black background with bright yellow (#F4E04D) glow effects and light rays. Clean, modern, tech aesthetic. 4K digital art.",
      filename: "service-resume.png",
    },
    {
      prompt: "Generate digital art showing AI job matching concept: two professional silhouette profiles facing each other, connected by flowing golden data streams with a glowing '95%' match percentage floating between them. Futuristic dark background with yellow accent lights and particles. Clean minimalist tech design.",
      filename: "service-matching.png",
    },
    {
      prompt: "Generate an image of a friendly modern AI robot assistant helping with job applications. Show multiple floating job posting cards with company icons flying toward a happy job candidate. The robot has a sleek design with yellow accent lights. Dark futuristic tech background with glowing elements. Clean modern aesthetic.",
      filename: "service-autoapply.png",
    },

    // Testimonial Profile Images - Diverse South African professionals
    {
      prompt: "Generate a professional LinkedIn-style headshot portrait photograph of Thabo, a young Black South African male software developer in his late 20s. He has a friendly genuine smile, short neat hair, wearing a navy blue smart casual button-up shirt. Soft professional studio lighting with a clean neutral gray background. Ultra realistic, high quality portrait photography style.",
      filename: "testimonial-thabo.png",
    },
    {
      prompt: "Generate a professional LinkedIn-style headshot portrait photograph of Sarah, a white South African woman in her early 30s who works as a marketing manager. She has a confident warm smile, shoulder-length blonde hair, wearing an elegant professional blouse. Soft flattering studio lighting with a clean neutral background. Ultra realistic, high quality portrait photography.",
      filename: "testimonial-sarah.png",
    },
    {
      prompt: "Generate a professional LinkedIn-style headshot portrait photograph of Sipho, a distinguished Black South African male HR Director in his mid 40s. He has a professional and approachable expression, short hair with touches of gray, wearing a dark formal suit with tie. Corporate studio lighting with a clean neutral background. Ultra realistic executive portrait style.",
      filename: "testimonial-sipho.png",
    },
    {
      prompt: "Generate a professional LinkedIn-style headshot portrait photograph of Precious, a young Black South African woman who works as a data analyst in her mid 20s. She has a warm friendly smile, beautiful natural hair styled professionally, wearing modern professional attire. Soft flattering studio lighting with a clean neutral background. Ultra realistic portrait photography.",
      filename: "testimonial-precious.png",
    },

    // Additional Images
    {
      prompt: "Generate a photograph of a modern tech company office interior with a diverse team of professionals collaborating around large screens displaying recruitment analytics dashboards and charts. The office has natural light streaming in, green plants, and stylish yellow accent furniture pieces. South African tech startup atmosphere. Warm, inviting, professional setting. Ultra realistic interior photography.",
      filename: "office-team.png",
    },
    {
      prompt: "Generate a stunning aerial photograph of Johannesburg city skyline at golden hour sunset, with a futuristic holographic digital overlay showing glowing job connection network lines linking between the skyscrapers. Beautiful yellow and orange warm sunset tones blending with the golden hour light. Digital art meets cinematic photography style.",
      filename: "johannesburg-future.png",
    },
  ];

  let successCount = 0;

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    console.log(`\n--- Image ${i + 1}/${images.length} ---`);
    const success = await generateImage(img.prompt, img.filename);
    if (success) successCount++;

    // Delay between requests to avoid rate limiting
    if (i < images.length - 1) {
      console.log("Waiting 5 seconds before next image...");
      await new Promise(r => setTimeout(r, 5000));
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log(`Generation complete! ${successCount}/${images.length} images created.`);
  console.log(`Images saved to: ${path.resolve(outputDir)}`);
  console.log("=".repeat(60));
}

main().catch(console.error);

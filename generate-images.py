#!/usr/bin/env python3
"""
Generate images for Passionfruit Careers website using Gemini 2.5 Flash Image model (Nano Banana)
"""

import os
import base64
from google import genai
from google.genai import types

# Initialize client with API key
client = genai.Client(api_key="AIzaSyByfVH8zRDVp3v7cytBAbFrrxAs1FtODU4")

# Output directory
OUTPUT_DIR = "src/assets/pages"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Image prompts for each page
image_prompts = {
    # About Page
    "about-hero": "Modern tech startup office in Cape Town, South Africa with Table Mountain visible through floor-to-ceiling windows. Diverse team of young professionals collaborating around a large digital screen showing job matching analytics. Warm natural lighting, contemporary furniture, plants. Professional corporate photography style, 16:9 aspect ratio.",

    "about-founder": "Professional headshot portrait of a confident young Black South African female tech entrepreneur, age 30s, wearing smart casual business attire, warm smile, modern office background with yellow accent wall. Studio lighting, sharp focus, corporate headshot style.",

    "about-values": "Abstract 3D illustration representing innovation and connection - golden yellow glowing neural network nodes connected by light beams, floating geometric shapes, dark background with subtle gradient. Modern tech aesthetic, clean minimalist design.",

    # Careers Page
    "careers-office": "Vibrant modern open-plan tech office workspace in Cape Town. Standing desks, collaborative spaces, coffee bar area, exposed brick walls with street art, employees working on laptops. Natural light, industrial-chic design with yellow accent colors. Lifestyle photography.",

    "careers-culture": "Diverse group of young professionals having fun at a team building event outdoors in Cape Town. Table Mountain in background, casual dress, genuine laughter and connection. Bright sunny day, candid photography style.",

    # Blog Page
    "blog-ai-future": "Futuristic abstract visualization of AI and machine learning - digital brain made of golden yellow light particles, flowing data streams, circuit patterns. Dark blue and black background with yellow accents. Modern tech illustration style.",

    "blog-interview": "Professional setting of a virtual job interview - person on laptop screen talking to interviewer, modern home office setup, clean desk with notebook and coffee. Warm lighting, professional but approachable atmosphere.",

    "blog-resume": "Creative flat-lay of job application materials - modern resume design on tablet, laptop showing portfolio, coffee cup, succulent plant, yellow highlighter, on marble desk. Top-down view, lifestyle photography.",

    # Features Page
    "features-ai-matching": "Abstract 3D visualization of AI job matching algorithm - two glowing profile silhouettes connected by golden yellow light beams and data particles, neural network patterns in background. Dark theme with vibrant yellow accents. Futuristic tech illustration.",

    "features-autoapply": "Sleek futuristic robot hand pressing a glowing 'Apply' button on a holographic job listing interface. Yellow and gold color scheme, dark background, sci-fi aesthetic. Clean modern 3D render.",

    "features-analytics": "Modern data analytics dashboard floating in 3D space - charts, graphs, metrics showing career insights. Golden yellow highlights on dark background, holographic style. Professional tech visualization.",

    # Community Page
    "community-event": "Tech meetup event in Cape Town - diverse group of professionals networking at rooftop venue with city skyline view. Evening atmosphere with string lights, casual professional dress, engaged conversations. Event photography style.",

    "community-online": "Abstract illustration of online community - connected avatars and profile icons forming a global network, chat bubbles, hearts and stars, golden yellow accents on dark gradient background. Modern flat design with 3D elements.",

    # Integrations Page
    "integrations-hero": "Abstract 3D illustration of connected apps and platforms - floating app icons and logos connected by glowing golden lines and nodes, API symbols, data flowing between systems. Dark tech background with yellow accents. Modern isometric style.",

    # Press Page
    "press-hero": "Professional press room setup - podium with microphones, cameras, journalists, large screen showing Passionfruit logo on yellow background. Corporate event photography, sharp lighting.",

    # Help Center
    "help-hero": "Friendly customer support concept - 3D illustration of helpful robot assistant with headset, floating question marks and chat bubbles, warm yellow glow. Approachable and modern design, clean background."
}

def generate_image(prompt: str, filename: str) -> bool:
    """Generate an image using Gemini and save it."""
    try:
        print(f"\n🎨 Generating: {filename}")
        print(f"   Prompt: {prompt[:80]}...")

        response = client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=[prompt],
            config=types.GenerateContentConfig(
                response_modalities=['TEXT', 'IMAGE']
            )
        )

        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                # Save the image
                filepath = os.path.join(OUTPUT_DIR, f"{filename}.png")
                image_data = part.inline_data.data

                with open(filepath, "wb") as f:
                    f.write(image_data)

                print(f"   ✅ Saved: {filepath}")
                return True
            elif part.text is not None:
                print(f"   📝 Response: {part.text[:100]}...")

        print(f"   ⚠️ No image generated for {filename}")
        return False

    except Exception as e:
        print(f"   ❌ Error: {str(e)}")
        return False

def main():
    print("=" * 60)
    print("🍌 Nano Banana Image Generator for Passionfruit Careers")
    print("=" * 60)
    print(f"\nGenerating {len(image_prompts)} images...")

    success_count = 0
    for filename, prompt in image_prompts.items():
        if generate_image(prompt, filename):
            success_count += 1

    print("\n" + "=" * 60)
    print(f"✨ Complete! Generated {success_count}/{len(image_prompts)} images")
    print(f"📁 Images saved to: {OUTPUT_DIR}/")
    print("=" * 60)

if __name__ == "__main__":
    main()

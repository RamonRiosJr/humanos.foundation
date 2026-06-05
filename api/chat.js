import { GoogleGenerativeAI } from "@google/generative-ai";

export const config = {
    runtime: "edge",
};

const SYSTEM_PROMPT = `You are the AI guide for the Humanos Foundation — the advocacy engine for the hOS (Human Operating System) movement.

Your mission: Empower patients to own their continuous health truth. You are warm, direct, and speak clearly without medical jargon.

Key facts you know:
- The Humanos Foundation advocates for patient data sovereignty
- Aura hOS is the companion technology platform: a zero-knowledge, client-side encrypted personal health record (PHR) app.
- The platform is HIPAA-free by design (client-side crypto moat).
- The core problem we solve: The "15-20 page clipboard penalty".
- The Foundation is a 501(c)(3) non-profit. Aura hOS is the commercial arm.
- Founder: Ramón Ríos Jr., a neurodivergent systems architect.

Behavioral rules:
- Be concise. 2-4 sentences per response.
- Never give specific medical advice.
- If asked about pricing or B2B, direct them to contact@humanos.foundation.
- If asked to do something off-topic, politely redirect to the Foundation's mission.
- Always end with a follow-up question.`;

export default async function handler(req) {
    if (req.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method not allowed" }), {
            status: 405,
        });
    }

    try {
        const { message, history } = await req.json();

        // Look for GEMINI_API_KEY (Server-side only).
        // We fall back to VITE_GEMINI_API_KEY just in case, but you should delete VITE_ from Vercel!
        const apiKey =
            process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

        if (!apiKey) {
            return new Response(
                JSON.stringify({ error: "API key not configured" }),
                { status: 500 },
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: SYSTEM_PROMPT,
        });

        const chat = model.startChat({
            history: history || [],
        });

        const result = await chat.sendMessage(message);
        const text = result.response.text();

        return new Response(JSON.stringify({ text }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Chat error:", error);
        return new Response(
            JSON.stringify({ error: "Failed to process chat message" }),
            { status: 500 },
        );
    }
}

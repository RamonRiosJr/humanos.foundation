import { useState, useCallback } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

export function useFoundationChat() {
    const [messages, setMessages] = useState([
        {
            role: "model",
            text: "Hello. I'm the AI guide for the Humanos Foundation. I'm here to answer questions about patient data sovereignty, the Aura hOS platform, and how we're fighting the healthcare clipboard crisis. How can I help you today?",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = useCallback(
        async (userText) => {
            if (!userText.trim() || isLoading) return;

            setError(null);
            const userMessage = { role: "user", text: userText };

            setMessages((prev) => [
                ...prev,
                userMessage,
                { role: "model", text: "" },
            ]);
            setIsLoading(true);

            try {
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                if (!apiKey) {
                    throw new Error("API key not configured");
                }

                const genAI = new GoogleGenerativeAI(apiKey);
                const model = genAI.getGenerativeModel({
                    model: "gemini-1.5-flash",
                    systemInstruction: SYSTEM_PROMPT,
                });

                const historyForServer = messages
                    .filter((m) => m.text !== "")
                    .slice(1)
                    .map((m) => ({
                        role: m.role,
                        parts: [{ text: m.text }],
                    }));

                const chat = model.startChat({
                    history: historyForServer,
                });

                const result = await chat.sendMessage(userText);
                const text = result.response.text();

                setMessages((prev) => {
                    const updated = [...prev];
                    const last = updated[updated.length - 1];
                    if (last && last.role === "model") {
                        updated[updated.length - 1] = {
                            ...last,
                            text: text,
                        };
                    }
                    return updated;
                });
            } catch (e) {
                console.error("Chat error:", e);
                const errMsg = "Connection error. Please try again.";
                setError(errMsg);
                setMessages((prev) => {
                    const updated = [...prev];
                    const last = updated[updated.length - 1];
                    if (last && last.role === "model" && last.text === "") {
                        updated[updated.length - 1] = { ...last, text: errMsg };
                    }
                    return updated;
                });
            } finally {
                setIsLoading(false);
            }
        },
        [isLoading, messages],
    );

    return { messages, isLoading, error, sendMessage };
}

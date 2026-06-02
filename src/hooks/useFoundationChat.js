import { useState, useRef, useCallback } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `You are the AI guide for the Humanos Foundation — the advocacy engine for the hOS (Human Operating System) movement.

Your mission: Empower patients to own their continuous health truth. You are warm, direct, and speak clearly without medical jargon.

Key facts you know:
- The Humanos Foundation advocates for patient data sovereignty — meaning patients own their health data, not hospitals or insurance companies.
- Aura hOS is the companion technology platform: a zero-knowledge, client-side encrypted personal health record (PHR) app.
- The platform is HIPAA-free by design (client-side crypto moat), which means no Business Associate Agreements are needed.
- The core problem we solve: The "15-20 page clipboard penalty" — the repetitive paperwork that paralyzes patients (especially neurodivergent ones) at every clinic visit.
- The Foundation is a 501(c)(3) non-profit. Aura hOS is the commercial arm.
- Founder: Ramón Ríos Jr., a neurodivergent systems architect with lived experience navigating broken health systems.
- The movement focuses on health equity, especially for underserved and neurodivergent communities.

Behavioral rules:
- Be concise. 2-4 sentences per response unless the user asks for more detail.
- Never give specific medical advice. Always recommend consulting a qualified healthcare provider.
- If asked about pricing or B2B, direct them to contact@humanos.foundation.
- If asked to do something off-topic, politely redirect to the Foundation's mission.
- Always end with a follow-up question to keep the conversation flowing.`;

export function useFoundationChat() {
    const [messages, setMessages] = useState([
        {
            role: "model",
            text: "Hello. I'm the AI guide for the Humanos Foundation. I'm here to answer questions about patient data sovereignty, the Aura hOS platform, and how we're fighting the healthcare clipboard crisis. How can I help you today?",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const chatRef = useRef(null);

    const initChat = useCallback(() => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!apiKey) {
            setError("AI is offline. API key not configured.");
            return null;
        }
        if (chatRef.current) return chatRef.current;

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: SYSTEM_PROMPT,
        });

        chatRef.current = model.startChat({ history: [] });
        return chatRef.current;
    }, []);

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
                const chat = initChat();
                if (!chat) {
                    setIsLoading(false);
                    return;
                }

                const result = await chat.sendMessageStream(userText);

                for await (const chunk of result.stream) {
                    const chunkText = chunk.text();
                    setMessages((prev) => {
                        const updated = [...prev];
                        const last = updated[updated.length - 1];
                        if (last && last.role === "model") {
                            updated[updated.length - 1] = {
                                ...last,
                                text: last.text + chunkText,
                            };
                        }
                        return updated;
                    });
                }
            } catch (e) {
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
        [isLoading, initChat],
    );

    return { messages, isLoading, error, sendMessage };
}

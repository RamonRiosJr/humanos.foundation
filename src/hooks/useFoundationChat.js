import { useState, useCallback, useRef, useEffect } from "react";

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

            // Add user message, and a blank model message that will be filled
            setMessages((prev) => [
                ...prev,
                userMessage,
                { role: "model", text: "" },
            ]);
            setIsLoading(true);

            try {
                // Format history for the server proxy. Ignore the very first welcome message and the blank loading one
                const historyForServer = messages
                    .filter((m) => m.text !== "") // remove empty
                    .slice(1) // skip the static welcome message
                    .map((m) => ({
                        role: m.role,
                        parts: [{ text: m.text }],
                    }));

                const response = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        message: userText,
                        history: historyForServer,
                    }),
                });

                if (!response.ok) {
                    throw new Error("Failed to reach AI server");
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                // Update the last blank message with the response
                setMessages((prev) => {
                    const updated = [...prev];
                    const last = updated[updated.length - 1];
                    if (last && last.role === "model") {
                        updated[updated.length - 1] = {
                            ...last,
                            text: data.text,
                        };
                    }
                    return updated;
                });
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
        [isLoading, messages],
    );

    return { messages, isLoading, error, sendMessage };
}

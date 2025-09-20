

export async function getLLMText({
  prompt = "hola",
  model = "Qwen/Qwen3-30B-A3B-Instruct-2507",
  messages = null
} = {}) {
  const body = {
    model,
    messages: messages && Array.isArray(messages)
      ? messages
      : [
          {
            role: "user",
            content: prompt,
          },
        ]
  };
  const response = await fetch("http://localhost:1234/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error("Error en la respuesta del LLM local");
  const data = await response.json();
  return data.choices[0].message.content;
}

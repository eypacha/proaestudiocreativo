

export async function getLLMText({
  prompt = "hola",
  model = "Qwen/Qwen3-30B-A3B-Instruct-2507"
} = {}) {
  const response = await fetch("http://localhost:1234/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });
  if (!response.ok) throw new Error("Error en la respuesta del LLM local");
  const data = await response.json();
  return data.choices[0].message.content;
}

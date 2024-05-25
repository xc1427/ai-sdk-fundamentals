"use server";

import { generateText } from "ai";
import { openai } from "@/lib/utils";

export const generateTextAction = async () => {
  const result = await generateText({
    model: openai("gpt-4o"),
    temperature: 1,
    prompt: "Tell me a joke.",
  });
  return result.text;
};

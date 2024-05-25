import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { createOpenAI } from "@ai-sdk/openai";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const openai = createOpenAI({ 
  // compatibility: 'strict', // strict for OpenAI API
  baseURL: 'https://api.gptsapi.net/v1',
})
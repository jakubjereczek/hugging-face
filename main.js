
// @xenova/transformers is a JavaScript library that provides access to Hugging Face models
// Works in Node.js and web browsers
// Automatically downloads and caches models
// Supports NLP tasks, like: sentiment analysis, text classification, text generation, question answering, translation.

// e.g. 
import { pipeline } from '@xenova/transformers';

async function main() {
  const pipe = await pipeline('text-generation');
  const result = await pipe("I used to,");
  console.log(result);
}

main();
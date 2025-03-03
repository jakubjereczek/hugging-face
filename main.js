
// @xenova/transformers is a JavaScript library that provides access to Hugging Face models
// Works in Node.js and web browsers
// Automatically downloads and caches models
// Supports NLP tasks, like: sentiment analysis, text classification, text generation, question answering, translation.

// e.g. 
import { pipeline } from '@xenova/transformers';

async function main() {
  // gpt-2
  const generator = await pipeline('text-generation', 'Xenova/gpt2');
  const response = await generator("Hello, how can I help you?");
  console.log(response[0].generated_text);

  // sentiment analysis
  const sentiment = await pipeline('sentiment-analysis');
  console.log(await sentiment("This product is amazing!"));
  console.log(response[0].generated_text);
}

main();
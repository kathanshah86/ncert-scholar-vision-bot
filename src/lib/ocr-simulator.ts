
import { createWorker } from 'tesseract.js';

// Create a worker instance for OCR processing
const createOCRWorker = async () => {
  const worker = await createWorker('eng');
  await worker.setParameters({
    tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?! \n',
  });
  return worker;
};

// Function to extract text from an image using Tesseract.js
export async function extractTextFromImage(image: File): Promise<string> {
  try {
    // Create a URL for the uploaded image
    const imageUrl = URL.createObjectURL(image);
    
    // Initialize OCR worker
    const worker = await createOCRWorker();
    
    // Perform OCR on the image
    const result = await worker.recognize(imageUrl);
    
    // Clean up
    URL.revokeObjectURL(imageUrl);
    await worker.terminate();
    
    // Process and clean the extracted text
    const text = result.data.text.trim();
    
    if (!text) {
      throw new Error('No text could be extracted from the image.');
    }
    
    return text;
  } catch (error) {
    console.error('Error during OCR processing:', error);
    throw new Error('Failed to process the image. Please try again with a clearer image.');
  }
}

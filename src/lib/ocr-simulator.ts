
import { createWorker } from 'tesseract.js';

// Create a worker instance for OCR processing
const createOCRWorker = async () => {
  const worker = await createWorker('eng');
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
    
    // Return the extracted text
    return result.data.text || "No text could be extracted from the image. Please try again with a clearer image.";
  } catch (error) {
    console.error('Error during OCR processing:', error);
    throw new Error('Failed to process the image. Please try again.');
  }
}


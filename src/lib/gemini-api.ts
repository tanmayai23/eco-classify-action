// ewasteClassifier.ts

import { GoogleGenerativeAI } from '@google/generative-ai';

// Load your API key from environment variable
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

// Initialize the Gemini client
const genAI = new GoogleGenerativeAI(API_KEY);

// Model name for fast image generation
const MODEL_NAME = 'gemini-1.5-flash';

// Max file size in bytes (4MB)
const MAX_FILE_SIZE = 4 * 1024 * 1024;

// Supported image types
const SUPPORTED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/bmp'
];

// Validate the uploaded image file
export const validateImageFile = (file: File): { valid: boolean; error?: string } => {
  if (!file) return { valid: false, error: 'No file provided' };

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds the maximum limit of ${MAX_FILE_SIZE / (1024 * 1024)}MB`
    };
  }

  if (!SUPPORTED_MIME_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: `Unsupported file type. Please upload: ${SUPPORTED_MIME_TYPES.join(', ')}`
    };
  }

  return { valid: true };
};

// Convert file to base64
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const validation = validateImageFile(file);
    if (!validation.valid) return reject(new Error(validation.error));

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      } else {
        reject(new Error('Failed to convert file to base64'));
      }
    };
    reader.onerror = reject;
  });
};

// Classify e-waste image using Gemini
export const classifyEwasteImage = async (
  imageBase64: string,
  mimeType: string
): Promise<
  | {
      success: true;
      data: any;
    }
  | {
      success: false;
      error: string;
    }
> => {
  try {
    if (!API_KEY) {
      throw new Error('Gemini API key is not configured. Please set VITE_GEMINI_API_KEY.');
    }

    if (!imageBase64 || !mimeType) {
      throw new Error('Image data or MIME type is missing.');
    }

    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const prompt = `Analyze this image and classify what type of electronic waste (e-waste) it is.

Return a JSON object with the following fields:
{
  "primary": {
    "category": "Category name",
    "confidence": 95,
    "image": "📱",
    "description": "Brief description of the item"
  },
  "alternatives": [
    { "category": "Alternative 1", "confidence": 80 },
    { "category": "Alternative 2", "confidence": 65 }
  ],
  "recycling": {
    "recommendations": "Specific recycling recommendations",
    "environmental_impact": "Brief description of environmental impact"
  }
}

Only return the JSON response.`;

    const result = await model.generateContent([
      { text: prompt },
      {
        inlineData: {
          data: imageBase64,
          mimeType
        }
      }
    ]);

    const response = await result.response;
    const text = await response.text();

    const jsonMatch =
      text.match(/```json\s*([\s\S]*?)\s*```/) ||
      text.match(/```([\s\S]*?)```/) ||
      [null, text];

    const jsonStr = jsonMatch[1].trim();
    let parsedResult = JSON.parse(jsonStr);

    // Fill defaults if missing
    parsedResult.primary ??= {
      category: 'Unknown Electronic Device',
      confidence: 50,
      image: '🔌',
      description: 'Could not properly identify this device.'
    };

    parsedResult.alternatives ??= [];

    parsedResult.recycling ??= {
      recommendations: 'Please take this device to a certified e-waste recycling center.',
      environmental_impact:
        'Improper disposal can lead to toxic materials leaching into soil and water.'
    };

    return { success: true, data: parsedResult };
  } catch (error) {
    console.error('Gemini classification error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

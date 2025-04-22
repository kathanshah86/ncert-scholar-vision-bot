
// Simulated NCERT dataset for the chatbot
export type NCERTTopic = {
  subject: string;
  chapter: string;
  topic: string;
  content: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
};

// A simplified dataset with some NCERT content
export const ncertDataset: NCERTTopic[] = [
  {
    subject: "Science",
    chapter: "Cells",
    topic: "Cell Structure",
    content: "A cell is the smallest unit of life. All living organisms are made up of cells. Cells contain organelles like nucleus, mitochondria, endoplasmic reticulum, etc.",
    questions: [
      {
        question: "What is a cell?",
        answer: "A cell is the basic structural and functional unit of all living organisms. It is the smallest unit of life."
      },
      {
        question: "What are organelles?",
        answer: "Organelles are specialized structures within a cell that perform specific functions. Examples include the nucleus, mitochondria, endoplasmic reticulum, and Golgi apparatus."
      },
      {
        question: "What is the function of mitochondria?",
        answer: "Mitochondria are known as the powerhouse of the cell. They generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
      }
    ]
  },
  {
    subject: "Mathematics",
    chapter: "Algebra",
    topic: "Linear Equations",
    content: "Linear equations are equations of the form ax + b = c, where a, b, and c are constants. They represent straight lines when graphed.",
    questions: [
      {
        question: "What is a linear equation?",
        answer: "A linear equation is an equation where each term is either a constant or the product of a constant and a single variable raised to the power of 1. The standard form is ax + b = c."
      },
      {
        question: "How do you solve linear equations?",
        answer: "To solve linear equations, you need to isolate the variable by performing the same operations on both sides of the equation. This typically involves addition, subtraction, multiplication, and division."
      }
    ]
  },
  {
    subject: "History",
    chapter: "Ancient India",
    topic: "Indus Valley Civilization",
    content: "The Indus Valley Civilization was one of the world's oldest urban civilizations, spanning from northeast Afghanistan to Pakistan and northwest India.",
    questions: [
      {
        question: "When did the Indus Valley Civilization exist?",
        answer: "The Indus Valley Civilization existed from approximately 3300 BCE to 1300 BCE, with its mature period lasting from 2600 BCE to 1900 BCE."
      },
      {
        question: "What are some notable features of the Indus Valley Civilization?",
        answer: "Notable features include advanced urban planning, sophisticated drainage systems, standardized weights and measures, and a writing system that has not yet been fully deciphered."
      }
    ]
  },
  {
    subject: "Geography",
    chapter: "Physical Geography of India",
    topic: "Himalayan Mountains",
    content: "The Himalayas form the northern boundary of India. They are the world's highest mountain range and home to Mount Everest.",
    questions: [
      {
        question: "How were the Himalayas formed?",
        answer: "The Himalayas were formed by the collision of the Indian and Eurasian tectonic plates. This collision began about 50 million years ago and continues today, causing the Himalayas to rise by about 5 mm per year."
      },
      {
        question: "What rivers originate from the Himalayas?",
        answer: "Many major rivers originate in the Himalayas, including the Ganges, Brahmaputra, Yamuna, and Indus. These rivers are vital for the agriculture and economy of South Asia."
      }
    ]
  },
  {
    subject: "Chemistry",
    chapter: "Periodic Table",
    topic: "Elements and Their Properties",
    content: "The periodic table organizes elements based on their atomic number, electron configuration, and chemical properties.",
    questions: [
      {
        question: "Who created the periodic table?",
        answer: "The modern periodic table was developed by Dmitri Mendeleev in 1869. He arranged elements in order of increasing atomic weight and grouped elements with similar properties."
      },
      {
        question: "What are groups and periods in the periodic table?",
        answer: "Groups (columns) in the periodic table contain elements with similar chemical properties as they have the same number of electrons in their outer shell. Periods (rows) show the number of electron shells the elements have."
      }
    ]
  }
];

// Function to search for answers in the dataset
export function searchNCERTDataset(query: string): string {
  const normalizedQuery = query.toLowerCase().trim();
  
  // First, try to find direct question matches
  for (const topic of ncertDataset) {
    for (const qaPair of topic.questions) {
      if (qaPair.question.toLowerCase().includes(normalizedQuery) || 
          normalizedQuery.includes(qaPair.question.toLowerCase())) {
        return qaPair.answer;
      }
    }
  }
  
  // If no direct question matches, look for topic content matches
  for (const topic of ncertDataset) {
    const keywords = normalizedQuery.split(/\s+/);
    const matchesKeywords = keywords.some(keyword => 
      topic.subject.toLowerCase().includes(keyword) ||
      topic.chapter.toLowerCase().includes(keyword) ||
      topic.topic.toLowerCase().includes(keyword) ||
      topic.content.toLowerCase().includes(keyword)
    );
    
    if (matchesKeywords) {
      return `Based on ${topic.subject} (${topic.chapter} - ${topic.topic}): ${topic.content}`;
    }
  }
  
  // Fallback response
  return "I don't have specific information on that topic in my NCERT database yet. Please try asking about cells, linear equations, Indus Valley Civilization, Himalayan mountains, or the periodic table.";
}


import { useState, useRef, useEffect } from "react";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ImagePreview } from "@/components/ocr/ImagePreview";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { extractTextFromImage } from "@/lib/ocr-simulator";
import { searchNCERTDataset } from "@/lib/ncert-dataset";

type Message = {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: string;
};

const welcomeMessage: Message = {
  id: "welcome",
  text: "Hello! I'm your NCERT Scholar Vision Bot. You can ask me questions about NCERT topics, or upload images of textbook pages for me to analyze.",
  isBot: true,
  timestamp: new Date().toLocaleTimeString(),
};

const getChatSuggestions = (): string[] => [
  "What is a cell?",
  "Explain linear equations",
  "Tell me about the Indus Valley Civilization",
  "What are the key features of the Himalayas?",
  "Who created the periodic table?"
];

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [processingImage, setProcessingImage] = useState(false);
  const [extractedText, setExtractedText] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const suggestions = getChatSuggestions();
  
  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setMessages((prev) => [...prev, newMessage]);
  };
  
  const processUserMessage = async (message: string) => {
    addMessage(message, false);
    setLoading(true);
    
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Search for answer in NCERT dataset
      const answer = searchNCERTDataset(message);
      addMessage(answer, true);
    } catch (error) {
      addMessage("I'm sorry, I encountered an error processing your question. Please try again.", true);
      console.error("Error processing message:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleImageUpload = async (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setProcessingImage(true);
    
    try {
      // Extract text from image using OCR
      const text = await extractTextFromImage(file);
      setExtractedText(text);
      
      // Send extracted text to chat
      addMessage(`I've uploaded an image for analysis.`, false);
      addMessage(`I've analyzed your image and extracted the following text:\n\n${text}\n\nWhat would you like to know about this content?`, true);
    } catch (error) {
      addMessage("I encountered an error processing your image. Please try again with a different image.", true);
      console.error("Error processing image:", error);
    } finally {
      setProcessingImage(false);
    }
  };
  
  const clearImage = () => {
    setUploadedImage(null);
    setExtractedText(null);
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    processUserMessage(suggestion);
  };
  
  return (
    <div className="flex h-screen flex-col bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Button asChild variant="ghost" size="icon">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          
          <h1 className="text-xl font-bold">NCERT Scholar Vision Bot</h1>
          
          <div className="w-10"></div> {/* Placeholder for alignment */}
        </div>
      </header>
      
      <main className="container mx-auto flex flex-1 flex-col gap-4 overflow-hidden p-4">
        <div className="flex-1 overflow-y-auto rounded-lg border bg-background p-4">
          <div className="space-y-6">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isBot={message.isBot}
                timestamp={message.timestamp}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {uploadedImage && (
          <ImagePreview
            imageUrl={uploadedImage}
            onClear={clearImage}
            processingText={processingImage ? "Processing image..." : undefined}
          />
        )}
        
        {messages.length === 1 && (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <Zap className="mr-2 h-4 w-4 text-ncert-orange" />
                {suggestion}
              </Button>
            ))}
          </div>
        )}
        
        <div className="sticky bottom-0 bg-background pt-2">
          <ChatInput
            onSendMessage={processUserMessage}
            onImageUpload={handleImageUpload}
            isLoading={loading || processingImage}
          />
        </div>
      </main>
    </div>
  );
};

export default ChatPage;


import { useState, useRef, useEffect } from "react";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ImagePreview } from "@/components/ocr/ImagePreview";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { extractTextFromImage } from "@/lib/ocr-simulator";
import { searchNCERTDataset } from "@/lib/ncert-dataset";
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: string;
};

const welcomeMessage: Message = {
  id: "welcome",
  text: "👋 Hello! I'm your NCERT Scholar Vision Bot. You can ask me questions about NCERT topics, or upload images of textbook pages for me to analyze.",
  isBot: true,
  timestamp: new Date().toLocaleTimeString(),
};

const getChatSuggestions = (): string[] => [
  "What is a cell?",
  "Explain linear equations",
  "Tell me about the Indus Valley Civilization",
  "What are the key features of the Himalayas?",
  "Who created the periodic table?",
  "What is nationalism in Europe?",
  "Explain the Fundamental Theorem of Arithmetic",
  "What are chemical reactions?"
];

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [processingImage, setProcessingImage] = useState(false);
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const suggestions = getChatSuggestions();
  const { toast } = useToast();
  
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
      const answer = searchNCERTDataset(message);
      setTimeout(() => {
        addMessage(answer, true);
        setLoading(false);
      }, 600); // Small delay to make it feel more natural
    } catch (error) {
      addMessage("I'm sorry, I encountered an error processing your question. Please try again.", true);
      console.error("Error processing message:", error);
      setLoading(false);
    }
  };
  
  const handleImageUpload = async (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setProcessingImage(true);
    
    try {
      const extractedText = await extractTextFromImage(file);
      setExtractedText(extractedText);
      
      addMessage("I've uploaded an image for analysis.", false);
      
      // Add a small delay for better UX
      setTimeout(() => {
        const relevantAnswers = searchNCERTDataset(extractedText);
        
        addMessage(
          `📚 **Analysis Complete**\n\n` +
          `📝 **Extracted Text:**\n${extractedText}\n\n` +
          `🤖 **My Response:**\n${relevantAnswers}`,
          true
        );
        
        toast({
          title: "Image processed successfully",
          description: "I've analyzed the text and provided relevant information.",
        });
        setProcessingImage(false);
      }, 1500);
    } catch (error) {
      console.error("Error processing image:", error);
      addMessage("I encountered an error processing your image. Please try again with a different image.", true);
      toast({
        variant: "destructive",
        title: "Error processing image",
        description: "Please try again with a clearer image.",
      });
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
    <div className="flex h-screen flex-col bg-gradient-to-br from-blue-50/50 to-indigo-50/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-ncert-blue/10">
            <Link to="/">
              <ArrowLeft className="h-5 w-5 text-ncert-blue" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          
          <h1 className="text-xl font-bold text-ncert-dark flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-ncert-blue" />
            NCERT Scholar Vision Bot
          </h1>
          
          <div className="w-10"></div> {/* Placeholder for alignment */}
        </div>
      </header>
      
      <main className="container mx-auto flex flex-1 flex-col gap-4 overflow-hidden p-4">
        <div className="flex-1 overflow-y-auto rounded-lg border-0 bg-transparent p-4">
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
            processingText={processingImage ? "Analyzing image..." : undefined}
          />
        )}
        
        {messages.length === 1 && (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start rounded-xl bg-white hover:bg-ncert-blue/5 border-ncert-blue/20 shadow-sm"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <Zap className="mr-2 h-4 w-4 text-ncert-orange" />
                <span className="text-xs sm:text-sm truncate">{suggestion}</span>
              </Button>
            ))}
          </div>
        )}
        
        <div className="sticky bottom-0 bg-gradient-to-t from-background to-transparent pt-4 pb-2">
          <div className="glass-effect rounded-2xl p-2">
            <ChatInput
              onSendMessage={processUserMessage}
              onImageUpload={handleImageUpload}
              isLoading={loading || processingImage}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;

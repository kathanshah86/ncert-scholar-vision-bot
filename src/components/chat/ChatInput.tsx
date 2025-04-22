
import { useState } from "react";
import { SendIcon, ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  onImageUpload: (file: File) => void;
  isLoading?: boolean;
};

export function ChatInput({ onSendMessage, onImageUpload, isLoading = false }: ChatInputProps) {
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onImageUpload(files[0]);
      // Reset file input
      e.target.value = "";
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a question about NCERT subjects..."
        className="flex-1"
        disabled={isLoading}
        autoComplete="off"
      />
      
      <div className="relative">
        <Input
          type="file"
          id="image-upload"
          accept="image/*"
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
          disabled={isLoading}
        />
        <Button
          type="button"
          size="icon"
          variant="outline"
          className={cn(isLoading && "opacity-50 cursor-not-allowed")}
          disabled={isLoading}
        >
          <ImageIcon className="h-4 w-4" />
          <span className="sr-only">Upload image</span>
        </Button>
      </div>
      
      <Button 
        type="submit" 
        size="icon" 
        disabled={!message.trim() || isLoading}
        className={cn(!message.trim() && "opacity-50")}
      >
        <SendIcon className="h-4 w-4" />
        <span className="sr-only">Send</span>
      </Button>
    </form>
  );
}

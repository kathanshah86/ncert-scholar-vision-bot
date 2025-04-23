
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

type ChatMessageProps = {
  message: string;
  isBot: boolean;
  timestamp?: string;
};

export function ChatMessage({ message, isBot, timestamp }: ChatMessageProps) {
  return (
    <div className={cn(
      "flex w-full gap-3 animate-fade-in", 
      isBot ? "justify-start" : "justify-end"
    )}>
      {isBot && (
        <Avatar className="h-9 w-9 border-2 border-ncert-blue/20 shadow-sm">
          <AvatarImage src="/ncert-bot-avatar.png" alt="NCERT Bot" />
          <AvatarFallback className="bg-ncert-blue text-white text-xs">NC</AvatarFallback>
        </Avatar>
      )}
      <Card
        className={cn(
          "max-w-[85%] rounded-2xl p-4 shadow-sm",
          isBot
            ? "bg-white border-ncert-blue/10 text-foreground"
            : "bg-gradient-to-r from-ncert-blue to-ncert-purple text-white border-none"
        )}
      >
        <div className="whitespace-pre-wrap text-sm leading-relaxed">{message}</div>
        {timestamp && (
          <div className="mt-1.5 text-right text-xs opacity-70">
            {timestamp}
          </div>
        )}
      </Card>
      {!isBot && (
        <Avatar className="h-9 w-9 border-2 border-ncert-purple/20 shadow-sm">
          <AvatarFallback className="bg-ncert-purple text-white text-xs">ST</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

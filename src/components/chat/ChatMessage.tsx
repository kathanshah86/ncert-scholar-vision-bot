
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
    <div className={cn("flex w-full gap-3", isBot ? "justify-start" : "justify-end")}>
      {isBot && (
        <Avatar className="h-8 w-8 border border-primary/20">
          <AvatarImage src="/ncert-bot-avatar.png" alt="NCERT Bot" />
          <AvatarFallback className="bg-primary text-primary-foreground text-xs">NC</AvatarFallback>
        </Avatar>
      )}
      <Card
        className={cn(
          "max-w-[80%] rounded-lg p-3",
          isBot
            ? "bg-muted text-muted-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        <div className="whitespace-pre-wrap text-sm">{message}</div>
        {timestamp && (
          <div className="mt-1 text-right text-xs opacity-70">
            {timestamp}
          </div>
        )}
      </Card>
      {!isBot && (
        <Avatar className="h-8 w-8 border border-primary/20">
          <AvatarFallback className="bg-ncert-purple text-primary-foreground text-xs">ST</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

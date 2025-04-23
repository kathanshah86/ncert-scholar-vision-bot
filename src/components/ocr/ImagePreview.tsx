
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type ImagePreviewProps = {
  imageUrl: string;
  onClear: () => void;
  processingText?: string;
};

export function ImagePreview({ imageUrl, onClear, processingText }: ImagePreviewProps) {
  return (
    <Card className="relative overflow-hidden rounded-lg border border-border p-1">
      <div className="group relative aspect-video w-full overflow-hidden rounded">
        <img
          src={imageUrl}
          alt="Uploaded image"
          className="h-full w-full object-cover transition-opacity"
        />
        
        {processingText && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/80 p-4 backdrop-blur-sm">
            <p className="text-sm font-medium animate-pulse">{processingText}</p>
            <Progress className="w-3/4 h-1.5" value={undefined} />
          </div>
        )}
        
        <Button
          size="icon"
          variant="destructive"
          className="absolute right-2 top-2 h-7 w-7 opacity-90 shadow-md"
          onClick={onClear}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Remove image</span>
        </Button>
      </div>
    </Card>
  );
}

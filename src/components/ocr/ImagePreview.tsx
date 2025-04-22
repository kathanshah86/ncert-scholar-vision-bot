
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
          className="h-full w-full object-cover transition-all"
        />
        
        {processingText && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/80 p-4">
            <p className="text-sm font-medium">{processingText}</p>
            <Progress className="w-1/2" value={100} />
          </div>
        )}
        
        <Button
          size="icon"
          variant="destructive"
          className="absolute right-2 top-2 h-6 w-6 opacity-90"
          onClick={onClear}
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Remove image</span>
        </Button>
      </div>
    </Card>
  );
}

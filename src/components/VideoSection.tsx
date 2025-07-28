import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.jpg";

const VideoSection = () => {
  return (
    <div className="relative max-w-4xl mx-auto px-4 animate-fade-in-up">
      {/* Main Headline */}
      <div className="text-center mb-8">
        <h3 className="text-muted-foreground text-lg mb-4">
          Discover How 47 Professionals Went From Grinding Around The Clock In Their "It Pays The Bills" Job To...
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Replacing Their 9-5 Income, Spending More Time With Their Loved Ones, And Building{" "}
          <span className="text-header-attention">Sustainable Wealth</span> In The Process
        </h1>
        <p className="text-muted-foreground text-lg">
          ...all by using the $1 <span className="text-yellow-300 font-bold">'7-Figure Short Term Rental Bundle'</span>
        </p>
      </div>

      {/* Video Player */}
      <div className="relative bg-card rounded-lg overflow-hidden shadow-video mb-8">
        <div className="relative aspect-video">
          <img 
            src={videoThumbnail} 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="rounded-full w-20 h-20 p-0"
            >
              <Play className="w-8 h-8 fill-current" />
            </Button>
          </div>
          <div className="absolute top-4 left-4 bg-header-attention text-white px-3 py-1 rounded-full text-sm font-bold">
            🔊 CLICK TO TURN ON SOUND
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Button variant="cta-large" className="mb-4">
          Give Me The 7-Figure 'Short Term Rental Bundle' For $1 🔥
        </Button>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          🔒 Backed by Our <span className="text-trust-badge font-bold">100% Money Back Guarantee</span>
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
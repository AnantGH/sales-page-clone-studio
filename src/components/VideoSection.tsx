import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.jpg";

const VideoSection = () => {
  return (
    <div className="relative max-w-4xl mx-auto px-4 animate-fade-in-up">
      {/* Main Headline */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Discover How 2000+ People have Become Owners of Big 8-9 figure companies by Scaling their Real Estate Businesses Going from{" "}
          <span className="text-header-attention">"Being a Locked into a Room Hustler"</span> to a CEO
        </h1>
        <p className="text-muted-foreground text-lg">
          Learn why Boardroom Mastermind has been the best Premier Mastermind Group in the industry since 2012
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
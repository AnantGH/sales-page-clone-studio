import { Card } from "@/components/ui/card";

const StatsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Short Terms Rentals Are By Far The Highest{" "}
          <span className="text-header-attention">Cash Flow Producing Asset</span> In All Of Real Estate
        </h2>
        <p className="text-muted-foreground text-lg">
          I mean just look at the stats...
        </p>
      </div>

      <Card className="bg-card border-border p-8 max-w-2xl mx-auto">
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">
            What Is "Good" Cash Flow for a Rental Property?
          </h3>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-muted-foreground">Traditional Long-Term Rental:</span>
              <span className="font-bold text-lg">$200-500/month</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-muted-foreground">Short-Term Rental (Airbnb):</span>
              <span className="font-bold text-2xl text-header-attention">$2,000-8,000/month</span>
            </div>
            
            <div className="bg-gradient-cta text-accent-foreground p-4 rounded-lg">
              <p className="font-bold text-lg">
                That's 10-20x MORE cash flow than traditional rentals!
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StatsSection;
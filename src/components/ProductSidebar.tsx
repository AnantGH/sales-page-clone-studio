import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import productBundle from "@/assets/product-bundle.jpg";
import { Shield, CreditCard } from "lucide-react";

const ProductSidebar = () => {
  return (
    <div className="w-full lg:w-96 sticky top-4">
      <Card className="bg-card border-border p-6 shadow-card-hover animate-fade-in-up">
        {/* Header */}
        <div className="bg-gradient-header text-white text-center py-3 -mx-6 -mt-6 mb-6 rounded-t-lg">
          <h3 className="font-bold text-xl">Now Available For $1</h3>
        </div>

        {/* Product Image */}
        <div className="text-center mb-6">
          <img 
            src={productBundle} 
            alt="7-Figure Short Term Rental Bundle" 
            className="w-full max-w-64 mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Savings Badge */}
        <div className="text-center mb-6">
          <div className="bg-muted text-foreground font-bold text-lg py-2 px-4 rounded-lg">
            YOU'RE SAVING $97+ TODAY
          </div>
        </div>

        {/* Product Title */}
        <h4 className="text-center text-lg font-bold mb-2">
          Get The 7-Figure 'Short Term Rental Bundle' For $1
        </h4>
        
        <p className="text-center text-muted-foreground text-sm mb-6">
          Bonuses Will Be Delivered Instantly. Start Watching Right Away, While You Wait For The eBook To Deliver To Your inbox.
        </p>

        {/* Email Form */}
        <div className="space-y-4 mb-6">
          <Input 
            type="email" 
            placeholder="Your Email Address Here..." 
            className="w-full py-3 text-center"
          />
          <Button variant="cta" className="w-full">
            Get Your 7-Figure 'Short Term Rental Bundle' For $1 🔥
          </Button>
        </div>

        {/* Security Badges */}
        <div className="space-y-3 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-trust-badge" />
            <span>100% Secure 256-Bit Security Encryption</span>
          </div>
          
          {/* Credit Card Icons */}
          <div className="flex justify-center gap-2 flex-wrap">
            <div className="bg-secondary px-2 py-1 rounded text-xs">VISA</div>
            <div className="bg-secondary px-2 py-1 rounded text-xs">MC</div>
            <div className="bg-secondary px-2 py-1 rounded text-xs">AMEX</div>
            <div className="bg-secondary px-2 py-1 rounded text-xs">DISC</div>
            <div className="bg-secondary px-2 py-1 rounded text-xs">SHOP</div>
            <div className="bg-secondary px-2 py-1 rounded text-xs">SECURE</div>
          </div>
          
          <p>
            Backed by Our <span className="text-trust-badge font-bold">100% Money Back Guarantee</span>
          </p>
          
          <div className="bg-trust-badge/20 border border-trust-badge rounded-lg p-3 mt-4">
            <div className="flex items-center justify-center gap-2 text-trust-badge font-bold">
              <Shield className="w-5 h-5" />
              <span>GUARANTEED SAFE CHECKOUT</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductSidebar;
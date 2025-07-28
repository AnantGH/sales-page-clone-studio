import SalesHeader from "@/components/SalesHeader";
import VideoSection from "@/components/VideoSection";
import ProductSidebar from "@/components/ProductSidebar";
import BoardroomSection from "@/components/BoardroomSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Attention-Grabbing Header */}
      <SalesHeader />
      
      {/* Main Content Area */}
      <div className="container mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: Video and Content */}
          <div className="flex-1">
            <VideoSection />
            <BoardroomSection />
          </div>
          
          {/* Right: Product Sidebar */}
          <ProductSidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
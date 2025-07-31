import SalesHeader from "@/components/SalesHeader";
import VideoSection from "@/components/VideoSection";
import BoardroomSection from "@/components/BoardroomSection";
import WhyRealEstateSection from "@/components/WhyRealEstateSection";
import ProgramSection from "@/components/ProgramSection";
import QualificationSection from "@/components/QualificationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Attention-Grabbing Header */}
      <SalesHeader />
      
      {/* Main Content Area */}
      <div className="container mx-auto py-12">
        <VideoSection />
        <BoardroomSection />
        <WhyRealEstateSection />
        <ProgramSection />
        <QualificationSection />
      </div>
    </div>
  );
};

export default Index;

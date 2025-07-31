import { Button } from "@/components/ui/button";

const QualificationSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 text-white">
      <div className="bg-card rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Don't join this programme if -</h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl font-bold">❌</span>
            <p className="text-muted-foreground">You are not willing to learn new things and apply them in order to make money.</p>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl font-bold">❌</span>
            <p className="text-muted-foreground">You are looking for a get rich quick scheme.</p>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl font-bold">❌</span>
            <p className="text-muted-foreground">You are not willing to do the work required because in this program apart from teaching we also monitor your first flip and how much money you make through it.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">How does it work?</h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-muted-foreground">
            It's actually quite simple considering the outcome you get from this programme…
          </p>
          
          <p className="text-muted-foreground">
            Just simply click on any of the links.
          </p>
          
          <p className="text-muted-foreground">
            Then we'll hop on a quick strategy call, so I can see what you're doing and who YOU are.
          </p>
          
          <p className="text-muted-foreground">
            This is important so that we can make an actual plan on how to get you to where you want.
          </p>
          
          <p className="text-muted-foreground">
            And how we will apply those plans daily to progress each day and finally get you to achieve your dream income target.
          </p>
          
          <p className="font-semibold text-white">
            That's when the FUN starts!
          </p>
          
          <p className="text-muted-foreground">
            You'll also get access to a bunch of resources with an estimated value of &lt;X&gt;.
          </p>
          
          <p className="font-semibold text-white">
            Inside you'll have everything you need to make money through real estate…
          </p>
          
          <p className="font-semibold text-white">
            And quit your 9-5 job forever and spend more time with people you love.
          </p>
        </div>

        <div className="text-center">
          <Button variant="cta-large" className="mb-6">
            Yes! Enroll Me In ProjectRE.
          </Button>
          
          <h3 className="text-xl font-bold text-white">FAQs/Recap</h3>
          
          <div className="mt-6">
            <Button variant="cta-large">
              Yes! Enroll Me In ProjectRE.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationSection;

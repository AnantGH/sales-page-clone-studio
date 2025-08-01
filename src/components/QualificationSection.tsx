import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QualificationSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 text-white">
      {/* First Box - Don't join this programme if */}
      <div className="bg-card rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Don't join this programme if -</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl font-bold">❌</span>
            <p className="text-muted-foreground text-lg">You are not willing to learn new things and apply them in order to make money.</p>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl font-bold">❌</span>
            <p className="text-muted-foreground text-lg">You are looking for a get rich quick scheme.</p>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl font-bold">❌</span>
            <p className="text-muted-foreground text-lg">You are not willing to do the work required because in this program apart from teaching we also monitor your first flip and how much money you make through it.</p>
          </div>
        </div>
      </div>

      {/* Second Box - How does it work */}
      <div className="bg-card rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">How does it work?</h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-muted-foreground text-lg">
            It's actually quite simple considering the outcome you get from this programme…
          </p>
          
          <p className="text-muted-foreground text-lg">
            Just simply click on any of the links.
          </p>
          
          <p className="text-muted-foreground text-lg">
            Then we'll hop on a quick strategy call, so I can see what you're doing and who YOU are.
          </p>
          
          <p className="text-muted-foreground text-lg">
            This is important so that we can make an actual plan on how to get you to where you want.
          </p>
          
          <p className="text-muted-foreground text-lg">
            And how we will apply those plans daily to progress each day and finally get you to achieve your dream income target.
          </p>
          
          <p className="font-bold text-white">
            That's when the FUN starts!
          </p>
          
          <p className="text-muted-foreground text-lg">
            You'll also get access to a bunch of resources with an estimated value of &lt;X&gt;.
          </p>
          
          <p className="font-bold text-white">
            Inside you'll have everything you need to make money through real estate…
          </p>
          
          <p className="font-bold text-white">
            And quit your 9-5 job forever and spend more time with people you love.
          </p>
        </div>

        <div className="text-center">
          <Button variant="cta-large" className="mb-6">
            Yes! Enroll Me In ProjectRE.
          </Button>
        </div>
      </div>

      {/* Third Box - FAQs */}
      <div className="bg-card rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">FAQs</h2>
        
        <div className="text-center">
          <Accordion type="single" collapsible className="mt-6 space-y-4">
            <AccordionItem value="what-included" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                What exactly is included in this high-ticket real estate coaching program?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                This coaching program is led by an experienced investor who has successfully fixed and flipped over 350 properties, often earning around 100% profit on each deal. Inside, you'll get step-by-step training on the entire fix-and-flip process, including sourcing deals, funding, rehabbing, selling, and scaling your operations. The program gives you actionable templates, scripts, and deal analyzers, along with access to hands-on support, mentorship, and a private peer community. Whether you're a complete beginner or looking to take your business to the next level, the training is designed to fit your schedule, answer your questions, and help you profit in any market cycle. The ultimate focus: giving you proven blueprints and one-on-one guidance to shortcut your success and help you achieve repeatable, life-changing results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="will-work" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                How do I know this program will work for me?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                Our process is designed for people with different experience levels—including those who have never flipped a house before. The system provides you with step-by-step guidance, hands-on support, and proven templates so you are never left guessing about your next action. Many of our clients started with zero experience and saw their first profits within months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="no-money" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                What if I don't have a lot of money to invest?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                You don't need a huge bank balance to get started. We teach creative ways to fund deals—including how to leverage other people's money, secure private funding, and structure win-win partnerships—so even beginners can take action without significant upfront cash.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="full-time-job" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                Is this suitable for someone with a full-time job?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                Absolutely. Our coaching is designed to fit busy lifestyles. Many of our clients build their side business while maintaining a full-time career, using the time-saving systems and support we provide to maximize results with the hours they have.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="results-timeline" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                How quickly can I expect to see results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                Results vary based on the effort you put in and your starting point, but many students secure their first deal within 60-120 days. Our team helps you avoid the common mistakes that slow most beginners down, giving you a shortcut to faster wins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="different" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                What makes this different from other real estate programs?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                This program is built on real-world experience from successfully flipping 350+ properties—not just theory. You get direct access to a mentor who's still active in the business, a community of motivated peers, and a blueprint that's been tested through different market cycles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                What if I have questions or get stuck?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                You'll have access to ongoing support, Q&A calls, a private members group, and one-on-one check-ins. We are committed to your results—your success is our priority.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="guarantee" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                Is there a guarantee?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                Yes, we offer a satisfaction guarantee. Details vary per program tier, but our goal is for every student to be thrilled with their progress. If you show up, take action, and still aren't satisfied, we'll work with you on a solution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="afraid-invest" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                I'm afraid to invest in myself—how do I know it's worth it?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                The most successful investors agree: your greatest lever is your knowledge. This program is an investment in mastering a high-income skill that can pay you for a lifetime—one deal can recoup your investment many times over. Plus, you're not doing this alone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="market-turns" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                What if the real estate market turns?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                Our strategies work in both up and down markets; you'll learn how to find and structure deals that are resilient in any economic climate. The founder's experience spans booms and busts, so you get insider tactics for any scenario.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="get-started" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xl text-left">
                Click the button below to book your free strategy call. We'll discuss your goals, answer your questions, and determine if this program is a good fit for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-8">
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

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BoardroomSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 text-white">
      {/* Single section with all content */}
      <div className="bg-card rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">What is ProjectRE?</h2>
        
        <div className="space-y-4 text-muted-foreground text-lg">
          <p>
            See if you have read the above headline, then yes I have actually fixed and flipped around 3500+ properties, but…
          </p>

          <p>
            This number is huge only because I started real estate in my college years.
          </p>

          <p>
            I used to work at Red Robin while attending Washington University but wanted more income,
          </p>

          <p>
            So I got into sales because people were making a lot of money in it.
          </p>

          <p>
            Now I had to choose one industry so I chose real estate,
          </p>

          <p className="font-semibold text-white">
            Why?
          </p>

          <p>
            Because I thought -
          </p>

          <p className="font-bold text-white italic">
            "Everyone wants a house, don't they?"
          </p>

          <p className="font-bold text-white italic">
            "It is just easy you need to walk into someone's house and convince them to buy"
          </p>

          <p>
            Or at least I thought so,
          </p>

          <p>
            Now I decided to knock on foreclosure doors without any experience.
          </p>

          <p>
            And that way I got into door-to-door sales.
          </p>

          <p>
            But as people say success is not a straight path and I was about to learn this saying the hard way,
          </p>

          <p>
            I used to work my 9-5 job, attend college and every spare time I had in the day I would dedicate it to real estate.
          </p>

          <p>
            Knocking door to door and cold calling didn't take me anywhere.
          </p>

          <p>
            I had so many things planned after I would succeed but it didn't happen according to my wishes,
          </p>

          <p>
            I didn't see success for 1 whole year,
          </p>

          <p>
            I was in a very dark place, alone with no one to guide me.
          </p>

          <p>
            No one was there to help me I was just there alone with my thoughts.
          </p>

          <p>
            I used to think -
          </p>

          <p className="font-bold text-white italic">
            "Maybe sales is not for me. I should work more at Red Robin maybe I may get a promotion."
          </p>

          <p className="font-bold text-white italic">
            "I cannot succeed."
          </p>

          <p className="font-bold text-white italic">
            "This is not meant for me."
          </p>

          <p>
            But even after all of these, I had no choice because I had to pull it off.
          </p>

          <p>
            So I did not quit and through my dedication, market research and perseverance…
          </p>

          <p className="font-bold text-white">
            I went from no money to building a successful real estate flipping business and today I am the owner of 5 different real estate companies.
          </p>

          <p>
            In the beginning, I didn't have guidance I was all alone in this game,
          </p>

          <p>
            That is why I decided to give people like me the guidance they needed to earn money from flipping properties so that they don't have to fail like me for 1 year.
          </p>

          <p>
            Believe me that one year of torture was something so bad I wouldn't want it on my worst enemies.
          </p>

          <p className="font-bold text-white">
            That is why ProjectRE was born so that you don't have to feel alone like I was when I started.
          </p>

          <p className="font-bold text-white">
            An online Academy for serious Real Estate Investors who are looking to achieve financial freedom.
          </p>

          <p>
            Because I know the struggles of you all, I have set up my academy in a way that it's competitive and cooperative at the same time.
          </p>

          <p>
            We work like a network or community and a chance to connect with a Real Estate expert that actually wants to support you in your journey.
          </p>

          <p className="font-bold text-white">
            When you join the ProjectRE, you are putting my 18 years of expertise in your toolbox.
          </p>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-12 bg-card rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="what-included" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                What exactly is included in this high-ticket real estate coaching program?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                This coaching program is led by an experienced investor who has successfully fixed and flipped over 350 properties, often earning around 100% profit on each deal. Inside, you'll get step-by-step training on the entire fix-and-flip process, including sourcing deals, funding, rehabbing, selling, and scaling your operations. The program gives you actionable templates, scripts, and deal analyzers, along with access to hands-on support, mentorship, and a private peer community. Whether you're a complete beginner or looking to take your business to the next level, the training is designed to fit your schedule, answer your questions, and help you profit in any market cycle. The ultimate focus: giving you proven blueprints and one-on-one guidance to shortcut your success and help you achieve repeatable, life-changing results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="will-work" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                How do I know this program will work for me?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                Our process is designed for people with different experience levels—including those who have never flipped a house before. The system provides you with step-by-step guidance, hands-on support, and proven templates so you are never left guessing about your next action. Many of our clients started with zero experience and saw their first profits within months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="no-money" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                What if I don't have a lot of money to invest?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                You don't need a huge bank balance to get started. We teach creative ways to fund deals—including how to leverage other people's money, secure private funding, and structure win-win partnerships—so even beginners can take action without significant upfront cash.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="full-time-job" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                Is this suitable for someone with a full-time job?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                Absolutely. Our coaching is designed to fit busy lifestyles. Many of our clients build their side business while maintaining a full-time career, using the time-saving systems and support we provide to maximize results with the hours they have.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="results-timeline" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                How quickly can I expect to see results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                Results vary based on the effort you put in and your starting point, but many students secure their first deal within 60-120 days. Our team helps you avoid the common mistakes that slow most beginners down, giving you a shortcut to faster wins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="different" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                What makes this different from other real estate programs?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                This program is built on real-world experience from successfully flipping 350+ properties—not just theory. You get direct access to a mentor who's still active in the business, a community of motivated peers, and a blueprint that's been tested through different market cycles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                What if I have questions or get stuck?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                You'll have access to ongoing support, Q&A calls, a private members group, and one-on-one check-ins. We are committed to your results—your success is our priority.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="guarantee" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                Is there a guarantee?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                Yes, we offer a satisfaction guarantee. Details vary per program tier, but our goal is for every student to be thrilled with their progress. If you show up, take action, and still aren't satisfied, we'll work with you on a solution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="afraid-invest" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                I'm afraid to invest in myself—how do I know it's worth it?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                The most successful investors agree: your greatest lever is your knowledge. This program is an investment in mastering a high-income skill that can pay you for a lifetime—one deal can recoup your investment many times over. Plus, you're not doing this alone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="market-turns" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                What if the real estate market turns?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                Our strategies work in both up and down markets; you'll learn how to find and structure deals that are resilient in any economic climate. The founder's experience spans booms and busts, so you get insider tactics for any scenario.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="get-started" className="border-border">
              <AccordionTrigger className="text-white hover:text-white/80">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg">
                Click the button below to book your free strategy call. We'll discuss your goals, answer your questions, and determine if this program is a good fit for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default BoardroomSection;

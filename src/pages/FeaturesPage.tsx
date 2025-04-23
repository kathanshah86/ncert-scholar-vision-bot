
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, BookOpen, Image, Sparkles, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50/50 to-indigo-50/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-ncert-blue/10">
            <Link to="/">
              <ArrowLeft className="h-5 w-5 text-ncert-blue" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          
          <h1 className="text-xl font-bold text-ncert-dark flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-ncert-blue" />
            Features & Capabilities
          </h1>
          
          <div className="w-10"></div> {/* Placeholder for alignment */}
        </div>
      </header>
      
      <main className="container mx-auto py-8">
        <div className="mx-auto max-w-4xl">
          <section className="mb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-ncert-blue to-ncert-purple opacity-75 blur"></div>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                  <BookOpen className="h-8 w-8 text-ncert-purple" />
                </div>
              </div>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-ncert-dark">NCERT Scholar Vision Bot</h2>
            <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered educational assistant helps students understand NCERT materials better through interactive conversations and image analysis.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-ncert-blue to-ncert-purple hover:opacity-90">
                <Link to="/chat">Start Using Now</Link>
              </Button>
            </div>
          </section>
          
          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-xl border bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-ncert-dark flex items-center gap-2">
                <MessagesSquare className="h-6 w-6 text-ncert-blue" />
                NCERT Knowledge Base
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Comprehensive coverage of Science topics",
                  "Mathematical concepts and problem-solving",
                  "Historical events and their significance",
                  "Geographic features and their importance",
                  "Chemical elements and reactions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 text-ncert-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="rounded-xl border bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-ncert-dark flex items-center gap-2">
                <Image className="h-6 w-6 text-ncert-blue" />
                OCR Technology
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Extract text from textbook images",
                  "Process mathematical equations and diagrams",
                  "Analyze text layout and structure",
                  "Handle handwritten notes and printed text",
                  "Process multiple languages"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 text-ncert-blue flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <section className="mt-12">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-center text-ncert-dark">How It Works</h2>
            <div className="rounded-xl border bg-white p-8 shadow-md">
              <ol className="relative space-y-12 border-l border-dashed border-ncert-blue/50 pl-8 ml-4">
                {[
                  {
                    title: "Ask a Question",
                    desc: "Type your question about any NCERT topic in the chat interface. The bot will search its comprehensive knowledge base to provide an accurate answer."
                  },
                  {
                    title: "Upload Images",
                    desc: "Upload an image of a textbook page, handwritten notes, or a diagram. The OCR technology will extract the text and visual information."
                  },
                  {
                    title: "Get Insights",
                    desc: "The bot analyzes the extracted content and provides explanations, answers questions, or helps you understand difficult concepts."
                  },
                  {
                    title: "Keep Learning",
                    desc: "Continue the conversation to explore topics in greater depth, ask follow-up questions, or move on to new subjects."
                  }
                ].map((step, index) => (
                  <li key={index} className="relative">
                    <div className="absolute -left-11 flex h-7 w-7 items-center justify-center rounded-full bg-ncert-blue text-white shadow-md">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-ncert-dark">{step.title}</h4>
                      <p className="mt-2 text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="mt-auto border-t py-8 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NCERT Scholar Vision Bot. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-ncert-blue hover:underline transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-ncert-blue hover:underline transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-ncert-blue hover:underline transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesPage;

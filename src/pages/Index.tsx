
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, BookOpen, ChevronRight, Image, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-20 text-center md:py-32">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-ncert-blue to-ncert-purple opacity-75 blur"></div>
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
              <Sparkles className="h-10 w-10 text-ncert-purple" />
            </div>
          </div>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="animate-fade-in text-4xl font-extrabold tracking-tight text-ncert-dark sm:text-5xl md:text-6xl">
              NCERT Scholar Vision Bot
            </h1>
            <p className="animate-fade-in text-xl text-muted-foreground md:text-2xl">
              Your intelligent assistant for NCERT study materials. Ask questions, upload textbook pages, and get instant help with your coursework.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 rounded-full bg-gradient-to-r from-ncert-blue to-ncert-purple hover:opacity-90">
              <Link to="/chat">
                <MessageSquare className="h-5 w-5" />
                Start Chatting
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-full border-ncert-blue text-ncert-blue hover:bg-ncert-blue/10">
              <Link to="/features">
                <ChevronRight className="h-5 w-5" />
                Learn More
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-ncert-dark">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group hover-scale rounded-xl border bg-card p-6 shadow-md transition-all hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-ncert-blue to-ncert-blue/70 text-white">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-ncert-dark">NCERT Q&A</h3>
              <p className="text-muted-foreground">
                Ask questions about your NCERT textbooks and get instant, accurate answers to help with your studies.
              </p>
            </div>
            
            <div className="group hover-scale rounded-xl border bg-card p-6 shadow-md transition-all hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-ncert-green to-ncert-green/70 text-white">
                <Image className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-ncert-dark">OCR Technology</h3>
              <p className="text-muted-foreground">
                Upload images of your textbook pages and the bot will extract and analyze the content for you.
              </p>
            </div>
            
            <div className="group hover-scale rounded-xl border bg-card p-6 shadow-md transition-all hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-ncert-purple to-ncert-purple/70 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-ncert-dark">Subject Expertise</h3>
              <p className="text-muted-foreground">
                Get help across all NCERT subjects including Science, Mathematics, History, Geography, and more.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-ncert-light to-white rounded-3xl my-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-ncert-dark">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "1", title: "Ask a Question", desc: "Type your NCERT query or upload an image" },
              { number: "2", title: "AI Processing", desc: "Our AI analyzes your question using NCERT knowledge" },
              { number: "3", title: "Get Answers", desc: "Receive accurate, educational responses" },
              { number: "4", title: "Keep Learning", desc: "Continue with follow-up questions or new topics" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ncert-blue text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-bold text-ncert-dark">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                {index < 3 && <ChevronRight className="hidden rotate-90 text-ncert-blue mt-4 md:mt-0 md:rotate-0 md:block" />}
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="border-t py-8 bg-white">
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

export default Index;

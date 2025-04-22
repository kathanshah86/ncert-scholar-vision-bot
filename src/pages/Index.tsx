
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-blue-50">
      <main className="flex-1">
        <section className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-20 text-center md:py-32">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
              <path d="M7 7h.01"></path>
            </svg>
          </div>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              NCERT Scholar Vision Bot
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Your intelligent assistant for NCERT study materials. Ask questions, upload textbook pages, and get instant help with your coursework.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link to="/chat">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Start Chatting
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/features">
                Learn More
              </Link>
            </Button>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">NCERT Q&A</h3>
              <p className="text-muted-foreground">
                Ask questions about your NCERT textbooks and get instant, accurate answers to help with your studies.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">OCR Technology</h3>
              <p className="text-muted-foreground">
                Upload images of your textbook pages and the bot will extract and analyze the content for you.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m2 12 5.45 5.45"></path>
                  <path d="m2 12 5.45-5.45"></path>
                  <path d="M12 6.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Z"></path>
                  <path d="M12 14.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0v3Z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Subject Expertise</h3>
              <p className="text-muted-foreground">
                Get help across all NCERT subjects including Science, Mathematics, History, Geography, and more.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NCERT Scholar Vision Bot. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;

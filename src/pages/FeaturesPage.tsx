
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Button asChild variant="ghost" size="icon">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          
          <h1 className="text-xl font-bold">Features & Capabilities</h1>
          
          <div className="w-10"></div> {/* Placeholder for alignment */}
        </div>
      </header>
      
      <main className="container mx-auto py-8">
        <div className="mx-auto max-w-4xl">
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">NCERT Scholar Vision Bot</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Our AI-powered educational assistant helps students understand NCERT materials better through interactive conversations and image analysis.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/chat">Start Using Now</Link>
              </Button>
            </div>
          </section>
          
          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">NCERT Knowledge Base</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-ncert-green">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Comprehensive coverage of Science topics
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-ncert-green">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Mathematical concepts and problem-solving
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-ncert-green">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Historical events and their significance
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-ncert-green">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Geographic features and their importance
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-ncert-green">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Chemical elements and reactions
                </li>
              </ul>
            </section>
            
            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">OCR Technology</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-ncert-blue">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Extract text from textbook images
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-ncert-blue">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Process mathematical equations and diagrams
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-ncert-blue">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Analyze text layout and structure
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-ncert-blue">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Handle handwritten notes and printed text
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-ncert-blue">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Process multiple languages
                </li>
              </ul>
            </section>
          </div>
          
          <section className="mt-12">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">How It Works</h2>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <ol className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold">Ask a Question</h4>
                    <p className="text-muted-foreground">
                      Type your question about any NCERT topic in the chat interface. The bot will search its comprehensive knowledge base to provide an accurate answer.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold">Upload Images</h4>
                    <p className="text-muted-foreground">
                      Upload an image of a textbook page, handwritten notes, or a diagram. The OCR technology will extract the text and visual information.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold">Get Insights</h4>
                    <p className="text-muted-foreground">
                      The bot analyzes the extracted content and provides explanations, answers questions, or helps you understand difficult concepts.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold">Keep Learning</h4>
                    <p className="text-muted-foreground">
                      Continue the conversation to explore topics in greater depth, ask follow-up questions, or move on to new subjects.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="mt-auto border-t py-6">
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

export default FeaturesPage;

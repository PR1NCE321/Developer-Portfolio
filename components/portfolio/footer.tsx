import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Prince Kakadiya</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/kakadiya-prince-860a7730a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-card hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/princekakadiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-card hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:kakadiyaprince289@gmail.com"
              className="p-2 rounded-lg hover:bg-card hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

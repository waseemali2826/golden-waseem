import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Fallback: open mail client with prefilled content
    const to = "waseem38650@gmail.com";
    const subject = encodeURIComponent(`Contact from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="container mx-auto py-16">
      <header className="text-center mb-10">
        <h1 className="font-serif text-3xl text-primary">Get In Touch</h1>
        <p className="mt-2 text-muted-foreground">Let&apos;s connect — send a message or use the contact details below.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card/60 p-6 text-center">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-primary">Email</h3>
          <p className="mt-2 text-sm text-muted-foreground">waseem38650@gmail.com</p>
        </div>

        <div className="rounded-2xl border border-border bg-card/60 p-6 text-center">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.62.34 1.6.63 2.7a1 1 0 0 1-.24 1l-1.3 1.3a16 16 0 0 0 6 6l1.3-1.3a1 1 0 0 1 1-.24c1.1.29 2.08.51 2.7.63a1 1 0 0 1 .75 1V21z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-primary">Phone</h3>
          <p className="mt-2 text-sm text-muted-foreground">03100071886</p>
        </div>

        <div className="rounded-2xl border border-border bg-card/60 p-6 text-center">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 6-9 11-9 11S3 16 3 10a9 9 0 1 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2" />
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-primary">Location</h3>
          <p className="mt-2 text-sm text-muted-foreground">Pakistan</p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card/60 p-6">
          <h2 className="font-semibold text-lg text-primary">Send a message</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="rounded-md border border-border bg-background/5 px-3 py-2 text-sm w-full" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="rounded-md border border-border bg-background/5 px-3 py-2 text-sm w-full" />
          </div>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="mt-4 h-40 w-full rounded-md border border-border bg-background/5 px-3 py-2 text-sm" />
          <div className="mt-4">
            <button className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Send Message</button>
          </div>
        </form>

        <div className="rounded-2xl border border-border bg-card/60 p-6">
          <h2 className="font-semibold text-lg text-primary text-center">Let\'s Connect</h2>
          <p className="mt-3 text-sm text-muted-foreground text-center">Ready to work together? Let\'s discuss your next project and bring your ideas to life with cutting-edge technology and innovative solutions.</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground" href="https://www.linkedin.com/in/waseem-ali-2082002a6/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground" href="https://github.com/waseemali2826" target="_blank" rel="noreferrer">GitHub</a>
            <a className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground" href="'https://www.instagram.com/waseemali3145?igsh=YzljYTk1ODg3Zg==" >Instagram</a>
          </div>

 



          <div className="mt-6 rounded-xl border border-border bg-background/5 p-4 text-center">
            <p className="text-sm text-muted-foreground">Ready to work together? Let's discuss your next project and bring your ideas to life with cutting-edge technology and innovative solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

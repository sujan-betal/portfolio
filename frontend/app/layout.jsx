import "./globals.css";

export const metadata = {
  title: "Sujan Betal — Full-Stack Developer",
  description:
    "Sujan Betal is a full-stack developer with 3 years of experience. Explore selected projects and get in touch.",
};

export const viewport = {
  themeColor: "#f5f7fc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden="true" />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "NextJs Blog Post",
  description: "NextJS blog post app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

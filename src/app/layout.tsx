import "./globals.css";

export const metadata = {
  title: "Premier League",
  description: "stay update with each match",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Navbar />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs"
import Providers from "@/components/Provider";
import {Toaster} from "react-hot-toast";


export const metadata: Metadata = {
  title: "ChatSphere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Providers>
    <html lang="en" suppressHydrationWarning>
       <body>
        {children}
        <Toaster/>
      </body>
    
    </html>
   
    </Providers>
    </ClerkProvider>
  );
}

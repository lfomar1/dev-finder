import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { AppProvider } from "./context/appContext";
import { Center } from "@chakra-ui/react";
const inter = Quicksand({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Dev Finder",
  description: "Created by Lucas Omar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Providers>
            <Center h="100vh" bg="gray.50">
              {children}
            </Center>
          </Providers>
        </AppProvider>
      </body>
    </html>
  );
}

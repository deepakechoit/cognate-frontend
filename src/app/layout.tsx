import Header from "@/component/header";
import "./globals.css";
import { LoaderProvider } from "@/context/LoaderContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoaderProvider>
          <div className="flex sm:min-h-screen flex-col sm:flex-row">
            <div className="sm:h-screen bg-gray-100">
              <Header />
            </div>
            <main className="flex-1 h-screen overflow-auto">
              {children}
            </main>
          </div>
          </LoaderProvider>
      </body>
    </html>
  );
}

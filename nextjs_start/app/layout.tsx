import { Metadata } from "next";
import Navigation from "./about-us/components/navigation";

export const metadata : Metadata = {
  title : {
    template : "%s | Next.js",
    default : "Loading..."
  },
  description : "The React Framework for Production",
}

export default function Layout({ children }: { children : React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
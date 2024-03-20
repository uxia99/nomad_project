import Navigation from "./about-us/components/navigation";



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
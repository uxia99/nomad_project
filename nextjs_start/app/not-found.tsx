import { Metadata } from "next";
import Navigation from "./about-us/components/navigation";

export const metadata : Metadata = {
  title : "Not Found",
}

export default function NotFound() {
  return (
    <div>
      {/* <Navigation /> */}
      <h1>404 - Page Not Found</h1>
    </div>
  )
}
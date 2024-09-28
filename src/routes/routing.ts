import { ComponentType } from "react";
import BlogListing from "../modules/blogListing";
import ContactUs from "../modules/contactUs";

interface Routing {
  id: number;
  name: string;
  path: string;
  element: ComponentType;
}
export const routing: Routing[] = [
  {
    id: 11,
    name: "Blog Listing",
    path: "/blog-listing",
    element: BlogListing,
  },
  {
    id: 12,
    name: "Contact us",
    path: "/contact-us",
    element: ContactUs,
  },
];

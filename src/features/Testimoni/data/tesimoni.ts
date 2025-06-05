import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Sitohang from "@/assets/image/sitohang.png";
import Hiu from "@/assets/image/hiu.png";
interface TestimoniCard {
  id: string;
  name: string;
  role: string;
  avatar: string | StaticImport;
  rating: number;
  testimoni: string;
}

export const testimoniData: TestimoniCard[] = [
  {
    id: "1",
    name: "Syauqi Sitohang",
    role: "influencer",
    avatar: Sitohang,
    rating: 5.0,
    testimoni: "I really like Nestora. Its a great website!",
  },
  {
    id: "2",
    name: "Wildan Cumolonimbus",
    role: "influencer",
    avatar: Hiu,
    rating: 5.0,
    testimoni: "This is an amazing website! So easy and minimalist--",
  },
];

interface FooterLink {
  id: number;
  title: string;
  path: string;
}

interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

export const footerlinks: FooterSection[] = [
  {
    id: 1,
    title: "EXPLORE",
    links: [
      { id: 1, title: "Shop All", path: "/shop" },
      { id: 2, title: "Living Room", path: "/living-room" },
      { id: 3, title: "Bedroom", path: "/bedroom" },
      { id: 4, title: "Dining", path: "/dining" },
      { id: 5, title: "Office", path: "/office" },
      { id: 6, title: "Lightning", path: "/lightning" },
      { id: 7, title: "Sale", path: "/sale" }
    ]
  },
  {
    id: 2,
    title: "ABOUT",
    links: [
      { id: 1, title: "Our Story", path: "/our-story" },
      { id: 2, title: "Sustainability", path: "/sustainability" },
      { id: 3, title: "Careers", path: "/careers" },
      { id: 4, title: "Blog", path: "/blog" }
    ]
  },
  {
    id: 3,
    title: "HELP",
    links: [
      { id: 1, title: "FAQs", path: "/faqs" },
      { id: 2, title: "Shipping & Delivery", path: "/shipping-delivery" },
      { id: 3, title: "Returns & Exchanges", path: "/returns-exchanges" },
      { id: 4, title: "Contact Us", path: "/contact" },
      { id: 5, title: "Track Order", path: "/track-order" }
    ]
  }
];
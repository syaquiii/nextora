export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Home, But Make It Luxe: Interior Furniture Ideas for 2025",
    excerpt: "Designs that define tomorrow...",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    category: "Interior Design",
  },
  {
    id: "2",
    title:
      "From Japandi to Maximalist: Furniture Styles Everyone's Talking About",
    excerpt: "Style meets smart living...",
    image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
    category: "Furniture",
  },
  {
    id: "3",
    title: "Vintage Revival: Why Retro Furniture is the New Modern",
    excerpt: "Elegance in every piece...",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
    category: "Lifestyle",
  },
];

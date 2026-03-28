export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  aspect: "tall" | "wide" | "square";
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    alt: "Wedding ceremony in golden light",
    category: "Wedding",
    aspect: "tall",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    alt: "Couple exchanging vows",
    category: "Wedding",
    aspect: "wide",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    alt: "Portrait in natural light",
    category: "Portrait",
    aspect: "square",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    alt: "Fashion editorial portrait",
    category: "Portrait",
    aspect: "tall",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    alt: "Candid street photography",
    category: "Lifestyle",
    aspect: "square",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    alt: "Professional headshot",
    category: "Portrait",
    aspect: "square",
  },
  {
    id: 7,
    src: "/images/gallery-7.jpg",
    alt: "Camera capturing the moment",
    category: "Lifestyle",
    aspect: "wide",
  },
  {
    id: 8,
    src: "/images/gallery-8.jpg",
    alt: "Wedding reception celebration",
    category: "Wedding",
    aspect: "wide",
  },
  {
    id: 9,
    src: "/images/gallery-9.jpg",
    alt: "Outdoor wedding ceremony",
    category: "Wedding",
    aspect: "tall",
  },
  {
    id: 10,
    src: "/images/gallery-10.jpg",
    alt: "Artistic couple portrait",
    category: "Couple",
    aspect: "square",
  },
  {
    id: 11,
    src: "/images/gallery-11.jpg",
    alt: "Bridal preparation details",
    category: "Wedding",
    aspect: "tall",
  },
  {
    id: 12,
    src: "/images/gallery-12.jpg",
    alt: "Scenic landscape photography",
    category: "Landscape",
    aspect: "wide",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & James",
    role: "Wedding Clients",
    quote:
      "Urji captured our wedding day with such artistry and emotion. Every photo tells a story — we couldn't have asked for a more talented photographer.",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Amina Tesfaye",
    role: "Portrait Session",
    quote:
      "The attention to detail and the way he uses light is extraordinary. My portraits turned out beyond anything I imagined. Truly world-class work.",
    avatar: "AT",
  },
  {
    id: 3,
    name: "David & Maria",
    role: "Engagement Shoot",
    quote:
      "From the first consultation to the final delivery, the entire experience was seamless and professional. The photos are absolutely stunning.",
    avatar: "DM",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];


export interface PortfolioItem {
  id: number;
  category: 'Weddings' | 'Portraits' | 'Events' | 'Nature';
  src: string;
  alt: string;
}

export interface ServicePackage {
  title: string;
  price: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}
   

import type { PortfolioItem, ServicePackage, Testimonial } from './types';

export const portfolioImages: PortfolioItem[] = [
  { id: 1, category: 'Weddings', src: 'https://picsum.photos/id/10/800/600', alt: 'Wedding photo 1' },
  { id: 2, category: 'Portraits', src: 'https://picsum.photos/id/20/800/600', alt: 'Portrait photo 1' },
  { id: 3, category: 'Nature', src: 'https://picsum.photos/id/30/800/600', alt: 'Nature photo 1' },
  { id: 4, category: 'Events', src: 'https://picsum.photos/id/40/800/600', alt: 'Event photo 1' },
  { id: 5, category: 'Weddings', src: 'https://picsum.photos/id/50/800/600', alt: 'Wedding photo 2' },
  { id: 6, category: 'Portraits', src: 'https://picsum.photos/id/60/800/600', alt: 'Portrait photo 2' },
  { id: 7, category: 'Nature', src: 'https://picsum.photos/id/70/800/600', alt: 'Nature photo 2' },
  { id: 8, category: 'Events', src: 'https://picsum.photos/id/80/800/600', alt: 'Event photo 2' },
  { id: 9, category: 'Weddings', src: 'https://picsum.photos/id/90/800/600', alt: 'Wedding photo 3' },
  { id: 10, category: 'Portraits', src: 'https://picsum.photos/id/100/800/600', alt: 'Portrait photo 3' },
  { id: 11, category: 'Nature', src: 'https://picsum.photos/id/110/800/600', alt: 'Nature photo 3' },
  { id: 12, category: 'Events', src: 'https://picsum.photos/id/120/800/600', alt: 'Event photo 3' },
];

export const services: ServicePackage[] = [
  {
    title: 'Portrait Session',
    price: '$450',
    description: 'Perfect for individuals, couples, or families.',
    features: ['1-hour session', '25 high-resolution edited photos', 'Online gallery', '1 location'],
  },
  {
    title: 'Wedding Package',
    price: '$3,200',
    description: 'Comprehensive coverage for your special day.',
    features: ['8 hours of coverage', '2 photographers', '400+ edited photos', 'Engagement session included', 'Custom wedding album'],
  },
  {
    title: 'Event Photography',
    price: '$200/hour',
    description: 'Capture the moments of your corporate or private event.',
    features: ['Minimum 3 hours', 'All viable photos delivered', 'Fast turnaround', 'Online gallery for guests'],
  },
];

export const testimonials: Testimonial[] = [
    {
        quote: "Lucas has an incredible eye for detail. The photos from our wedding were beyond anything we could have imagined. Truly magical!",
        name: 'Sarah & Tom',
        role: 'Wedding Clients',
        image: 'https://picsum.photos/id/21/100/100'
    },
    {
        quote: "The portrait session was so much fun! Lucas made me feel completely at ease, and the results were stunning. Highly recommended.",
        name: 'Jessica Miller',
        role: 'Portrait Client',
        image: 'https://picsum.photos/id/22/100/100'
    },
    {
        quote: "We hired Lucas for our annual corporate event, and the professionalism and quality of work were outstanding. We'll definitely be working with him again.",
        name: 'David Chen',
        role: 'Event Coordinator',
        image: 'https://picsum.photos/id/23/100/100'
    }
];
   
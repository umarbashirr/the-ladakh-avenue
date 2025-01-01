export interface ITravelPackage {
  title: string; // Name of the package
  slug: string;
  short_desc: string;
  overview: string;
  duration: {
    days: number;
    nights: number;
  }; // Duration of the trip
  destination: string;
  highlights: string[]; // List of package highlights
  itinerary: ItineraryItem[]; // Array of daily itinerary details
  image_gallery: string[]; // URL of the package image
  featured_image: string;
  includes: string[];
  excludes: string[];
}

export interface ItineraryItem {
  title: string; // Title of the day
  details: string[]; // Detailed description of the day's activities
}

// Price Tier
interface PriceTier {
  _id: string;
  name: string;
  price: number;
  ticketCategory?: TicketCategory;
}

// Category within a Ticket Section
interface TicketCategory {
  _id: string;
  name: string;
  priceTiers?: PriceTier[];
  ticketSection?: TicketSection;
}

// Ticket Section
interface TicketSection {
  _id: string;
  name: string;
  categories?: TicketCategory[];
  ticketType?: TicketType;
}

// Ticket Type
interface TicketType {
  _id: string;
  name: string;
  ticketSections?: TicketSection[];
  ticket?: Ticket;
}

// Ticket
interface Ticket {
  _id: string;
  name: string;
  startTime: Date; // ISO8601 date string
  state: string; // e.g., "available", "sold-out"
  status: string; // e.g., "on-sale", "off-sale"
  slug: string;
  seatingPlanImageUrl: string;
  htmlContent: string;
  ticketTypes?: TicketType[];
  event?: Event;
  city: City;
}

// City
interface City {
  _id: string;
  name: string;
  slug: string;
  imageUrl: string;
  tickets?: Ticket[];
}

// Event
interface Event {
  _id: string;
  name: string;
  slug: string;
  is_top_event: boolean;
  description: string;
  htmlContent: string;
  imageUrl: string;
  tickets?: Ticket[];
  subcategory?: Subcategory;
}

// Subcategory
interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  events?: Event[];
  category?: Category;
}

// Category
interface Category {
  _id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  subcategories?: Subcategory[];
}

export {
  Category,
  Subcategory,
  Event,
  City,
  Ticket,
  TicketType,
  TicketSection,
  TicketCategory,
  PriceTier,
};

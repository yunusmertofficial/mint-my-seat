import { TopEvents } from "@/containers/TopEventsSection";
import { Category, Event, Ticket } from "@/types/model";
import CategoryWithTopEvents from "@/types/api-models/getAllCategoriesWithTopEvents";

export const categories = [
  {
    id: 1,
    label: "Music",
    href: "/music",
    dropdown: [
      {
        label: "Rock & Pop",
        dropdown: [
          { label: "Los Lobos", href: "/music/rock-and-pop/los-lobos" },
          { label: "ZZ Top", href: "/music/rock-and-pop/zz-top" },
          {
            label: "Collective Soul",
            href: "/music/rock-and-pop/collective-soul",
          },
        ],
      },
      {
        label: "Country and Folk",
        dropdown: [
          { label: "Mali Velasquez", href: "/music/country/mali-velasquez" },
          { label: "Sierra Hull", href: "/music/country/sierra-hull" },
        ],
      },
      {
        label: "Hip-Hop/Rap",
        dropdown: [
          { label: "Drivin N Cryin", href: "/music/hip-hop/drivin-n-cryin" },
          { label: "Finneas", href: "/music/hip-hop/finneas" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Sports",
    type: "dropdownMegaMenu",
    href: "/sports",
    dropdown: [
      {
        label: "Formula 1 (F1)",
        dropdown: [
          { label: "Formula 1", href: "/sports/formula1/formula-1" },
          {
            label: "Canadian Grand Prix",
            href: "/sports/formula1/canadian-grand-prix",
          },
        ],
      },
      {
        label: "NBA",
        dropdown: [
          {
            label: "Los Angeles Lakers",
            href: "/sports/nba/los-angeles-lakers",
          },
          { label: "Boston Celtics", href: "/sports/nba/boston-celtics" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Shows",
    href: "/shows",
    type: "dropdownMegaMenu",
    dropdown: [
      {
        label: "Comedy",
        dropdown: [
          { label: "Chevy Chase", href: "/shows/comedy/chevy-chase" },
          { label: "Jim Gaffigan", href: "/shows/comedy/jim-gaffigan" },
        ],
      },
      {
        label: "Theatre",
        dropdown: [
          { label: "Sheng Wang", href: "/shows/theatre/sheng-wang" },
          { label: "Marlon Wayans", href: "/shows/theatre/marlon-wayans" },
        ],
      },
    ],
  },
];

export const data: Category[] = [
  {
    _id: "1",
    name: "Music",
    slug: "music",
    description: "Events related to music concerts and festivals",
    imageUrl: "/images/music-category.jpg", // Yeni imageUrl alanı
    subcategories: [
      {
        _id: "1-1",
        name: "Rock",
        slug: "rock",
        description: "Rock music concerts",
        imageUrl: "/images/rock-subcategory.jpg", // Yeni imageUrl alanı
        events: [
          {
            _id: "1-1-1",
            name: "Rock Festival 2025",
            slug: "rock-festival-2025",
            is_top_event: true,
            description: "The biggest rock festival of the year",
            imageUrl: "/images/rock-festival.jpg", // Yeni imageUrl alanı
            htmlContent: "<p>Welcome to the Rock Festival!</p>",
            tickets: [
              {
                _id: "ticket-1",
                name: "VIP Ticket",
                startTime: new Date("2025-07-20T19:00:00Z"),
                seatingPlanImageUrl: "/images/seating-plan.jpg",
                state: "available",
                status: "on-sale",
                slug: "vip-ticket",
                htmlContent: "<p>Exclusive access!</p>",
                city: {
                  _id: "city-1",
                  name: "New York",
                  slug: "new-york",
                  imageUrl: "/images/new-york-city.jpg", // Yeni imageUrl alanı
                },
                ticketTypes: [
                  {
                    _id: "ticket-type-1",
                    name: "Standard VIP",
                    ticketSections: [
                      {
                        _id: "ticket-section-1",
                        name: "Front Row",
                        categories: [
                          {
                            _id: "category-1",
                            name: "Premium",
                            priceTiers: [
                              {
                                _id: "price-tier-1",
                                name: "Tier 1",
                                price: 300,
                              },
                              {
                                _id: "price-tier-2",
                                name: "Tier 2",
                                price: 250,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        _id: "1-2",
        name: "Jazz",
        slug: "jazz",
        description: "Jazz music events",
        imageUrl: "/images/jazz-subcategory.jpg", // Yeni imageUrl alanı
        events: [
          {
            _id: "1-2-1",
            name: "Jazz Night 2025",
            slug: "jazz-night-2025",
            description: "A soothing evening of jazz music",
            imageUrl: "/images/jazz-night.jpg", // Yeni imageUrl alanı
            htmlContent: "<p>Relax with jazz music</p>",
            is_top_event: true,
            tickets: [
              {
                _id: "ticket-2",
                name: "VIP Ticket",
                startTime: new Date("2025-07-20T19:00:00Z"),
                state: "available",
                status: "on-sale",
                seatingPlanImageUrl: "/images/seating-plan.jpg",
                slug: "vip-ticket-jazz",
                htmlContent: "<p>VIP Jazz Experience</p>",
                city: {
                  _id: "city-2",
                  name: "Chicago",
                  slug: "chicago",
                  imageUrl: "/images/chicago-city.jpg", // Yeni imageUrl alanı
                },
                ticketTypes: [
                  {
                    _id: "ticket-type-2",
                    name: "VIP Lounge",
                    ticketSections: [
                      {
                        _id: "ticket-section-2",
                        name: "Lounge Area",
                        categories: [
                          {
                            _id: "category-2",
                            name: "Elite",
                            priceTiers: [
                              {
                                _id: "price-tier-3",
                                name: "Tier 1",
                                price: 200,
                              },
                              {
                                _id: "price-tier-4",
                                name: "Tier 2",
                                price: 180,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _id: "2",
    name: "Sports",
    slug: "sports",
    description: "Sports events including football, basketball, and more",
    imageUrl: "/images/sports-category.jpg", // Yeni imageUrl alanı
    subcategories: [
      {
        _id: "2-1",
        name: "Football",
        slug: "football",
        description: "Football matches and events",
        imageUrl: "/images/football-subcategory.jpg", // Yeni imageUrl alanı
        events: [
          {
            _id: "2-1-1",
            name: "Champions League Final",
            is_top_event: false,
            slug: "champions-league-final-2025",
            description: "The biggest football event of the year",
            imageUrl: "/images/champions-league-final.jpg", // Yeni imageUrl alanı
            htmlContent: "<p>Watch the champions fight!</p>",
            tickets: [
              {
                _id: "ticket-3",
                name: "VIP Ticket",
                startTime: new Date("2025-05-30T20:00:00Z"),
                seatingPlanImageUrl: "/images/seating-plan.jpg",
                state: "available",
                status: "on-sale",
                slug: "vip-ticket-football",
                htmlContent: "<p>Enjoy the match in style!</p>",
                city: {
                  _id: "city-3",
                  name: "London",
                  slug: "london",
                  imageUrl: "/images/london-city.jpg", // Yeni imageUrl alanı
                },
                ticketTypes: [
                  {
                    _id: "ticket-type-3",
                    name: "Premium",
                    ticketSections: [
                      {
                        _id: "ticket-section-3",
                        name: "Skybox",
                        categories: [
                          {
                            _id: "category-3",
                            name: "Luxury",
                            priceTiers: [
                              {
                                _id: "price-tier-5",
                                name: "Tier 1",
                                price: 1000,
                              },
                              {
                                _id: "price-tier-6",
                                name: "Tier 2",
                                price: 800,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getTicketDetailsBySlug(slug: string): Ticket | null {
  for (const category of data) {
    for (const subcategory of category.subcategories || []) {
      for (const event of subcategory.events || []) {
        for (const ticket of event.tickets || []) {
          if (ticket.slug === slug) {
            return {
              ...ticket,
              ticketTypes: (ticket.ticketTypes || []).map((ticketType) => ({
                ...ticketType,
                sections: (ticketType.ticketSections || []).map((section) => ({
                  ...section,
                  categories: (section.categories || []).map((category) => ({
                    ...category,
                    priceTiers: category.priceTiers || [],
                  })),
                })),
              })),
              city: ticket.city,
              event: {
                ...event,
                subcategory: {
                  ...subcategory,
                  category: {
                    ...category,
                  },
                },
              },
            };
          }
        }
      }
    }
  }
  return null; // Eğer slug bulunamazsa null döner
}

//maks 3 tane is_top_event olan etkinlik alınacak
export function getTopEvents() {
  const topEvents: Event[] = [];
  for (const category of data) {
    for (const subcategory of category.subcategories || []) {
      for (const event of subcategory.events || []) {
        if (event.is_top_event && topEvents.length < 3) {
          topEvents.push(event);
        }
      }
    }
  }
  return topEvents;
}

export const getCategory = async (slug: string) => {
  const category = data.find((category) => category.slug === slug);
  const getTopEventsByCategory = (slug: string) => {
    const category = data.find((category) => category.slug === slug);
    if (!category) {
      return [];
    }
    const topEvents: Event[] = [];
    for (const subcategory of category.subcategories || []) {
      for (const event of subcategory.events || []) {
        if (event.is_top_event) {
          topEvents.push(event);
        }
      }
    }
    return topEvents;
  };
  return category
    ? {
        ...category,
        topEvents: getTopEventsByCategory(slug),
      }
    : null;
};

export const getCategoryWithTopEvents = async (slug: string) => {
  const category = data.find((category) => category.slug === slug);
  const getTopEventsByCategory = (slug: string) => {
    const category = data.find((category) => category.slug === slug);
    if (!category) {
      return [];
    }
    const topEvents: Event[] = [];
    for (const subcategory of category.subcategories || []) {
      for (const event of subcategory.events || []) {
        if (event.is_top_event) {
          topEvents.push(event);
        }
      }
    }
    return topEvents;
  };
  return category
    ? {
        ...category,
        topEvents: getTopEventsByCategory(slug),
      }
    : null;
};

export const getSubcategory = async (
  categorySlug: string,
  subcategorySlug: string
) => {
  const category = data.find((category) => category.slug === categorySlug);
  if (!category) {
    return null;
  }
  const subcategory = category.subcategories?.find(
    (subcategory) => subcategory.slug === subcategorySlug
  );

  if (!subcategory) {
    return null;
  }
  const getTopEventsBySubcategory = (
    categorySlug: string,
    subcategorySlug: string
  ) => {
    const category = data.find((category) => category.slug === categorySlug);
    if (!category) {
      return [];
    }
    const subcategory = category.subcategories?.find(
      (subcategory) => subcategory.slug === subcategorySlug
    );
    if (!subcategory) {
      return [];
    }
    const topEvents: TopEvents[] = [];
    for (const event of subcategory.events || []) {
      if (event.is_top_event) {
        topEvents.push({
          _id: event._id,
          name: event.name,
          slug: event.slug,
          description: event.description,
          imageUrl: event.imageUrl,
        });
      }
    }
    return topEvents;
  };
  return {
    ...subcategory,
    category,
    topEvents: getTopEventsBySubcategory(categorySlug, subcategorySlug),
  };
};

export const getSubcategoryWithTopEvents = (
  categorySlug: string,
  subcategorySlug: string
) => {
  const category = data.find((category) => category.slug === categorySlug);
  if (!category) {
    return null;
  }
  const subcategory = category.subcategories?.find(
    (subcategory) => subcategory.slug === subcategorySlug
  );

  if (!subcategory) {
    return null;
  }
  const getTopEventsBySubcategory = (
    categorySlug: string,
    subcategorySlug: string
  ) => {
    const category = data.find((category) => category.slug === categorySlug);
    if (!category) {
      return [];
    }
    const subcategory = category.subcategories?.find(
      (subcategory) => subcategory.slug === subcategorySlug
    );
    if (!subcategory) {
      return [];
    }
    const topEvents: TopEvents[] = [];
    for (const event of subcategory.events || []) {
      if (event.is_top_event) {
        topEvents.push({
          _id: event._id,
          name: event.name,
          slug: event.slug,
          description: event.description,
          imageUrl: event.imageUrl,
        });
      }
    }
    return topEvents;
  };
  return {
    ...subcategory,
    category,
    topEvents: getTopEventsBySubcategory(categorySlug, subcategorySlug),
  };
};

export const getTopEventsByCategory = (slug: string) => {
  const category = data.find((category) => category.slug === slug);
  if (!category) {
    return [];
  }
  const topEvents: TopEvents[] = [];
  for (const subcategory of category.subcategories || []) {
    for (const event of subcategory.events || []) {
      if (event.is_top_event) {
        topEvents.push({
          _id: event._id,
          name: event.name,
          slug: event.slug,
          description: event.description,
          imageUrl: event.imageUrl,
        });
      }
    }
  }
  return topEvents;
};

export const getAllCategories = async (): Promise<Category[]> => {
  return data;
};

export const getAllCategoriesWithTopEvents =
  async (): Promise<CategoryWithTopEvents> => {
    return {
      categories: data.map((category) => ({
        ...category,
        events:
          category.subcategories
            ?.flatMap((subcategory) =>
              subcategory.events?.map((event) => ({
                ...event,
              }))
            )
            .filter((item) => item !== undefined) || [],
      })),
      topEvents: getTopEvents(),
    };
  };

export const getAllSubcategories = async () => {
  return data.flatMap(
    (category) =>
      category.subcategories?.map((subcategory) => ({
        ...subcategory,
        category,
      })) || []
  );
};

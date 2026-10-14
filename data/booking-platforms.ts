// ============================================================
// ANGELS COURT HOTEL AND SUITE — Verified Booking Platforms
// ============================================================

export interface BookingPlatform {
  id: string;
  name: string;
  description: string;
  url: string;
  badge?: string;
  isDirect?: boolean;
  status: "verified" | "pending_confirmation";
  category: "direct" | "primary" | "aggregator" | "regional";
}

export const bookingPlatforms: BookingPlatform[] = [
  {
    id: "direct",
    name: "Book Direct (Hotel Reception)",
    description: "Best direct assistance, custom arrangements & instant confirmation via call or WhatsApp",
    url: "/contact",
    badge: "Recommended",
    isDirect: true,
    status: "verified",
    category: "direct",
  },
  {
    id: "google-hotels",
    name: "Google Hotels",
    description: "Compare rates & view Google verified property details, reviews & location",
    url: "https://www.google.com.ng/travel/hotels/entity/ChoI4MOy3ZfMvNaMARoNL2cvMTFqMTN5cnpxbBAB",
    badge: "Verified Listing",
    status: "verified",
    category: "primary",
  },
  {
    id: "expedia",
    name: "Expedia",
    description: "Official property listing on Expedia with photos, policies & verified amenities",
    url: "https://www.expedia.com/Abuja-Hotels-Angels-Court-Hotel-And-Suite.h114291851.Hotel-Information",
    badge: "Official Listing",
    status: "verified",
    category: "primary",
  },
  {
    id: "hotels-com",
    name: "Hotels.com",
    description: "Expedia Group partner listing with member rewards & verified property data",
    url: "https://www.hotels.com/ho3658339232",
    badge: "Expedia Group",
    status: "verified",
    category: "primary",
  },
  {
    id: "crystalbeds",
    name: "Crystalbeds Africa",
    description: "Nigerian hotel booking portal with local rates and bank transfer / card payment",
    url: "https://www.crystalbeds.com.ng/hotels/angels-court-home/iQb2ClI",
    badge: "Local Partner",
    status: "verified",
    category: "regional",
  },
  {
    id: "easemytrip",
    name: "EaseMyTrip",
    description: "International travel portal listing for Angels Court Homes Limited, Kubwa",
    url: "https://www.easemytrip.com/hotels/angels-court-homes-limited-8927372/",
    status: "verified",
    category: "aggregator",
  },
  {
    id: "jetstar",
    name: "Jetstar Hotels",
    description: "Jetstar global travel network property listing",
    url: "https://www.jetstar.com/au/en/hotels/properties/1207297-angels-court-hotel-and-suite",
    status: "verified",
    category: "aggregator",
  },
  {
    id: "goibibo",
    name: "Goibibo",
    description: "Goibibo travel listing for Angels Court Homes Limited, Bwari/Kubwa",
    url: "https://www.goibibo.com/hotels-international/rooms-of-angels-court-homes-limited-hotel-in-bwari-4813447299388618312/",
    status: "verified",
    category: "aggregator",
  },
  // Note: Agoda URL currently redirects to general city directory so kept out of primary list until direct room mapping is refreshed
  {
    id: "agoda",
    name: "Agoda",
    description: "Agoda listing — awaiting direct property page confirmation",
    url: "https://www.agoda.com/angels-court-hotel-and-suite/hotel/abuja-ng.html",
    status: "pending_confirmation",
    category: "aggregator",
  },
];

export const publicBookingPlatforms = bookingPlatforms.filter(
  (p) => p.status === "verified"
);

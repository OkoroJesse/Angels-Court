// ============================================================
// ANGELS COURT HOTEL AND SUITE — Central Configuration
// ============================================================

export const hotelConfig = {
  name: "Angels Court Hotel and Suite",
  shortName: "Angels Court",
  tagline: "Your Dream of Paradise",
  description:
    "Angels Court Hotel and Suite offers refined accommodation at No. 5 Angels Court Close, Off Austin Emumejakpor Street, Just Before Royal Champions Assembly, Chikakore, Kubwa, Abuja, Nigeria. Modern comfort meets warm Nigerian hospitality.",

  // ── Contact Details ──────────────────────────────────────────
  phone: "0706267441",
  phones: [
    { label: "Main Line", number: "0706267441", tel: "0706267441" },
    { label: "Line 2", number: "08184190038", tel: "08184190038" },
    { label: "Line 3", number: "08033205987", tel: "08033205987" },
    { label: "Line 4", number: "08078298499", tel: "08078298499" },
  ],
  whatsapp: "2348184190038",
  whatsappMessage:
    "Hello Angels Court Hotel and Suite, I would like to enquire about booking a room.",
  email: "angelscourthomes@gmail.com",
  website: null as string | null,

  // ── Location ────────────────────────────────────────────────
  address: {
    street: "No. 5 Angels Court Close",
    landmark: "Off Austin Emumejakpor Street, Just Before Royal Champions Assembly",
    area: "Chikakore, Kubwa",
    city: "Abuja",
    state: "Federal Capital Territory",
    country: "Nigeria",
    postalCode: "901101",
    fullAddress:
      "No. 5 Angels Court Close, Off Austin Emumejakpor Street, Just Before Royal Champions Assembly, Chikakore, Kubwa, Abuja, Nigeria",
    googleMapsUrl:
      "https://www.google.com/maps/search/5+Angels+Court+Close+Chikakore+Kubwa+Abuja+Nigeria",
  },

  // ── Booking ──────────────────────────────────────────────────
  bookingUrl:
    "https://www.expedia.com/Abuja-Hotels-Angels-Court-Hotel-And-Suite.h114291851.Hotel-Information",
  bookingUrlAlternative:
    "https://www.crystalbeds.com.ng/hotels/angels-court-home/iQb2ClI",
  bookingFallbackMessage: "Contact us directly to reserve your stay.",

  // ── Social Media ────────────────────────────────────────────
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    twitter: null as string | null,
  },

  // ── Brand Assets ────────────────────────────────────────────
  logo: "/images/logo.jpg",
  images: {
    exteriorDay: "/images/exterior-day-hd.jpg",
    exteriorNight: "/images/exterior-night-hd.jpg",
  },

  // ── SEO ──────────────────────────────────────────────────────
  siteUrl: "https://angelscourthotel.com",
  ogImage: "/images/exterior-night-hd.jpg",
};

export type HotelConfig = typeof hotelConfig;

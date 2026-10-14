// ============================================================
// ANGELS COURT HOTEL AND SUITE — Room Data
// Based on Expedia listing research + supplied photographs.
// Do not add unverified prices, sizes, or bed counts.
// ============================================================

export interface Room {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  gallery: string[];
  // Verified from Expedia listing categories
  bedType: string | null;
  maxOccupancy: number | null;
  size: string | null;
  priceFrom: string | null; // null = unverified
  bookingUrl: string | null; // null = use hotelConfig.bookingUrl
  amenities: string[];
}

export const rooms: Room[] = [
  {
    id: "deluxe-double-patio",
    slug: "deluxe-double-room",
    name: "Deluxe Double Room with Patio",
    shortDescription:
      "A well-appointed double room with a private patio — warm tones, velvet headboard, and all the comforts you need.",
    longDescription:
      "The Deluxe Double Room at Angels Court Hotel and Suite combines warm interior styling with everyday comfort. Featuring a king-size double bed with a classic velvet headboard, air conditioning, and a private patio, this room is an excellent choice for couples or solo travellers looking for quality accommodation in Kubwa, Abuja. Natural light fills the space through draped windows, creating a relaxed and inviting atmosphere.",
    image: "/images/rooms/room-1.png",
    gallery: ["/images/rooms/room-1.png"],
    bedType: "King-size double bed",
    maxOccupancy: 2,
    size: null,
    priceFrom: null,
    bookingUrl: null, // falls back to hotelConfig.bookingUrl
    amenities: [
      "Air conditioning",
      "Private patio",
      "En-suite bathroom",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Wardrobe",
      "Desk / workspace",
      "Daily housekeeping",
    ],
  },
  {
    id: "classic-double-patio",
    slug: "classic-double-room",
    name: "Classic Double Room with Patio",
    shortDescription:
      "Understated comfort with a generous double bed, clean lines, and access to the patio.",
    longDescription:
      "The Classic Double Room offers a comfortable and quiet retreat within Angels Court Hotel and Suite. The room features a double bed with a tall velvet headboard, neutral walls, air conditioning, and a natural-light window. Ideal for guests seeking a clean, no-fuss stay in Kubwa, Abuja, this room provides easy access to the hotel's patio terrace.",
    image: "/images/rooms/room-2.jpg",
    gallery: ["/images/rooms/room-2.jpg"],
    bedType: "Double bed",
    maxOccupancy: 2,
    size: null,
    priceFrom: null,
    bookingUrl: null,
    amenities: [
      "Air conditioning",
      "Patio access",
      "En-suite bathroom",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Daily housekeeping",
    ],
  },
  {
    id: "deluxe-suite-patio",
    slug: "deluxe-suite",
    name: "Deluxe Suite with Patio",
    shortDescription:
      "Elevated comfort and space — a spacious suite with premium furnishings and a private patio.",
    longDescription:
      "The Deluxe Suite at Angels Court Hotel and Suite offers a more generous and refined stay. Decorated with warm timber accents, a statement velvet headboard, recessed ceiling lights, and layered blinds, this suite provides a premium hotel experience in the heart of Kubwa, Abuja. The private patio extends your living space outdoors, making it ideal for longer stays, business trips, or a luxurious weekend getaway.",
    image: "/images/rooms/room-3.jpg",
    gallery: ["/images/rooms/room-3.jpg"],
    bedType: "King-size double bed",
    maxOccupancy: 2,
    size: null,
    priceFrom: null,
    bookingUrl: null,
    amenities: [
      "Air conditioning",
      "Private patio",
      "En-suite bathroom",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Telephone",
      "Wardrobe",
      "Desk / workspace",
      "Daily housekeeping",
    ],
  },
];

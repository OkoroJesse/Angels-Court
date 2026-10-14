// ============================================================
// ANGELS COURT — Gallery Image Definitions
// Add entries as photographs are supplied.
// ============================================================

export type GalleryCategory =
  | "exterior"
  | "rooms"
  | "dining"
  | "pool"
  | "facilities"
  | "interiors";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  /** Optional: used for masonry sizing hints */
  aspectRatio?: "portrait" | "landscape" | "square";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "ext-night-1",
    src: "/images/exterior-night-hd.jpg",
    alt: "Angels Court Hotel illuminated at night with blue LED accent lighting",
    category: "exterior",
    aspectRatio: "portrait",
  },
  {
    id: "ext-day-1",
    src: "/images/exterior-day-hd.jpg",
    alt: "Angels Court Hotel exterior during the day showing the modern facade",
    category: "exterior",
    aspectRatio: "landscape",
  },
  {
    id: "room-deluxe-double",
    src: "/images/rooms/room-1.png",
    alt: "Deluxe Double Room with Patio — king-size bed with velvet headboard and draped windows",
    category: "rooms",
    aspectRatio: "landscape",
  },
  {
    id: "room-classic-double",
    src: "/images/rooms/room-2.jpg",
    alt: "Classic Double Room with Patio — clean double bed with velvet headboard",
    category: "rooms",
    aspectRatio: "landscape",
  },
  {
    id: "room-deluxe-suite",
    src: "/images/rooms/room-3.jpg",
    alt: "Deluxe Suite with Patio — spacious room with timber accents and recessed lighting",
    category: "rooms",
    aspectRatio: "landscape",
  },
  {
    id: "dining-1",
    src: "/images/dining/dining-1.jpg",
    alt: "Angels Court Hotel dining hall — comfortable indoor restaurant with draped tables",
    category: "dining",
    aspectRatio: "portrait",
  },
  {
    id: "pool-1",
    src: "/images/pool/pool-1.png",
    alt: "Angels Court Hotel outdoor swimming pool with water fountain and blue facade",
    category: "pool",
    aspectRatio: "landscape",
  },
  {
    id: "pool-2",
    src: "/images/pool/pool-2.png",
    alt: "Angels Court Hotel poolside terrace and upper balcony lounge overlooking the pool",
    category: "pool",
    aspectRatio: "portrait",
  },
];

export const galleryCategories: { value: GalleryCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "exterior", label: "Exterior" },
  { value: "rooms", label: "Rooms" },
  { value: "dining", label: "Dining" },
  { value: "pool", label: "Pool" },
  { value: "facilities", label: "Facilities" },
];

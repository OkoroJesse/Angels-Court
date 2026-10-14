// ============================================================
// ANGELS COURT — Amenities
// Source: Expedia listing research. Only confirmed features included.
// ============================================================

import { Wifi, Car, Clock, UtensilsCrossed, Waves, Sun, Coffee, Briefcase } from "lucide-react";

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string; // matches key in icon map in experience/about pages
}

export const amenities: Amenity[] = [
  {
    id: "pool",
    title: "Outdoor Swimming Pool",
    description: "Relax and unwind in our outdoor pool set within the hotel grounds.",
    icon: "Waves",
  },
  {
    id: "restaurant",
    title: "On-Site Restaurant",
    description: "Enjoy meals in our comfortable on-site restaurant throughout your stay.",
    icon: "UtensilsCrossed",
  },
  {
    id: "wifi",
    title: "Free Wi-Fi",
    description: "Complimentary high-speed wireless internet access throughout the property.",
    icon: "Wifi",
  },
  {
    id: "parking",
    title: "Free Self-Parking",
    description: "Secure on-site self-parking at no additional charge for all guests.",
    icon: "Car",
  },
  {
    id: "frontdesk",
    title: "24-Hour Front Desk",
    description: "Our reception team is on hand around the clock to assist you.",
    icon: "Clock",
  },
  {
    id: "patio",
    title: "Patio & Terrace",
    description: "Enjoy outdoor spaces and private patio access from select rooms.",
    icon: "Sun",
  },
  {
    id: "workspace",
    title: "Workspace",
    description: "Dedicated workspace available in-room for business travellers.",
    icon: "Briefcase",
  },
  {
    id: "housekeeping",
    title: "Daily Housekeeping",
    description: "Our team ensures your room is freshened and serviced daily.",
    icon: "Coffee",
  },
];

export const SITE = {
  name: "Lumière",
  tagline: "Quiet luxury, perfectly placed",
  description: "A boutique seafront retreat where every suite faces the sea, the kitchen sources within 40km, and the city never finds you.",
  address: "12 Seafront Promenade, Old Town",
  blurb: "A boutique retreat for quiet travellers.",
} as const;

export const NAV_LINKS = [
  { label: "Rooms", href: "/rooms" },
  { label: "Spa", href: "/spa" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Stay",
    links: [
      { label: "Rooms & suites", href: "/rooms" },
      { label: "Offers", href: "#" },
      { label: "Gift cards", href: "#" },
      { label: "Group bookings", href: "#" },
    ],
  },
  {
    title: "Hotel",
    links: [
      { label: "Spa & thermal", href: "/spa" },
      { label: "Dining", href: "/dining" },
      { label: "Gallery", href: "/gallery" },
      { label: "Sustainability", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our story", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Twitter", href: "#", icon: "twitter" },
] as const;

export type SocialIconName = (typeof SOCIAL_LINKS)[number]["icon"];

export const FOOTER_CTA = {
  heading: "Your quietest night starts here.",
  body: "Reserve direct for the best rate, a late checkout, and a welcome drink on the terrace.",
  action: { label: "Book your stay", href: "/booking" },
} as const;

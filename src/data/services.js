// Generates a clean slug automatically
const makeSlug = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export const servicesData = [
  {
    category: "Demolition / Cleanup / Junk Removal",
    slug: makeSlug("Demolition / Cleanup / Junk Removal"),
    description:
      "Our demolition and cleanup services help prepare your space for renovations or remove unwanted items efficiently. We handle everything from estate cleanouts to garage cleanup, ensuring a safe and organized site for your next project.",
    items: ["Estate cleanup", "Demolition for renovations", "Garage cleanup"],
    images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "Flooring",
    slug: makeSlug("Flooring"),
    description:
      "We provide comprehensive flooring solutions, including removal, installation, and repair. From luxury vinyl to hardwood and laminate, we ensure your floors are durable, beautiful, and installed to perfection.",
    items: [
      "Flooring removal",
      "Flooring install",
      "Luxury Vinyl",
      "Laminate",
      "Hardwood",
      "All flooring repair",
    ],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "Drywall",
    slug: makeSlug("Drywall"),
    description:
      "Our drywall services cover installation, mudding, taping, sanding, and painting. We also handle specialty projects like walk-in closet remodels. We ensure smooth, professional finishes for every wall and ceiling.",
    items: ["Install", "Mudding", "Taping", "Sanding", "Paint", "Walk-in closet remodel"],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "Paint",
    slug: makeSlug("Paint"),
    description:
      "We offer whole-home painting services, bringing color and vibrancy to your interior or exterior spaces. Our team pays attention to detail to achieve smooth finishes and precise edges.",
    items: ["Whole home painting"],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "Garage Finishing",
    slug: makeSlug("Garage Finishing"),
    description:
      "Transform your garage into a functional and organized space. We handle drywall, custom storage solutions, and painting, giving you a clean and practical garage you'll love to use.",
    items: ["Drywall", "Custom storage", "Painting"],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "Basement",
    slug: makeSlug("Basement"),
    description:
      "Our basement renovation services cover everything from repairs to complete finishing. We help you maximize your basement’s potential for living space, entertainment, or storage.",
    items: ["All basement related repairs and renovations"],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "Lighting",
    slug: makeSlug("Lighting"),
    description:
      "Upgrade your home’s lighting with our professional fixture installation and pot light replacements. We ensure efficient, stylish, and safe lighting for every room.",
    items: ["Light fixture upgrades / replacements", "Pot light replacements"],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "Doors",
    slug: makeSlug("Doors"),
    description:
      "We handle everything related to doors, from hanging and adjusting to installing handles and locks. Our work ensures your doors function smoothly and enhance your home’s aesthetic.",
    items: ["Door hanging", "Door handles", "Door locks"],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "TV Mounting",
    slug: makeSlug("TV Mounting"),
    description:
      "Our TV mounting services provide a clean and secure installation, ensuring your television is positioned perfectly and safely mounted on any wall type.",
    items: ["TV mounting"],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "Appliance Removals",
    slug: makeSlug("Appliance Removals"),
    description:
      "We safely remove old appliances from your home, making way for new installations. Our team handles bulky items efficiently, keeping your space clean and organized.",
    items: ["Appliance removals"],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "Home Cleaning",
    slug: makeSlug("Home Cleaning"),
    description:
      "Our home cleaning services help maintain a fresh and hygienic environment. We tackle every corner with attention to detail, from routine cleaning to post-renovation touch-ups.",
    items: ["Home cleaning"],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
  {
    category: "Cabinet Refinishing",
    slug: makeSlug("Cabinet Refinishing"),
    description:
      "Refresh your cabinetry with our refinishing services. We repair, sand, and refinish cabinet doors to bring them back to life with a smooth, polished appearance.",
    items: ["Cabinet door refinishing"],
        images: [
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364203/IMG_9908_hmdlz4.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364201/IMG_9557_n4ivrf.jpg",
  "https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg",
],
  },
];
import { ColorPalette } from "@/lib/types";
import { Fabric } from "@/lib/types";

export const sampleFabrics: Fabric[] = [
  {
    id: "1",
    name: "Egyptian Cotton",
    description:
      "Luxurious, soft, and breathable cotton fabric known for its long fibers and durability.",
    category: "Cotton",
    imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
    texture: "Smooth and soft",
    color: "White",
    availability: "In Stock",
    weight: 200,
    width: 150,
  },
  {
    id: "2",
    name: "Mulberry Silk",
    description:
      "Premium silk fabric known for its smooth texture and natural sheen.",
    category: "Silk",
    imageUrl: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26",
    texture: "Smooth and lustrous",
    color: "Ivory",
    availability: "Limited Stock",
    weight: 80,
    width: 140,
  },
  {
    id: "3",
    name: "Merino Wool",
    description:
      "Fine and soft wool fabric known for its warmth and moisture-wicking properties.",
    category: "Wool",
    imageUrl: "https://images.unsplash.com/photo-1603251579431-8041402bdeda",
    texture: "Soft and slightly fuzzy",
    color: "Light Gray",
    availability: "In Stock",
    weight: 250,
    width: 160,
  },
  // Add more sample fabrics here...
];

export const samplePalettes: ColorPalette[] = [
  {
    id: "1",
    name: "Sunset Vibes",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FDCB6E", "#6C5CE7"],
    tags: ["warm", "vibrant", "summer"],
  },
  {
    id: "2",
    name: "Forest Tones",
    colors: ["#2D3436", "#636E72", "#B2BEC3", "#DFE6E9", "#6AB04C"],
    tags: ["nature", "earthy", "calm"],
  },
  {
    id: "3",
    name: "Pastel Dream",
    colors: ["#FAD7A1", "#E6B0AA", "#D7BDE2", "#A9CCE3", "#A3E4D7"],
    tags: ["soft", "soothing", "spring"],
  },
];

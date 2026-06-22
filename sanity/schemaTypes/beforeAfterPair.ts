import { defineField, defineType } from "sanity";

// Vehicle tiers mirror the pricing page so the gallery and pricing stay in sync.
// Ordered so Studio dropdown matches the page order: Cars → SUV → Mini Van.
export const VEHICLE_TYPES = [
  { title: "Cars", value: "car" },
  { title: "SUV", value: "suv" },
  { title: "Mini Van", value: "minivan" },
] as const;

export const beforeAfterPair = defineType({
  name: "beforeAfterPair",
  title: "Before & After",
  type: "document",
  groups: [
    { name: "media", title: "Photos", default: true },
    { name: "content", title: "Details" },
  ],
  fields: [
    defineField({
      name: "vehicleType",
      title: "Vehicle Type",
      type: "string",
      group: "content",
      description:
        "Which vehicle tier this transformation belongs to. Controls which section it appears in on the Before & After page.",
      options: {
        list: [...VEHICLE_TYPES],
        layout: "radio",
      },
      initialValue: "car",
      validation: (Rule) => Rule.required().error("Pick a vehicle type so this shows up in the right gallery section."),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      group: "content",
      description: "Short label shown below the slider (e.g. 'Full interior detail').",
    }),
    defineField({
      name: "before",
      title: "Before Photo",
      type: "image",
      group: "media",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "after",
      title: "After Photo",
      type: "image",
      group: "media",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      group: "content",
      description: "Lower numbers appear first within the vehicle section.",
    }),
  ],
  orderings: [
    {
      title: "Vehicle Type, then Display Order",
      name: "vehicleThenOrder",
      by: [
        { field: "vehicleType", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "description", media: "after", vehicleType: "vehicleType" },
    prepare({ title, media, vehicleType }) {
      const label = VEHICLE_TYPES.find((v) => v.value === vehicleType)?.title;
      return {
        title: title || "Untitled pair",
        subtitle: label ? `Vehicle: ${label}` : "No vehicle type set",
        media,
      };
    },
  },
});

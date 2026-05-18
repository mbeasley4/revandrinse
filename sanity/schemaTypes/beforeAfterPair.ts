import { defineField, defineType } from "sanity";

export const beforeAfterPair = defineType({
  name: "beforeAfterPair",
  title: "Before & After",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Short label shown below the slider (e.g. 'Full interior detail')",
    }),
    defineField({
      name: "before",
      title: "Before Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "after",
      title: "After Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "description", media: "after" },
    prepare({ title, media }) {
      return { title: title ?? "Untitled pair", media };
    },
  },
});

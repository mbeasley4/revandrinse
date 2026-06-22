import type { StructureResolver } from "sanity/structure";
import { VEHICLE_TYPES } from "./schemaTypes/beforeAfterPair";

// Organized desk: all pairs, plus one filtered view per vehicle tier so the
// editor can manage Cars / SUV / Mini Van galleries independently.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Before & After")
        .child(
          S.list()
            .title("Before & After")
            .items([
              S.listItem()
                .title("All Transformations")
                .child(
                  S.documentTypeList("beforeAfterPair")
                    .title("All Transformations")
                    .defaultOrdering([
                      { field: "vehicleType", direction: "asc" },
                      { field: "order", direction: "asc" },
                    ])
                ),
              S.divider(),
              ...VEHICLE_TYPES.map((v) =>
                S.listItem()
                  .title(v.title)
                  .child(
                    S.documentList()
                      .title(v.title)
                      .filter('_type == "beforeAfterPair" && vehicleType == $vt')
                      .params({ vt: v.value })
                      .defaultOrdering([{ field: "order", direction: "asc" }])
                  )
              ),
              S.divider(),
              S.listItem()
                .title("Needs Vehicle Type")
                .child(
                  S.documentList()
                    .title("Needs Vehicle Type")
                    .filter('_type == "beforeAfterPair" && !defined(vehicleType)')
                ),
            ])
        ),
    ]);

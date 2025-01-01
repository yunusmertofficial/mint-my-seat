import { Subcategory } from "../model"; // Subcategory import edilmeli
import { TopEvents } from "../model"; // TopEvents import edilmeli

export interface GetSubCategoryWithTopEvents extends Subcategory {
  topEvents: TopEvents[]; // topEvents eklenmiş
}

export default GetSubCategoryWithTopEvents;

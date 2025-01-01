import { Category, Event } from "../model";

interface ModifiedCategory extends Category {
  events: Event[];
}

interface CategoryWithTopEvents {
  categories: ModifiedCategory[];
  topEvents: Event[];
}

export default CategoryWithTopEvents;
export { ModifiedCategory, Event };

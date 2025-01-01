import { Category, Event } from "../model";

interface GetCategoryWithTopEvents extends Category {
  topEvents: Event[];
}

export default GetCategoryWithTopEvents;

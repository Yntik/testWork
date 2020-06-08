import { InMemoryDbService } from "angular-in-memory-web-api";
import { Event } from "../../store/models";

export class InMemEventService implements InMemoryDbService {
    createDb() {
        const events: Event[] = [
            {
                id: 1,
                name: "Dinner",
                address: "Windstorm",
                date: "2001-06-08",
                picture: "Windstorm",
            },
            {
                id: 2,
                name: "Project Daily meeting",
                address: "Windstorm",
                date: "2001-06-08",
                picture: "Windstorm",
            },
            {
                id: 3,
                name: "English Speaking Club",
                address: "Windstorm",
                date: "2001-06-08",
                picture: "Windstorm",
            }
        ];
        return { events };
    }
}

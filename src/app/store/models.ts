export interface Event {
    id?: number,
    name: string,
    address: string,
    date: string,
    picture: string
}

export interface EventsState {
    events: Event[]
}
export interface Event {
    name: string,
    address: string,
    date: Date,
    picture: string
}

export interface EventsState {
    events: Event[]
}
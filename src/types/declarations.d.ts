export type Event = {
    id: number;
    date: string;
    name: string;
    location: string;
    description: string;
    type: string;
    priority: string;
};

export interface Location {
    id: string;
    name?: string | null;
    address?: string | null;
    categories: string[];
    lon: number;
    lat: number;
    prioritized: boolean;
    rating?: number | null;
    hours?: { [key: string]: string }[] | null;
    priceLevel?: string | null;
    priceMin?: number | null;
    priceMax?: number | null;
    allowsDogs?: boolean | null;
    goodForGroups?: boolean | null;
    goodForChildren?: boolean | null;
}

export interface UpdatePriorityParams {
    id: string;
    prioritized: boolean;
}

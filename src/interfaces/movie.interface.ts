export interface IMovie {
    id: number;
    genre_ids: number[];
    title: string;
    next_page: boolean;
    prev_page: boolean;
    page: any
}
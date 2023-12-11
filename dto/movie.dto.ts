export type ResponseType = 'True' | 'False'

export interface Movie {
    Title: string;
    Year: number;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer:	string;
    Actors:	string;
    Plot: string;
    Language: string;
    Country: string;
    Awards:	string;
    Poster:	number;
    imdbRating:	number;
    imdbID:	string;
    BoxOffice: string;
    Response: ResponseType
}

export interface IResponse<R> {
    Response: ResponseType,
    Search: R
    Error: string;
}
import { NextRouter } from 'next/router';
import { ParsedUrlQuery, ParsedUrlQueryInput } from 'querystring';

export interface UseRouterReturn<T> {
    isReady: boolean;
    router: NextRouter;
    currentPath: string;
    query: ParsedUrlQuery & T;
    setQuery: (query: ParsedUrlQueryInput & T) => void;
    updateQuery: (query: ParsedUrlQueryInput & Partial<T>) => void;
    redirect: (path: string, query?: ParsedUrlQueryInput & T) => void;
}

import { ReactNode } from 'react';
import { Item } from '@interfaces/data';

export type ContentProps = {
    isMobile: boolean;
    isNavDropdownOpen: boolean;
    toggleNavDropdown: () => void;
    navDropdown: ReactNode;
};

export type RowProps<T extends Item> = {
    item: T;
    [key: string]: any;
};

export type DetailsProps<T extends Item> = {
    item: T;
};

export type BaseQuery = {
    view: string;
    slug?: string;
};

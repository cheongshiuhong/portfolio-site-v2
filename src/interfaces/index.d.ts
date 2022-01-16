import { ReactNode } from 'react';

export type WrapperProps = {
    children?: ReactNode;
};

export interface IconProps {
    [key: string]: T;
}

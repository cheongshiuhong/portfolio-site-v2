import { WrapperProps } from '@interfaces/index';

export interface DialogProps extends WrapperProps {
    isOpen: boolean,
    close: () => void;
}

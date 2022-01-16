import { ReactNode } from 'react';
import * as rdd from 'react-device-detect';

export interface DeviceProps {
    children: (props: typeof rdd) => ReactNode
}

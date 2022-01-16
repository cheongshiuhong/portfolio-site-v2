// Types
import { DeviceProps } from '@interfaces/general/Device';

// Libraries
import { FC, ReactElement } from 'react';
import * as rdd from 'react-device-detect';

/**
 * The device component to faciliate client-side detecting
 *
 * @param {DeviceProps} - The device prosp
 * @returns {ReactElement}
 */
const Device = (props: DeviceProps): ReactElement => {
  return <div className="device-layout-component">{props.children(rdd)}</div>
};

export default Device;

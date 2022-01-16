// Types
import { BadgeProps } from '@interfaces/general/Badge';

// Library
import React, { FC, ReactElement } from 'react';

const COLORS_MAPPING: Record<string, string> = {
    green: 'bg-green-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500'
}

/**
 * The Badge Component
 * 
 * @param {BadgeProps} props - The props to set the design of the badge.
 * @returns {ReactElement} - The badge component.
 */
const Badge: FC<BadgeProps> = ({ color, children }: BadgeProps): ReactElement => {
    return (
        <div className={`px-1.5 py-0.5 mt-1 mr-2 text-xs font-medium rounded-lg uppercase ${COLORS_MAPPING[color]} text-slate-900`}>
            {children}
        </div>
    );
};

export default Badge;

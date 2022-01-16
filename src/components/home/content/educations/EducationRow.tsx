// Types
import { Education } from '@interfaces/data';
import { RowProps } from '@interfaces/home/content';

// Libraries
import React from 'react';
import Image from'next/image';

// Contexts
import useTheme from '@components/hooks/useTheme';

/**
 * The Education Row Component
 * 
 * @param {RowProps<Education>} - The data for a row.
 * @returns {ReactElement} - The row component.
 */
const EducationRow: React.FC<RowProps<Education>> = ({
    item,
    ...props
}: RowProps<Education>): React.ReactElement => {
    const { isDarkMode } = useTheme();
    return (
        <div className="w-full px-6 py-4 flex flex-col sm:flex-row text-left
            space-y-4 sm:space-y-0 sm:space-x-8 rounded-lg
            bg-black bg-opacity-0 hover:bg-opacity-30 focus:bg-opacity-30" {...props}>
            <div className="relative h-36 w-full sm:w-50% md:w-30% border rounded-xl overflow-hidden">
                <Image
                className="h-full w-full"
                layout="fill"
                src={isDarkMode ? (item.darkModeImage || item.image) : item.image}
                alt="experience image" />
            </div>
            <div className="w-full md:w-70% flex flex-col justify-between">
                <div>
                    <div className="w-full flex justify-between">
                        <p className="font-semibold">{item.title}</p>
                    </div>
                    <div><p>({item.startDate}{' - '}{item.endDate})</p></div>
                    <div className="pt-1.5">{item.subtitle}</div>
                </div>
            </div>
        </div>
    );
};

export default EducationRow;

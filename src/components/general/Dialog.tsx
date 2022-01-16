// Types
import { DialogProps } from '@interfaces/general/Dialog';

// Libraries
import React, { FC, ReactElement, Fragment } from 'react';
import { createPortal } from 'react-dom';
import { Dialog as HUIDialog, Transition } from '@headlessui/react';

// Icons
import { AiOutlineClose } from 'react-icons/ai';

/**
 * The Dialog Component
 *
 * @returns {ReactElement} - The dialog component.
 */
const Dialog: FC<DialogProps> = ({ isOpen, close, children }: DialogProps): ReactElement => {
    return createPortal(
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <HUIDialog
                    open={isOpen}
                    onClose={close}
                    className={`fixed inset-0 max-h-content h-md:max-h-192 h-lg:max-h-224
                        w-11/12 lg:w-3/4 xl:w-2/3 max-w-256 mx-auto my-12 h-md:my-auto
                        rounded-xl shadow-xl overflow-y-hidden z-50
                        bg-slate-300 dark:bg-slate-900`}>

                        <button
                            className={`absolute top-4 right-4 lg:top-6 lg:right-8 font-bold text-xl z-50
                                text-slate-900 dark:text-slate-200`}
                            onClick={close}>
                            <AiOutlineClose height={6} width={6} />
                        </button>

                        <div className="h-full w-full px-8 pt-12
                            overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                            scrollbar-thumb-gray-700 scrollbar-track-gray-300">
                            {children}
                        </div>
                </HUIDialog>
            </Transition>
            {isOpen && <div className="fixed inset-0 h-screen w-screen bg-black opacity-60" style={{ zIndex: 40 }}></div>}
        </div>
    , document.body);
};

export default Dialog;

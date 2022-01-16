// Types
import { UseMixpanelReturn } from '@interfaces/hooks/useMixpanel';

// Libraries
import React, { useEffect, useRef } from 'react';
import mixpanel from 'mixpanel-browser';

// Code
import useRouter from './useRouter';

/**
 * Custom Hook for Mixpanel
 *
 * @returns {UseMixpanelReturn}
 */
const useMixpanel = () => {
    const cache = useRef<boolean>(true);
    const { router } = useRouter();
    
    const track: UseMixpanelReturn['track'] = (name: string, payload = {}) => {
        if (process.env.NEXT_PUBLIC_MIXPANEL) {
            mixpanel.track(name, payload)
        }
    };

    useEffect(() => {    
        if (cache.current && process.env.NEXT_PUBLIC_MIXPANEL) {
            mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL, {}, 'mixpanel');
            cache.current = false;
        }
    }, []);

    useEffect(() => {
        track(`nav_${router.asPath}`, { to: router.asPath, ...router.query});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);


    return {
        track,
        trackFileClick: (to: string, payload={}) => track(`fileClick_${router.asPath}`, { to, ...payload}),
        trackTeammateClick: (to: string, payload={}) => track(`teammateClick_${router.asPath}`, { to, ...payload}),
    };
};

export default useMixpanel;

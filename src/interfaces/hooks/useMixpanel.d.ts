export type Payload = Record<string, string>;

export interface UseMixpanelReturn {
    track: (name: string, payload: Payload) => void;
    trackFileClick: (to: string, payload: Payload) => void;
    trackTeammateClick: (to: string, payload: Payload) => void;
}

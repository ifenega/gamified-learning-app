export { };

declare global {
    type ToastType = 'error' | 'success' | 'info' | 'warning';
    type AvatarType = "5 eyed sunny" | "Fearful red" | "Fearful reed"
    interface SettingsSliceData {
        isDisclaimer: boolean
    }
}
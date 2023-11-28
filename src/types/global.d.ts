export { };

declare global {
    type ToastType = 'error' | 'success' | 'info' | 'warning';
    type AvatarType = "5 eyed sunny" | "Fearful red" | "Fearful reed"

    type TaskType = "MCQ_Box"
    interface SettingsSliceData {
        isDisclaimer: boolean
    }
}
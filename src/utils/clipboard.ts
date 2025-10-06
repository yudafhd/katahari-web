/**
 * Clipboard helper (SSR-safe).
 * Uses navigator.clipboard when available, falls back to a hidden textarea + execCommand.
 */
export async function copyText(text: string): Promise<void> {
    if (typeof window === 'undefined') return;
    try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            await navigator.clipboard.writeText(text);
            return;
        }
    } catch {
        // fallback below
    }
    // Fallback: use a hidden textarea and execCommand('copy')
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    document.body.appendChild(ta);
    const selection = document.getSelection();
    const selected = selection ? selection.rangeCount > 0 ? selection.getRangeAt(0) : null : null;
    ta.select();
    try {
        document.execCommand('copy');
    } finally {
        document.body.removeChild(ta);
        if (selected && selection) {
            selection.removeAllRanges();
            selection.addRange(selected);
        }
    }
}
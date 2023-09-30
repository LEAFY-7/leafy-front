export default function refController(ref) {
    if (!ref.current) return false;
    return true;
}

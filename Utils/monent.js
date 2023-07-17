function timeAgo(timestamp) {
    const now = new Date();
    const diffMs = now - new Date(timestamp);
    const diffSec = Math.round(diffMs / 1000);
    const diffMin = Math.round(diffSec / 60);
    const diffHr = Math.round(diffMin / 60);

    if (diffSec < 60) {
        return "just now";
    } else if (diffMin < 60) {
        return `${diffMin} minute${diffMin === 1 ? "" : "s"} ago`;
    } else if (diffHr < 24) {
        return `${diffHr} hour${diffHr === 1 ? "" : "s"} ago`;
    } else {
        const diffDay = Math.round(diffHr / 24);
        return `${diffDay} day${diffDay === 1 ? "" : "s"} ago`;
    }
}

export default timeAgo;

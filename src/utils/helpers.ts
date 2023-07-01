export const preventBack = (key, callback) => {
    switch (key) {
        case 'start': {
            history.pushState(null, '', location.href);
            window.addEventListener('popstate', callback);
            break;
        }
        case 'end': {
            window.removeEventListener('popstate', callback);
            break;
        }
        default: {
            break;
        }
    }
};

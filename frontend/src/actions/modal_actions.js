export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

export const open = modal => {
    return {
        type: OPEN,
        modal
    };
};

export const close = () => {
    return {
        type: CLOSE
    };
};
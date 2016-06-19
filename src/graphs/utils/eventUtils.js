export const isTouchEvent = e => e.clientX == null;
export const getCoordinates = e => {
    const { clientX: x, clientY: y } = isTouchEvent(e) ? e.changedTouches[0] : e;
    return { x, y };
};

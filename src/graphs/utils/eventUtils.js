export const isTouchEvent = e => e.clientX == null;
export const getCoordinates = e => {
    const { clientX: x, clientY: y } = isTouchEvent(e) ? e.changedTouches[0] : e;
    return { x, y };
};

export const addEvent = (el, event, handler) => {
  if (!el) return;
  if (el.attachEvent) {
    el.attachEvent(`on${event}`, handler);
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, true);
  } else {
    el[`on${event}`] = handler;
  }
};

export const removeEvent = (el, event, handler) => {
  if (!el) return;
  if (el.detachEvent) {
    el.detachEvent(`on${event}`, handler);
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, true);
  } else {
    el[`on${event}`] = null;
  }
};

import React from 'react';

// Hooks for reusable parts of state logic

/**
 *
 * @param {Array<any>} dep dependencies, need to trigger useEffect and to return from it
 * @param {() => void} handler triggered after every timeout tick
 * @param {number} interval timeout interval
 */
const useIntervalFetch = (deps, handler, interval, onClose) => {
  React.useEffect(() => {
    if (onClose() === true) return;

    let id = setTimeout(async function rec() {
      try {
        handler();
      } catch (err) {
        clearTimeout(id);
        console.error(err.message);
      }
    }, interval);

    return () => {
      clearTimeout(id);
    };
  }, deps);
};

/**
 *
 * @param {() => void} handler triggered on component mount
 */
const useInitFetch = (handler) => {
  React.useEffect(() => {
    try {
      handler();
    } catch (err) {
      console.error(err.message);
    }
  }, []);
};

export { useIntervalFetch, useInitFetch };

import React from 'react';

// Hooks for reusable parts of state logic

/**
 *
 * @param {Array<any>} dep dependencies, need to trigger useEffect and to return from it
 * @param {() => void} handler triggered after every timeout tick
 * @param {number} interval timeout interval
 */
const useIntervalFetch = (dep, handler, interval) => {
  React.useEffect(() => {
    if (!dep) return;

    let id = setTimeout(async function rec() {
      try {
        handler();
        id = setTimeout(rec, interval);
      } catch (err) {
        clearTimeout(id);
        console.error(err.message);
      }
    }, 0);

    return () => {
      clearTimeout(id);
    };
  }, [dep]);
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

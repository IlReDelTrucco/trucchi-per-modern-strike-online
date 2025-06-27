/**
 * animationController - Basic Animation Manager for UI Elements
 * Author: IlReDelTrucco
 * License: Custom
 */

const animationController = {
    /**
     * Slides an element in from the left.
     * @param {string} selector - CSS selector of the element.
     * @param {number} duration - Duration in milliseconds.
     */
    slideInFromLeft(selector, duration = 300) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error('[animationController] Element not found.');
            return;
        }

        element.style.position = 'relative';
        element.style.left = '-100%';
        element.style.transition = `left ${duration}ms`;
        element.style.display = 'block';

        setTimeout(() => {
            element.style.left = '0';
        }, 10);
    },

    /**
     * Slides an element out to the right.
     * @param {string} selector - CSS selector of the element.
     * @param {number} duration - Duration in milliseconds.
     */
    slideOutToRight(selector, duration = 300) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error('[animationController] Element not found.');
            return;
        }

        element.style.position = 'relative';
        element.style.transition = `left ${duration}ms`;
        element.style.left = '100%';

        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }
};

// Example usage:
// animationController.slideInFromLeft('#menu', 500);
// animationController.slideOutToRight('#menu', 500);

module.exports = animationController;

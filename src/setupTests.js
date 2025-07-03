// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// matchMedia mock
if (window.hasOwnProperty('matchMedia')) {
    window.matchMedia = function () {
        return {
            matches: false,
            media: "",
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        };
    };
}

// ResizeObserver mock
if (window.hasOwnProperty('ResizeObserver')) {
    window.ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
}

// IntersectionObserver mock
if (window.hasOwnProperty('IntersectionObserver')) {
    window.IntersectionObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
}

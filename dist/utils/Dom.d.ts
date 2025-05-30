/**
 * @description Gets the height of the DOM.
 * @returns {number} The height of the DOM.
 */
export declare function getDomHeight(): number;
/**
 * @description Gets the width of the DOM.
 * @returns {number} The width of the DOM.
 */
export declare function getDomWidth(): number;
/**
 * @description Gets the height of the viewport.
 * @returns {number} The height of the viewport.
 */
export declare function getViewportHeight(): number;
/**
 * @description Gets the width of the viewport.
 * @returns {number} The width of the viewport.
 */
export declare function getViewportWidth(): number;
/**
 * @description Gets the scroll top position of the document.
 * @returns {number} The scroll top position of the document.
 */
export declare function getScrollTop(): number;
/**
 * @description Gets the scroll left position of the document.
 * @returns {number} The scroll left position of the document.
 */
export declare function getScrollLeft(): number;
/**
 * @description Checks if the mouse is inside an element.
 * @param {HTMLElement} element
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
export declare function mouseInElement(element: HTMLElement, x: number, y: number): boolean;
/**
 * @description Gets the mouse position relative to an element.
 * @param {HTMLElement} element
 * @param {MouseEvent} event
 * @returns {object}
 */
export declare function mousePositioninElement(element: HTMLElement, event: MouseEvent): {
    x: number;
    y: number;
} | null;
/**
 * @description Gets the real height of an element.
 * @param {HTMLElement} element
 * @returns {number}
 */
export declare function getRealElementHeight(element: HTMLElement): number;
/**
 * @description Gets the real width of an element.
 * @param {HTMLElement} element
 * @returns {number}
 */
export declare function getElementRealWidth(element: HTMLElement): number;
/**
 * @description Checks if an element is visible.
 * @param {HTMLElement} el
 * @returns {boolean}
 */
export declare function isElInViewport(el: HTMLElement): boolean;
/**
 * @description Removes an element from the DOM.
 * @param {HTMLElement} el
 */
export declare function removeElement(el: HTMLElement): void;
/**
 * @description Checks if an element contains a specific child element.
 * @param {HTMLElement} el
 * @param {HTMLElement} child
 * @returns {boolean}
 */
export declare function containSpecificEl(el: HTMLElement, child: HTMLElement): boolean;
/**
 * @description Finds all child elements of a given element.
 * @param {HTMLElement} el
 * @returns {HTMLElement[]}
 */
export declare function findAllChildElements(el: HTMLElement): HTMLElement[];
/**
 * @description Checks if an element has any child elements.
 * @param {HTMLElement} el
 * @returns {boolean}
 */
export declare function hasChildElements(el: HTMLElement): boolean;
/**
 * @description Checks if the document has focus.
 * @returns {boolean}
 */
export declare function documentHasFocus(): boolean;
/**
 * @description Gets the position of an element in the document.
 * @param {HTMLElement} el
 * @returns {object}
 */
export declare function getElementPosition(el: HTMLElement): {
    top: number;
    left: number;
    width: number;
    height: number;
};
/**
 * @description Adds an event listener to a target.
 * @param {HTMLElement} target
 * @param {string} event
 * @param {Function} callback
 * @param {object} options
 */
export declare function addEventListener(target: HTMLElement, event: keyof HTMLElementEventMap, callback: () => void, options?: {
    capture: boolean;
    once: boolean;
    passive: boolean;
}): void;
/**
 * @description Downloads a file with the given data and file name.
 * @param {any} data
 * @param {string} fileName
 */
export declare function downloadFile(data: any, fileName: string): void;
/**
 * @description Downloads an image from an img element or canvas element.
 * @param {HTMLElement} imgElement
 * @param {string} fileName
 */
export declare function downloadImage(imgElement: HTMLImageElement, fileName: string): void;
/**
 * @description Downloads an image by its URL.
 * @param {string} imgUrl
 * @param {string} fileName
 */
export declare function downloadImageByUrl(imgUrl: string, fileName: string): void;
/**
 * @description Uploads a file from an input element and calls a callback with the file data.
 * @param {HTMLElement} fileInput
 * @param {Function} callback
 */
export declare function uploadFile(fileInput: HTMLInputElement, callback: Function): void;
/**
 * @description Copies text to the clipboard.
 * @param {string} text
 * @returns {Promise<boolean>}
 */
export declare function copyToClipboard(text: string): Promise<boolean>;
/**
 * @description Reads text from the clipboard.
 * @returns {Promise<string>}
 */
export declare function readFromClipboard(): Promise<string>;
//# sourceMappingURL=Dom.d.ts.map
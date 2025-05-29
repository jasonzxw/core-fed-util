/**
 * @description Gets the height of the DOM.
 * @returns {number} The height of the DOM.
 */
export function getDomHeight() {
    return document.documentElement.scrollHeight;
}
/**
 * @description Gets the width of the DOM.
 * @returns {number} The width of the DOM.
 */
export function getDomWidth() {
    return document.documentElement.scrollWidth;
}
/**
 * @description Gets the height of the viewport.
 * @returns {number} The height of the viewport.
 */
export function getViewportHeight() {
    return window.innerHeight;
}
/**
 * @description Gets the width of the viewport.
 * @returns {number} The width of the viewport.
 */
export function getViewportWidth() {
    return window.innerWidth;
}
/**
 * @description Gets the scroll top position of the document.
 * @returns {number} The scroll top position of the document.
 */
export function getScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}
/**
 * @description Gets the scroll left position of the document.
 * @returns {number} The scroll left position of the document.
 */
export function getScrollLeft() {
    return document.documentElement.scrollLeft || document.body.scrollLeft;
}
/**
 * @description Checks if the mouse is inside an element.
 * @param {HTMLElement} element
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
export function mouseInElement(element, x, y) {
    const rect = element.getBoundingClientRect();
    return (x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom);
}
/**
 * @description Gets the mouse position relative to an element.
 * @param {HTMLElement} element
 * @param {MouseEvent} event
 * @returns {object}
 */
export function mousePositioninElement(element, event) {
    const { x, y } = getMousePosition(event);
    if (!mouseInElement(element, x, y)) {
        return null;
    }
    const rect = element.getBoundingClientRect();
    return {
        x: x - rect.left,
        y: y - rect.top
    };
}
/**
 * @description Gets the mouse position in document.
 * @param {Event} event
 * @returns {{ x: number, y: number }}
 */
function getMousePosition(event) {
    const x = event.clientX || event.pageX;
    const y = event.clientY || event.pageY;
    return { x, y };
}
/**
 * @description Gets the real height of an element.
 * @param {HTMLElement} element
 * @returns {number}
 */
export function getRealElementHeight(element) {
    return element.scrollHeight;
}
/**
 * @description Gets the real width of an element.
 * @param {HTMLElement} element
 * @returns {number}
 */
export function getElementRealWidth(element) {
    return element.scrollWidth;
}
/**
 * @description Checks if an element is visible.
 * @param {HTMLElement} el
 * @returns {boolean}
 */
export function isElInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
/**
 * @description Removes an element from the DOM.
 * @param {HTMLElement} el
 */
export function removeElement(el) {
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
    }
}
/**
 * @description Checks if an element has a child.
 * @param {HTMLElement} el
 * @param {HTMLElement} child
 * @returns {boolean}
 */
export function hasChild(el, child) {
    if (el && child) {
        return el.contains(child);
    }
    return false;
}
/**
 * @description Checks if the document has focus.
 * @returns {boolean}
 */
export function documentHasFocus() {
    return document.hasFocus();
}
/**
 * @description Gets the position of an element in the document.
 * @param {HTMLElement} el
 * @returns {object}
 */
export function getElementPosition(el) {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height
    };
}
/**
 * @description Adds an event listener to a target.
 * @param {HTMLElement} target
 * @param {string} event
 * @param {Function} callback
 * @param {object} options
 */
export function addEventListener(target, event, callback, options = {
    capture: false,
    once: false,
    passive: false
}) {
    if (target.addEventListener) {
        target.addEventListener(event, callback, options);
    }
    else if (target.attachEvent) {
        target.attachEvent('on' + event, callback, options);
    }
    else {
        // @ts-ignore
        target['on' + event] = callback;
    }
}
/**
 * @description Downloads a file with the given data and file name.
 * @param {any} data
 * @param {string} fileName
 */
export function downloadFile(data, fileName) {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName || 'download';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
/**
 * @description Downloads an image from an img element or canvas element.
 * @param {HTMLElement} imgElement
 * @param {string} fileName
 */
export function downloadImage(imgElement, fileName) {
    const canvas = document.createElement('canvas');
    canvas.width = imgElement.naturalWidth;
    canvas.height = imgElement.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imgElement, 0, 0);
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName || 'download.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 'image/png');
}
/**
 * @description Downloads an image by its URL.
 * @param {string} imgUrl
 * @param {string} fileName
 */
export function downloadImageByUrl(imgUrl, fileName) {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // 允许跨域下载
    img.onload = function () {
        downloadImage(img, fileName);
    };
    img.src = imgUrl;
}
/**
 * @description Uploads a file from an input element and calls a callback with the file data.
 * @param {HTMLElement} fileInput
 * @param {Function} callback
 */
export function uploadFile(fileInput, callback) {
    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                callback(e.target.result, file.name);
            };
            reader.readAsDataURL(file);
        }
    });
}
/**
 * @description Copies text to the clipboard.
 * @param {string} text
 * @returns {Promise<boolean>}
 */
export async function copyToClipboard(text) {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }
        else {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            const success = document.execCommand('copy');
            document.body.removeChild(textArea);
            return success;
        }
    }
    catch (err) {
        console.error('Failed to copy text to clipboard:', err);
        return false;
    }
}
/**
 * @description Reads text from the clipboard.
 * @returns {Promise<string>}
 */
export async function readFromClipboard() {
    try {
        if (navigator.clipboard && navigator.clipboard.readText) {
            return await navigator.clipboard.readText();
        }
        else {
            const textArea = document.createElement('textarea');
            textArea.style.position = 'fixed';
            document.body.appendChild(textArea);
            textArea.focus();
            document.execCommand('paste');
            const text = textArea.value;
            document.body.removeChild(textArea);
            return text;
        }
    }
    catch (err) {
        console.error('Failed to read from clipboard:', err);
        return `[Read From Clipboard Error]: ${err}`;
    }
}

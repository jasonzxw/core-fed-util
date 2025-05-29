/**
 * Request utility functions for making HTTP requests using XMLHttpRequest.
 * These functions support GET, POST, DELETE, and PUT methods.
 */
export async function getRequest(url, params = {}) {
    const xhr = new XMLHttpRequest();
    const query = new URLSearchParams(params).toString();
    const requestUrl = query ? `${url}?${query}` : url;
    xhr.open('GET', requestUrl, true);
    xhr.send();
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject(new Error(`Request failed with status ${xhr.status}`));
                }
            }
            else {
                reject({ status: xhr.status, message: xhr.statusText });
            }
        };
    });
}
export async function postRequest(url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject(new Error(`Request failed with status ${xhr.status}`));
                }
            }
            else {
                reject({ status: xhr.status, message: xhr.statusText });
            }
        };
    });
}
export async function delRequest(url, params = {}) {
    const xhr = new XMLHttpRequest();
    const query = new URLSearchParams(params).toString();
    const requestUrl = query ? `${url}?${query}` : url;
    xhr.open('DELETE', requestUrl, true);
    xhr.send();
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject(new Error(`Request failed with status ${xhr.status}`));
                }
            }
            else {
                reject({ status: xhr.status, message: xhr.statusText });
            }
        };
    });
}
export async function putRequest(url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        const data = JSON.parse(xhr.responseText);
                        resolve(data);
                    }
                    catch (e) {
                        reject({ message: '响应数据解析失败' });
                    }
                }
                else {
                    reject(new Error(`Request failed with status ${xhr.status}`));
                }
            }
            else {
                reject({ status: xhr.status, message: xhr.statusText });
            }
        };
    });
}

// main index.js
'use strict';

// BUG FIX: 修复Web平台错误处理不一致问题
// 原错误: 返回 Promise.reject(false) - 返回布尔值
// 修复为: 返回错误对象，与其他方法保持一致
export const registerApp = (appId, universalLink) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const openCustomerServiceChat = (corpId, kfUrl) => {
    return Promise.reject("Web is not supported.");
};

// 继续修复其他方法的错误处理一致性
export const isWXAppInstalled = () => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const isWXAppSupportApi = () => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const getApiVersion = () => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const openWXApp = () => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const sendAuthRequest = (scope, state) => {
    return Promise.reject({
        errCode: -1,
        errStr: "Web is not supported.",
        openId: "",
        code: "",
        url: "",
        lang: "",
        country: "",
    });
};

export const shareText = (message) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const shareImage = (message) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const shareLocalImage = (message) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const shareMusic = (message) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const shareVideo = (message) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const shareWebpage = (message) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const shareMiniProgram = (message) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const launchMiniProgram = (message) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const subscribeMessage = (message) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const pay = (payload) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};

export const chooseInvoice = (data) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported.", cards: [] });
};

export const shareFile = (data) => {
    return Promise.reject({ errCode: -1, errStr: "Web is not supported." });
};


























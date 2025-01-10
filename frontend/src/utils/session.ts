import * as CryptoJS from 'crypto-js';
import {
    getFromLocalStorage,
    setInLocalStorage,
    removeFromLocalStorage,
} from './localStorage';

const secret = 'prophecytennissessiontokensecret';

interface UserSessionPayload {
    expiry: number;
    recordId: string;
    name: string;
}

export const getSession = () => {
    const session = getFromLocalStorage('session');

    if (!session) {
        return null;
    }

    return session;
};

export const setSession = (session: string) => {
    setInLocalStorage('session', session);
};

export const clearSession = () => {
    removeFromLocalStorage('session');
};

export const createSession = async (recordId: string, name: string) => {
    const now = new Date();
    const payload = {
        expiry: now.setDate(now.getDate() + 30),
        recordId,
        name,
    };

    const token = CryptoJS.AES.encrypt(
        JSON.stringify(payload),
        secret
    ).toString();

    setSession(token);
    return token;
};

export const decryptSession = async (session: string) => {
    const decrypt = CryptoJS.AES.decrypt(session, secret);
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
};

export const getValidSession = async (): Promise<UserSessionPayload | null> => {
    const session = getSession();
    const decryptedSession = JSON.parse(await decryptSession(session));

    const now = new Date();
    const rightNow = now.setDate(now.getDate());
    const isExpired = rightNow > decryptedSession.expiry;

    if (!isExpired) {
        return decryptedSession;
    }

    clearSession();
    return null;
};

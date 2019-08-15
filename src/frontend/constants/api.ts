import {normalizeUrl} from "../helpers/normalize-url";

declare const __AUTH_HOST__: string;

export const AUTH_HOST = normalizeUrl(__AUTH_HOST__);

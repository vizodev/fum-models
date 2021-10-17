import { AuthUser } from "../interfaces/auth-user";
export declare type ProviderUserTransformer<T> = (result: T) => AuthUser;

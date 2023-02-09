import router from '../router';
import { ROUTE_NAMES } from '../constants/route-names-constants';

const STORAGE_USER_KEY = 'currentUser';
const STORAGE_AUTH_TOKEN_KEY = 'authToken';

interface IFakeResponse {
    authToken: string
    user: {
        role: string
        firstName: string
        lastName: string
        email: string
        country: string
    }
}

interface IFakeParamsData {
    role: string
    firstName: string
    lastName: string
    email: string
    country: string
    password: string
}

function fakeSignUp(data: IFakeParamsData): Promise<IFakeResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = {
                authToken: 'fjuhsyg23hf82hf2h83hd82h38fh82h3f',
                user: {
                    role: data.role,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    country: data.country
                }
            };
            resolve(response);
        }, 2000);
    });
}

class Auth {
    private localUser!: any;

    private localAuthToken!: string | null;

    public get authToken() {
        const storageAccessToken = window.localStorage.getItem(STORAGE_AUTH_TOKEN_KEY);
        this.localAuthToken = storageAccessToken || null;
        return this.localAuthToken;
    }

    private setAuthToken(token: string | null) {
        if (token) {
            window.localStorage.setItem(STORAGE_AUTH_TOKEN_KEY, token);
            this.localAuthToken = token;
        } else {
            localStorage.removeItem(STORAGE_AUTH_TOKEN_KEY);
            this.localAuthToken = null;
        }
    }

    public get user() {
        const user = window.localStorage.getItem(STORAGE_USER_KEY);
        this.localUser = user ? JSON.parse(user) : null;
        return this.localUser;
    }

    private setUser(user: object | null) {
        if (user) {
            window.localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
            this.localUser = user;
        } else {
            localStorage.removeItem(STORAGE_USER_KEY);
            this.localUser = null;
        }
    }

    async signUp(params: any) {
        // TODO: After Enzo give the endpoint, need to implement
        // const { authToken, user } = await api.signUp(params);
        const { authToken, user } = await fakeSignUp(params);
        this.setUser(user);
        this.setAuthToken(authToken);
        router.push({ name: ROUTE_NAMES.CABINET });
    }

    public logout() {
        this.setUser(null);
        this.setAuthToken(null);
        router.push({ name: ROUTE_NAMES.HOMEPAGE });
    }
}

const auth = new Auth();

export {
    auth
};

import type {FetchContext, FetchOptions} from "ofetch";
import type { $Fetch, NitroFetchOptions } from "nitropack";

export class ApiService {
    client: $Fetch
    constructor(config: FetchOptions, token?: string) {
        this.client = this.createHttpInstance(config, token)
    }

    createHttpInstance = (config: FetchOptions, token?: string) => $fetch.create({
        ...config,
        onRequest({ options }: FetchContext): Promise<void> | void {
            if (token) {
                options.params = {
                    ...options.params,
                    apiKey: token
                }
            }
        }
    })

    async request(url: string, options: NitroFetchOptions<any>) {
        try {
            return await this.client(url, options)
        } catch (e) {
            throw e
        }
    }
}
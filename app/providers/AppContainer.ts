import {AuthMiddleware} from "app/http/middleware/authMiddleware";
import loginRequest from "app/http/requests/loginRequest";
import {RoleMiddleware} from "app/http/middleware/roleMiddleware";
import {PermissionMiddleware} from "app/http/middleware/permissionMiddleware";
import {agentMiddleware} from "app/http/middleware/agentMiddleware";
import {CacheMiddleware} from "app/http/middleware/cacheMiddleware";

/**
 * Bozhan container namespace
 */
export namespace Container {
    /**
     * events
     */
    export const _events: Array<object> = [

    ]
    /**
     * middlewares
     */
    export const _middlewares: Array<any> = [
        AuthMiddleware,
        loginRequest,
        RoleMiddleware,
        PermissionMiddleware,
        agentMiddleware,
        CacheMiddleware
    ]
    /**
     * jobs
     */
    export const _jobs: Array<object> = [

    ]
    /**
     * queues
     */
    export const _queues: Array<object> = [

    ]
    /**
     * commands
     */
    export const _commands: Array<object> = []
    /**
     * uploads
     */
    export const _uploads: Array<object> = [

    ]
    /**
     * exports
     */
    export const _exports: Array<object> = [

    ]
    /**
     * imports
     */
    export const _imports: Array<object> = [

    ]

}



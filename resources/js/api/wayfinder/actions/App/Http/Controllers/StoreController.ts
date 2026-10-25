import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StoreController::index
* @see app/Http/Controllers/StoreController.php:17
* @route '/api/stores'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/stores',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StoreController::index
* @see app/Http/Controllers/StoreController.php:17
* @route '/api/stores'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StoreController::index
* @see app/Http/Controllers/StoreController.php:17
* @route '/api/stores'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StoreController::index
* @see app/Http/Controllers/StoreController.php:17
* @route '/api/stores'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StoreController::show
* @see app/Http/Controllers/StoreController.php:52
* @route '/api/stores/{store}'
*/
export const show = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/stores/{store}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StoreController::show
* @see app/Http/Controllers/StoreController.php:52
* @route '/api/stores/{store}'
*/
show.url = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { store: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { store: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            store: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        store: typeof args.store === 'object'
        ? args.store.id
        : args.store,
    }

    return show.definition.url
            .replace('{store}', parsedArgs.store.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StoreController::show
* @see app/Http/Controllers/StoreController.php:52
* @route '/api/stores/{store}'
*/
show.get = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StoreController::show
* @see app/Http/Controllers/StoreController.php:52
* @route '/api/stores/{store}'
*/
show.head = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StoreController::store
* @see app/Http/Controllers/StoreController.php:34
* @route '/api/stores'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/stores',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StoreController::store
* @see app/Http/Controllers/StoreController.php:34
* @route '/api/stores'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StoreController::store
* @see app/Http/Controllers/StoreController.php:34
* @route '/api/stores'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StoreController::update
* @see app/Http/Controllers/StoreController.php:60
* @route '/api/stores/{store}'
*/
export const update = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/stores/{store}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StoreController::update
* @see app/Http/Controllers/StoreController.php:60
* @route '/api/stores/{store}'
*/
update.url = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { store: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { store: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            store: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        store: typeof args.store === 'object'
        ? args.store.id
        : args.store,
    }

    return update.definition.url
            .replace('{store}', parsedArgs.store.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StoreController::update
* @see app/Http/Controllers/StoreController.php:60
* @route '/api/stores/{store}'
*/
update.put = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\StoreController::update
* @see app/Http/Controllers/StoreController.php:60
* @route '/api/stores/{store}'
*/
update.patch = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\StoreController::destroy
* @see app/Http/Controllers/StoreController.php:80
* @route '/api/stores/{store}'
*/
export const destroy = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/stores/{store}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StoreController::destroy
* @see app/Http/Controllers/StoreController.php:80
* @route '/api/stores/{store}'
*/
destroy.url = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { store: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { store: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            store: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        store: typeof args.store === 'object'
        ? args.store.id
        : args.store,
    }

    return destroy.definition.url
            .replace('{store}', parsedArgs.store.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StoreController::destroy
* @see app/Http/Controllers/StoreController.php:80
* @route '/api/stores/{store}'
*/
destroy.delete = (args: { store: number | { id: number } } | [store: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const StoreController = { index, show, store, update, destroy }

export default StoreController
/* eslint-disable */
import type { Prisma, Location } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Location | undefined), DefaultError, Prisma.LocationCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(Location | undefined), DefaultError, Prisma.LocationCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LocationCreateArgs, DefaultError, Location, true>('Location', 'POST', `${endpoint}/location/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LocationCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.LocationCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LocationCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LocationCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.LocationCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.LocationCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LocationCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Location', 'POST', `${endpoint}/location/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LocationCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.LocationCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.LocationCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.LocationCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyLocation<TArgs extends Prisma.LocationFindManyArgs, TQueryFnData = Array<Prisma.LocationGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.LocationFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.LocationFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Location', `${endpoint}/location/findMany`, args, options, fetch);
}

export function useInfiniteFindManyLocation<TArgs extends Prisma.LocationFindManyArgs, TQueryFnData = Array<Prisma.LocationGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.LocationFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.LocationFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Location', `${endpoint}/location/findMany`, args, options, fetch);
}

export function useFindUniqueLocation<TArgs extends Prisma.LocationFindUniqueArgs, TQueryFnData = Prisma.LocationGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.LocationFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.LocationFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Location', `${endpoint}/location/findUnique`, args, options, fetch);
}

export function useFindFirstLocation<TArgs extends Prisma.LocationFindFirstArgs, TQueryFnData = Prisma.LocationGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.LocationFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.LocationFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Location', `${endpoint}/location/findFirst`, args, options, fetch);
}

export function useUpdateLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Location | undefined), DefaultError, Prisma.LocationUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(Location | undefined), DefaultError, Prisma.LocationUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LocationUpdateArgs, DefaultError, Location, true>('Location', 'PUT', `${endpoint}/location/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LocationUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.LocationUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LocationUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LocationUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.LocationUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.LocationUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LocationUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Location', 'PUT', `${endpoint}/location/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LocationUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.LocationUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.LocationUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.LocationUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Location | undefined), DefaultError, Prisma.LocationUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(Location | undefined), DefaultError, Prisma.LocationUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LocationUpsertArgs, DefaultError, Location, true>('Location', 'POST', `${endpoint}/location/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LocationUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.LocationUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LocationUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LocationUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Location | undefined), DefaultError, Prisma.LocationDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(Location | undefined), DefaultError, Prisma.LocationDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LocationDeleteArgs, DefaultError, Location, true>('Location', 'DELETE', `${endpoint}/location/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LocationDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.LocationDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LocationDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.LocationDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Location, Prisma.LocationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.LocationDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.LocationDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.LocationDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Location', 'DELETE', `${endpoint}/location/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.LocationDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.LocationDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.LocationDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.LocationDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateLocation<TArgs extends Prisma.LocationAggregateArgs, TQueryFnData = Prisma.GetLocationAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.LocationAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.LocationAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Location', `${endpoint}/location/aggregate`, args, options, fetch);
}

export function useGroupByLocation<TArgs extends Prisma.LocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.LocationGroupByArgs['orderBy'] } : { orderBy?: Prisma.LocationGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.LocationGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.LocationGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.LocationGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.LocationGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.LocationGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.LocationGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Location', `${endpoint}/location/groupBy`, args, options, fetch);
}

export function useCountLocation<TArgs extends Prisma.LocationCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.LocationCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.LocationCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.LocationCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Location', `${endpoint}/location/count`, args, options, fetch);
}

export function useCheckLocation<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: number }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Location', `${endpoint}/location/check`, args, options, fetch);
}

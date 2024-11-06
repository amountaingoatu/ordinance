/* eslint-disable */
import type { Prisma, OsmLocation } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateOsmLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(OsmLocation | undefined), DefaultError, Prisma.OsmLocationCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(OsmLocation | undefined), DefaultError, Prisma.OsmLocationCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OsmLocationCreateArgs, DefaultError, OsmLocation, true>('OsmLocation', 'POST', `${endpoint}/osmLocation/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OsmLocationCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.OsmLocationCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyOsmLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OsmLocationCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OsmLocationCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OsmLocationCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('OsmLocation', 'POST', `${endpoint}/osmLocation/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OsmLocationCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OsmLocationCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyOsmLocation<TArgs extends Prisma.OsmLocationFindManyArgs, TQueryFnData = Array<Prisma.OsmLocationGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.OsmLocationFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.OsmLocationFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OsmLocation', `${endpoint}/osmLocation/findMany`, args, options, fetch);
}

export function useInfiniteFindManyOsmLocation<TArgs extends Prisma.OsmLocationFindManyArgs, TQueryFnData = Array<Prisma.OsmLocationGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.OsmLocationFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.OsmLocationFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('OsmLocation', `${endpoint}/osmLocation/findMany`, args, options, fetch);
}

export function useFindUniqueOsmLocation<TArgs extends Prisma.OsmLocationFindUniqueArgs, TQueryFnData = Prisma.OsmLocationGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.OsmLocationFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.OsmLocationFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OsmLocation', `${endpoint}/osmLocation/findUnique`, args, options, fetch);
}

export function useFindFirstOsmLocation<TArgs extends Prisma.OsmLocationFindFirstArgs, TQueryFnData = Prisma.OsmLocationGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.OsmLocationFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.OsmLocationFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OsmLocation', `${endpoint}/osmLocation/findFirst`, args, options, fetch);
}

export function useUpdateOsmLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(OsmLocation | undefined), DefaultError, Prisma.OsmLocationUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(OsmLocation | undefined), DefaultError, Prisma.OsmLocationUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OsmLocationUpdateArgs, DefaultError, OsmLocation, true>('OsmLocation', 'PUT', `${endpoint}/osmLocation/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OsmLocationUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.OsmLocationUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyOsmLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OsmLocationUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OsmLocationUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OsmLocationUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('OsmLocation', 'PUT', `${endpoint}/osmLocation/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OsmLocationUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OsmLocationUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertOsmLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(OsmLocation | undefined), DefaultError, Prisma.OsmLocationUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(OsmLocation | undefined), DefaultError, Prisma.OsmLocationUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OsmLocationUpsertArgs, DefaultError, OsmLocation, true>('OsmLocation', 'POST', `${endpoint}/osmLocation/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OsmLocationUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.OsmLocationUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteOsmLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(OsmLocation | undefined), DefaultError, Prisma.OsmLocationDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(OsmLocation | undefined), DefaultError, Prisma.OsmLocationDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OsmLocationDeleteArgs, DefaultError, OsmLocation, true>('OsmLocation', 'DELETE', `${endpoint}/osmLocation/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OsmLocationDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.OsmLocationDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OsmLocation, Prisma.OsmLocationGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyOsmLocation(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OsmLocationDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OsmLocationDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OsmLocationDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('OsmLocation', 'DELETE', `${endpoint}/osmLocation/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OsmLocationDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OsmLocationDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OsmLocationDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateOsmLocation<TArgs extends Prisma.OsmLocationAggregateArgs, TQueryFnData = Prisma.GetOsmLocationAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.OsmLocationAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.OsmLocationAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OsmLocation', `${endpoint}/osmLocation/aggregate`, args, options, fetch);
}

export function useGroupByOsmLocation<TArgs extends Prisma.OsmLocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.OsmLocationGroupByArgs['orderBy'] } : { orderBy?: Prisma.OsmLocationGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.OsmLocationGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.OsmLocationGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.OsmLocationGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.OsmLocationGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.OsmLocationGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.OsmLocationGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OsmLocation', `${endpoint}/osmLocation/groupBy`, args, options, fetch);
}

export function useCountOsmLocation<TArgs extends Prisma.OsmLocationCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.OsmLocationCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.OsmLocationCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.OsmLocationCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OsmLocation', `${endpoint}/osmLocation/count`, args, options, fetch);
}

export function useCheckOsmLocation<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: number; place_id?: number; licence?: string; osm_type?: string; osm_id?: number; lat?: string; lon?: string; display_name?: string; class?: string; type?: string; icon?: string; location_id?: number; boundingbox?: string }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('OsmLocation', `${endpoint}/osmLocation/check`, args, options, fetch);
}

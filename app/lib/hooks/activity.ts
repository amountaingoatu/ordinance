/* eslint-disable */
import type { Prisma, Activity } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateActivity(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Activity | undefined), DefaultError, Prisma.ActivityCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(Activity | undefined), DefaultError, Prisma.ActivityCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityCreateArgs, DefaultError, Activity, true>('Activity', 'POST', `${endpoint}/activity/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyActivity(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Activity', 'POST', `${endpoint}/activity/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyActivity<TArgs extends Prisma.ActivityFindManyArgs, TQueryFnData = Array<Prisma.ActivityGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Activity', `${endpoint}/activity/findMany`, args, options, fetch);
}

export function useInfiniteFindManyActivity<TArgs extends Prisma.ActivityFindManyArgs, TQueryFnData = Array<Prisma.ActivityGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Activity', `${endpoint}/activity/findMany`, args, options, fetch);
}

export function useFindUniqueActivity<TArgs extends Prisma.ActivityFindUniqueArgs, TQueryFnData = Prisma.ActivityGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Activity', `${endpoint}/activity/findUnique`, args, options, fetch);
}

export function useFindFirstActivity<TArgs extends Prisma.ActivityFindFirstArgs, TQueryFnData = Prisma.ActivityGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Activity', `${endpoint}/activity/findFirst`, args, options, fetch);
}

export function useUpdateActivity(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Activity | undefined), DefaultError, Prisma.ActivityUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(Activity | undefined), DefaultError, Prisma.ActivityUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityUpdateArgs, DefaultError, Activity, true>('Activity', 'PUT', `${endpoint}/activity/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyActivity(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Activity', 'PUT', `${endpoint}/activity/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertActivity(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Activity | undefined), DefaultError, Prisma.ActivityUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(Activity | undefined), DefaultError, Prisma.ActivityUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityUpsertArgs, DefaultError, Activity, true>('Activity', 'POST', `${endpoint}/activity/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteActivity(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Activity | undefined), DefaultError, Prisma.ActivityDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(Activity | undefined), DefaultError, Prisma.ActivityDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityDeleteArgs, DefaultError, Activity, true>('Activity', 'DELETE', `${endpoint}/activity/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Activity, Prisma.ActivityGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyActivity(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Activity', 'DELETE', `${endpoint}/activity/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateActivity<TArgs extends Prisma.ActivityAggregateArgs, TQueryFnData = Prisma.GetActivityAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Activity', `${endpoint}/activity/aggregate`, args, options, fetch);
}

export function useGroupByActivity<TArgs extends Prisma.ActivityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ActivityGroupByArgs['orderBy'] } : { orderBy?: Prisma.ActivityGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ActivityGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ActivityGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ActivityGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ActivityGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ActivityGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ActivityGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Activity', `${endpoint}/activity/groupBy`, args, options, fetch);
}

export function useCountActivity<TArgs extends Prisma.ActivityCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ActivityCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Activity', `${endpoint}/activity/count`, args, options, fetch);
}
import type { ActivityStatus } from '@zenstackhq/runtime/models';

export function useCheckActivity<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; description?: string; status?: ActivityStatus; typeId?: string; createdById?: string }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Activity', `${endpoint}/activity/check`, args, options, fetch);
}

/* eslint-disable */
import type { Prisma, ActivityType } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateActivityType(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(ActivityType | undefined), DefaultError, Prisma.ActivityTypeCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(ActivityType | undefined), DefaultError, Prisma.ActivityTypeCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityTypeCreateArgs, DefaultError, ActivityType, true>('ActivityType', 'POST', `${endpoint}/activityType/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityTypeCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityTypeCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyActivityType(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityTypeCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityTypeCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityTypeCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ActivityType', 'POST', `${endpoint}/activityType/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityTypeCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityTypeCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyActivityType<TArgs extends Prisma.ActivityTypeFindManyArgs, TQueryFnData = Array<Prisma.ActivityTypeGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ActivityType', `${endpoint}/activityType/findMany`, args, options, fetch);
}

export function useInfiniteFindManyActivityType<TArgs extends Prisma.ActivityTypeFindManyArgs, TQueryFnData = Array<Prisma.ActivityTypeGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ActivityType', `${endpoint}/activityType/findMany`, args, options, fetch);
}

export function useFindUniqueActivityType<TArgs extends Prisma.ActivityTypeFindUniqueArgs, TQueryFnData = Prisma.ActivityTypeGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ActivityType', `${endpoint}/activityType/findUnique`, args, options, fetch);
}

export function useFindFirstActivityType<TArgs extends Prisma.ActivityTypeFindFirstArgs, TQueryFnData = Prisma.ActivityTypeGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ActivityType', `${endpoint}/activityType/findFirst`, args, options, fetch);
}

export function useUpdateActivityType(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(ActivityType | undefined), DefaultError, Prisma.ActivityTypeUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(ActivityType | undefined), DefaultError, Prisma.ActivityTypeUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityTypeUpdateArgs, DefaultError, ActivityType, true>('ActivityType', 'PUT', `${endpoint}/activityType/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityTypeUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityTypeUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyActivityType(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityTypeUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityTypeUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityTypeUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ActivityType', 'PUT', `${endpoint}/activityType/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityTypeUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityTypeUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertActivityType(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(ActivityType | undefined), DefaultError, Prisma.ActivityTypeUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(ActivityType | undefined), DefaultError, Prisma.ActivityTypeUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityTypeUpsertArgs, DefaultError, ActivityType, true>('ActivityType', 'POST', `${endpoint}/activityType/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityTypeUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityTypeUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteActivityType(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(ActivityType | undefined), DefaultError, Prisma.ActivityTypeDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(ActivityType | undefined), DefaultError, Prisma.ActivityTypeDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityTypeDeleteArgs, DefaultError, ActivityType, true>('ActivityType', 'DELETE', `${endpoint}/activityType/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityTypeDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityTypeDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ActivityType, Prisma.ActivityTypeGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyActivityType(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityTypeDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ActivityTypeDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ActivityTypeDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ActivityType', 'DELETE', `${endpoint}/activityType/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ActivityTypeDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ActivityTypeDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ActivityTypeDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateActivityType<TArgs extends Prisma.ActivityTypeAggregateArgs, TQueryFnData = Prisma.GetActivityTypeAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ActivityType', `${endpoint}/activityType/aggregate`, args, options, fetch);
}

export function useGroupByActivityType<TArgs extends Prisma.ActivityTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ActivityTypeGroupByArgs['orderBy'] } : { orderBy?: Prisma.ActivityTypeGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ActivityTypeGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ActivityTypeGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ActivityTypeGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ActivityTypeGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ActivityTypeGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ActivityTypeGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ActivityType', `${endpoint}/activityType/groupBy`, args, options, fetch);
}

export function useCountActivityType<TArgs extends Prisma.ActivityTypeCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ActivityTypeCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ActivityTypeCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ActivityType', `${endpoint}/activityType/count`, args, options, fetch);
}

export function useCheckActivityType<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; name?: string; createdById?: string }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ActivityType', `${endpoint}/activityType/check`, args, options, fetch);
}

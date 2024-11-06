/* eslint-disable */
import type { Prisma, Reminder } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateReminder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Reminder | undefined), DefaultError, Prisma.ReminderCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(Reminder | undefined), DefaultError, Prisma.ReminderCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ReminderCreateArgs, DefaultError, Reminder, true>('Reminder', 'POST', `${endpoint}/reminder/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ReminderCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ReminderCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ReminderCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ReminderCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyReminder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ReminderCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ReminderCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ReminderCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Reminder', 'POST', `${endpoint}/reminder/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ReminderCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ReminderCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ReminderCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ReminderCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyReminder<TArgs extends Prisma.ReminderFindManyArgs, TQueryFnData = Array<Prisma.ReminderGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ReminderFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ReminderFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Reminder', `${endpoint}/reminder/findMany`, args, options, fetch);
}

export function useInfiniteFindManyReminder<TArgs extends Prisma.ReminderFindManyArgs, TQueryFnData = Array<Prisma.ReminderGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ReminderFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ReminderFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Reminder', `${endpoint}/reminder/findMany`, args, options, fetch);
}

export function useFindUniqueReminder<TArgs extends Prisma.ReminderFindUniqueArgs, TQueryFnData = Prisma.ReminderGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ReminderFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ReminderFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Reminder', `${endpoint}/reminder/findUnique`, args, options, fetch);
}

export function useFindFirstReminder<TArgs extends Prisma.ReminderFindFirstArgs, TQueryFnData = Prisma.ReminderGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ReminderFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ReminderFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Reminder', `${endpoint}/reminder/findFirst`, args, options, fetch);
}

export function useUpdateReminder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Reminder | undefined), DefaultError, Prisma.ReminderUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(Reminder | undefined), DefaultError, Prisma.ReminderUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ReminderUpdateArgs, DefaultError, Reminder, true>('Reminder', 'PUT', `${endpoint}/reminder/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ReminderUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ReminderUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ReminderUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ReminderUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyReminder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ReminderUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ReminderUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ReminderUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Reminder', 'PUT', `${endpoint}/reminder/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ReminderUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ReminderUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ReminderUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ReminderUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertReminder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Reminder | undefined), DefaultError, Prisma.ReminderUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(Reminder | undefined), DefaultError, Prisma.ReminderUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ReminderUpsertArgs, DefaultError, Reminder, true>('Reminder', 'POST', `${endpoint}/reminder/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ReminderUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ReminderUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ReminderUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ReminderUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteReminder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Reminder | undefined), DefaultError, Prisma.ReminderDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(Reminder | undefined), DefaultError, Prisma.ReminderDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ReminderDeleteArgs, DefaultError, Reminder, true>('Reminder', 'DELETE', `${endpoint}/reminder/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ReminderDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ReminderDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ReminderDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ReminderDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Reminder, Prisma.ReminderGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyReminder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ReminderDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ReminderDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ReminderDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Reminder', 'DELETE', `${endpoint}/reminder/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ReminderDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ReminderDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ReminderDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ReminderDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateReminder<TArgs extends Prisma.ReminderAggregateArgs, TQueryFnData = Prisma.GetReminderAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ReminderAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ReminderAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Reminder', `${endpoint}/reminder/aggregate`, args, options, fetch);
}

export function useGroupByReminder<TArgs extends Prisma.ReminderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ReminderGroupByArgs['orderBy'] } : { orderBy?: Prisma.ReminderGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ReminderGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ReminderGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ReminderGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ReminderGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ReminderGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ReminderGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Reminder', `${endpoint}/reminder/groupBy`, args, options, fetch);
}

export function useCountReminder<TArgs extends Prisma.ReminderCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ReminderCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ReminderCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ReminderCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Reminder', `${endpoint}/reminder/count`, args, options, fetch);
}

export function useCheckReminder<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: number; content?: string; complete?: boolean }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Reminder', `${endpoint}/reminder/check`, args, options, fetch);
}

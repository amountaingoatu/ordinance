import { enhance } from '@zenstackhq/runtime';
import { createEventHandler } from '@zenstackhq/server/nuxt';
import { useAuthSession } from '~/auth/server/utils/session';
import { prisma } from '~~/server/prisma';

export default createEventHandler({
    getPrisma: async (event) => {
        const session = await useAuthSession(event);
        return enhance(prisma, {
            user: session.data.id ? { id: session.data.id } : undefined,
        });
    },
});
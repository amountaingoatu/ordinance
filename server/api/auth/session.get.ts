import { useAuthSession } from "~/auth/server/utils/session";

export default defineEventHandler(async (event) => {
    const session = await useAuthSession(event);
    return session.data;
});

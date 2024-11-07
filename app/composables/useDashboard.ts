import { createSharedComposable } from '@vueuse/core'

const _useDashboard = () => {
    const route = useRoute()
    const router = useRouter()
    const isHelpSlideoverOpen = ref(false)

    defineShortcuts({
        'g-h': () => router.push('/'),
        'g-s': () => router.push('/settings'),
        '?': () => isHelpSlideoverOpen.value = true,
    })

    return {
        isHelpSlideoverOpen,
    }
}

export const useDashboard = createSharedComposable(_useDashboard)

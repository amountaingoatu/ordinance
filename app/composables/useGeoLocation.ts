// composables/useGeolocation.ts
import { ref, onUnmounted } from 'vue'

interface Coordinates {
    latitude: number
    longitude: number
    accuracy?: number
    altitude?: number | null
    altitudeAccuracy?: number | null
    heading?: number | null
    speed?: number | null
}

interface GeolocationState {
    coords: Coordinates | null
    timestamp?: number
}

interface GeolocationError {
    code: number
    message: string
}

interface UseGeolocationReturn {
    coords: Ref<Coordinates | null>
    error: Ref<string | null>
    timestamp: Ref<number | null>
    getCurrentPosition: () => Promise<Coordinates>
    startWatching: () => void
    stopWatching: () => void
}

export const useGeolocation = (): UseGeolocationReturn => {
    const coords = ref<Coordinates | null>(null)
    const timestamp = ref<number | null>(null)
    const error = ref<string | null>(null)
    let watcher: number | null = null

    const updatePosition = (position: GeolocationPosition) => {
        coords.value = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            speed: position.coords.speed
        }
        timestamp.value = position.timestamp
        error.value = null
    }

    const updateError = (err: GeolocationError) => {
        coords.value = null
        timestamp.value = null
        error.value = err.message
    }

    const getCurrentPosition = (): Promise<Coordinates> => {
        return new Promise((resolve, reject) => {
            if (!process.client) {
                reject(new Error('Geolocation is only available in browser environment'))
                return
            }

            if (!navigator.geolocation) {
                const error = new Error('Geolocation is not supported')
                updateError({ code: 0, message: error.message })
                reject(error)
                return
            }

            const options: PositionOptions = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }

            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    updatePosition(position)
                    resolve(coords.value as Coordinates)
                },
                (err: GeolocationPositionError) => {
                    updateError(err)
                    reject(err)
                },
                options
            )
        })
    }

    const startWatching = (): void => {
        if (!process.client) {
            error.value = 'Geolocation is only available in browser environment'
            return
        }

        if (!navigator.geolocation) {
            error.value = 'Geolocation is not supported'
            return
        }

        const options: PositionOptions = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }

        watcher = navigator.geolocation.watchPosition(
            updatePosition,
            updateError,
            options
        )
    }

    const stopWatching = (): void => {
        if (watcher !== null) {
            navigator.geolocation.clearWatch(watcher)
            watcher = null
        }
    }

    onUnmounted(() => {
        stopWatching()
    })

    return {
        coords,
        error,
        timestamp,
        getCurrentPosition,
        startWatching,
        stopWatching
    }
}

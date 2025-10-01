import { ref, computed, onMounted, onUnmounted  } from 'vue'

export function useTimeAgo(dateString: string) {
  const now = ref(new Date())

  const timeAgo = computed<string>(() => {
    const date = new Date(dateString)
    const seconds = Math.floor((now.value.getTime() - date.getTime()) / 1000)

    const rtf = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' })

    const intervals= {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    }

    for (const [unit, value] of Object.entries(intervals) as [Intl.RelativeTimeFormatUnit, number][]) {
      if (seconds >= value) {
        const diff = Math.floor(seconds / value)
        return rtf.format(-diff, unit) // le "-" garantit "il y a ..."
      }
    }

    return 'à l’instant'
  })

  let timer: ReturnType<typeof setInterval>
  onMounted(() => {
    timer = setInterval(() => {
      now.value = new Date()
    }, 60000) // refresh toutes les minutes
  })

  onUnmounted(() => {
    clearInterval(timer)
  })

  return {
    timeAgo
  }
}

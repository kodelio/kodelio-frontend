import * as Sentry from '@sentry/nuxt'

Sentry.init({
  dsn: useRuntimeConfig().public.sentry.dsn,
  // Use 100% sampling in dev, 10% in production
  tracesSampleRate: import.meta.env.DEV ? 1.0 : 0.1,
  // Scrub sensitive data from events
  beforeSend(event) {
    if (event.request?.data) {
      const data = event.request.data as Record<string, unknown>
      delete data.email
      delete data.message
      delete data.firstname
      delete data.lastname
    }
    return event
  },
})

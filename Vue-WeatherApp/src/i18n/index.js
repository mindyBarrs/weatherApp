import { createI18n } from 'vue-i18n'

const imports = {
  en: import.meta.glob(`@/locales/en.json`, {
    eager: true,
    import: 'default',
  }),
  // ADD OTHER LANGUAGE FILES
}

// The keys of the 'imports' object represent the supported languages in the project.
const locales = Object.keys(imports)

// Function to retrieve all messages
const getLocaleMessages = () =>
  // Using the reduce function to gather messages for each language
  locales.reduce(
    // The first parameter 'messages' is the main object where we combine messages for each language
    (messages, locale) => ({
      // Copy the messages from the previous language using the spread operator
      ...messages,
      // Combine messages for the current language
      [locale]: Object.values(imports[locale]).reduce(
        // The first parameter 'message' is a temporary object to combine messages for the current language
        (message, current) => ({ ...message, ...current }),
        {},
      ),
    }),
    // Starting with an empty object
    {},
  )

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: getLocaleMessages() || [],
})

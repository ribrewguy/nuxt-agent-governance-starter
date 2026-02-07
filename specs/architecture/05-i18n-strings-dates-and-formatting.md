# 05-i18n-strings-dates-and-formatting.md

## Rules

* No hard-coded UI strings
* Use `nuxt-i18n` and `vue-i18n` exclusively
* Dates and numbers localized
* All locale files must contain the same set of keys; any additions or changes to one locale must be mirrored in every other locale file in the same change

## Error Localization

* Server returns error codes or keys
* Client resolves localized strings

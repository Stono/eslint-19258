# Example for eslint-19258

`cp sdk.gen.ts.original sdk.gen.ts && rm -f .eslintcache && ./node_modules/.bin/eslint -c eslint.config.js sdk.gen.ts --fix`

= the final `}` gets removed, thus breaking the class in `sdk.gen.ts`.

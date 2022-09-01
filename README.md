# Lerna-example


### Flow of publishing alpha/release packages 
```
npx lerna clean -y

# --hoist flag removes duplicate dependencies
npx lerna bootstrap --hoist 

# Run valid npm script in each package to build and lint fix it
npx lerna run valid

# Publish alpha version of package to test it somewhere
npx lerna publish prerelease

# OR

# Publiah relese version of package of your choice (major.minor.patch)
npx lerna publish patch
```
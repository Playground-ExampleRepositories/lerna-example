import hashSum from 'hash-sum'

// change 1
// change 2
export const sum = (number?: number) => {
    return hashSum([number || 15]);
}
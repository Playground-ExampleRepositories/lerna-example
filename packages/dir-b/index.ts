import hashSum from 'hash-sum'

// change 1
// change 2
// change 3
export const sum = (number?: number) => {
    return hashSum([number || 15]);
}
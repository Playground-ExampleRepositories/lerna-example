import hashSum from 'hash-sum'

// change 1
export const sum = (number?: number) => {
    return hashSum([number || 15]);
}
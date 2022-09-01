import hashSum from 'hash-sum'

export const sum = (number?: number) => {
    return hashSum([number || 15]);
}
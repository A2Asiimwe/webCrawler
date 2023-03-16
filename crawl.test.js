const { noromalizeUrl } = require("./crawl") ;
const { expect, test }  = require('@jest/globals') 

test('normalizeUrl', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = noromalizeUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
test('normalizeUrl strip protocal', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = noromalizeUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
test('normalizeUrl trailing slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = noromalizeUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
test('normalizeUrl capitals', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = noromalizeUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
test('normalizeUrl strip to http', () => { 
    const input = 'http://blog.boot.dev/path'
    const actual = noromalizeUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
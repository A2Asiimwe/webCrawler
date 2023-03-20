const { noromalizeUrl, getUrlFromHTML } = require("./crawl") ;
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
test('getUrlsFromHTML absolute', () => { 
    const inputHtmlBody = `
        <html>
            <body>
                <a href="https://blog.boot.dev/"> boo.dev blog </a>
            </body>
        </html>
    `
    const inputBaseURL = 'http://blog.boot.dev/'
    const actual = getUrlFromHTML(inputHtmlBody, inputBaseURL)
    const expected = ['https://blog.boot.dev/']
    expect(actual).toEqual(expected)
})

test('normalizeUrl relative', () => { 
    const inputHtmlBody = `
        <html>
            <body>
                <a href="https://blog.boot.dev/path1/"> boo.dev blog </a>
                <a href="/path2/"> boo.dev blog </a>
            </body>
        </html>
    `

    const inputBaseURL = 'https://blog.boot.dev'
    const actual = getUrlFromHTML(inputHtmlBody, inputBaseURL) 
    const expected = ['https://blog.boot.dev/path1','https://blog.boot.dev/path2']
    expect(actual).toEqual(expected)
})

test('normalizeUrl invalid', () => { 
    const inputHtmlBody = `
        <html>
            <body>
                <a href="invalid"> boo.dev blog </a>
            </body>
        </html>
    `

    const inputBaseURL = 'http://blog.boot.dev/'
    const actual = getUrlFromHTML(inputHtmlBody, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})
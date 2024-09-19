export function row(content, styles){
    // console.log(`<div class="row" styles="${styles}">${content}</div>`)
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content){
    return `<div class="col-sm">${content}</div>`
}
import {row, col} from './utils'

function title(block){
    // return `
    //         <div class="row">
    //             <div class="col-sm">
    //                 <h1>${block.value}</h1>
    //             </div>
    //         </div>
    //     `

    const tag = block.options.tag ?? 'h1'
    const styles = block.options.styles
    // console.log(row(col(`<${tag}>${block.value}</${tag}>`), styles))
    return row(col(`<${tag}>${block.value}</${tag}>`), styles)
}
function text(block){
    // return `
    //         <div class="row">
    //             <div class="col-sm">
    //                 <p>${block.value}</p>
    //             </div>
    //         </div>
    //     `

    return row(col(`<p>${block.value}</p>`))
}
function columns(block){
   
    // const html = block.value.map(item => col(item))
    const html = block.value.map(col).join('')
    // return `
    //         <div class="row">
    //             ${html.join('')}
    //         </div>
    //      `
    return row(html)
}
function image(block){
    // return `
    //     <div class="row">
    //         <img src="${block.value}"/>
    //     </div>
    // `
    return row(`<img src="${block.value}"/>`)
}

export const templates ={
    title,
    text,
    columns,
    image,
}
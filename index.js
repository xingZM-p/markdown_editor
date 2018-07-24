var e = function(selector){
    return document.querySelector(selector)
}

var md = new Remarkable()
e('.content-value').addEventListener('keyup', function(event){
    var value = event.target.value
    e('#id-content-right').innerHTML = md.render(value)
})

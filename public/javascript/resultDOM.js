$('#copyURL').click(function() {
    let range = document.createRange()
    range.selectNode($('#shortURL'))
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(TextRange)
    document.execCommand("copy");
})
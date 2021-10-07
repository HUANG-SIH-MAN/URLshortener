$('#copyURL').click(function() {
    let Range = document.createRange()
    Range.selectNode($('#shortURL'))
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(TextRange)
    document.execCommand("copy");
})
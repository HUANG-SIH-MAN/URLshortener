$('#copyURL').click(function() {
    let Range = document.createRange()
    Range.selectNode(document.getElementById('shortURL'))
    sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(Range)
    document.execCommand("copy");
})


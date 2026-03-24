$(document).ready(function () {
    const btnGrpOne = $('#button-group__one');
    const submitOneBtn = $('#submit__one')
    const clearOneBtn = $('#clear__one')
    const resetOneBtn = $('#reset__one')
    
    const btnGrpTwo = $('#button-group__two');
    const showHideBtn = $('#show-hide')
    
    btnGrpTwo.hide()
    // submitOneBtn.hide()
    // clearOneBtn.hide()
    // resetOneBtn.hide()

    showHideBtn.click(function () {
        btnGrpOne.show()
        // submitOneBtn.show()
        btnGrpTwo.show()
    })
})
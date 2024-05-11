function popupOnExit()
{
    my_window = window.open("", "mywindow1", "status=1,widthh=350,height=150");
    my_window.document.write('<h1>Popup Test!</h1>');
}


document.addEventListener('onunload', {
    popupOnExit()
});
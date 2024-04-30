const delay = ms => new Promise(res => setTimeout(res, ms));

function printCv() {
    let mywindow = window.open('', 'PRINT', 'height=1188,width=840,top=0,left=0');

    mywindow.document.write('<html>');
    mywindow.document.write(document.head.innerHTML);
    mywindow.document.write('<body style="margin:0;padding:0";>');
    mywindow.document.write(document.getElementsByClassName("cv")[0].outerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.onload = async function () {
        await delay(200);
        mywindow.print();
        mywindow.close();
    }

    return true;
}

function hideLinks() {
    const links = document.getElementsByClassName("link");
    for (let i = links.length-1; i >= 0; i--) {
        links[i].classList.remove("link");
    }
}
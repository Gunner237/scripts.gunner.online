var screenwidth = screen.width;
if (screen.width < 800){
    document.write('<script src="https://scripts.gunner.online/menuBar/menuBar.js"></script>\
                   <script>mobileMB("th")</script>');
    console.log("Mobile MenuBar selected")
}
else {
        document.write('<script src="https://scripts.gunner.online/menuBar/menuBar.js"></script>\
                       <script>desktopMB("th")</script>');
        console.log("Desktop MenuBar selected")
}

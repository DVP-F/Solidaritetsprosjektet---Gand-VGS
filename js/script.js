//!for(i in document.querySelectorAll("#main-div .header").length){
//!    const headers = [document.querySelectorAll("header")]
//!    document.getElementById("boxLeftLinks").innerHTML += '<a href="" id="header"></a><br>'
//!}
if (window.innerWidth > 721){
    document.getElementById("bgImgPrimary").attributes("src") = "images/ukraine_flag.gif"
} else {
    document.getElementById("bgImgPrimary").attributes("src") = "images/ukraine_flag_vertical.gif"
}
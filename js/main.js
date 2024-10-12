let shareTooltip = document.getElementById("share");
let shareIcon = document.getElementById("share-icon");

shareIcon.addEventListener("mouseenter",() => {
    shareTooltip.setAttribute("style","opacity: 1");

});
shareIcon.addEventListener("mouseleave",() => {
    shareTooltip.setAttribute("style","opacity: 0");
});
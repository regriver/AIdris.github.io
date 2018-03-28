$(function(){
    $("#posthigh").load("//regriver.github.io/aidris/blog/Hydrocephalus_post.html", function () {
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"posthigh"]);
    });
}); // Use the two forward-slashes instead of the https // 
$(function(){
    $("#postmiddle").load("//regriver.github.io/aidris/blog/metagenomics_post.html", function () {
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"postmiddle"]);
    });
});
$(function(){
    $("#postlow").load("//regriver.github.io/aidris/blog/Nanopore_post.html", function () {
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"postlow"]);
    });
});

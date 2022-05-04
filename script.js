window.onload = () => {
  	setTimeout(() => {
    	document.querySelector("body").classList.add("display");
  	}, 3000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
	document.querySelector(".container").classList.toggle("change");
});
// jquery 
// $(document).ready(function(){
// 	$(".hambergeer-menu").click(function(){
// 		$(.container).classToggle("change");
// 	});
// });

document.querySelector(".scroll-btn").addEventListener("click", () => {
  	document.querySelector("html").style.scrollBehavior = "smooth";
  	setTimeout(() => {
    	document.querySelector("html").style.scrollBehavior = "unset";
  	}, 1000);
});
jquery
// $(document).ready(function(){
// 	$(".scroll-btn").click(function(){
// 		$("html").css("scroll-behavior","smooth");
// 		setTimeout(function(){
// 			$(html).css("scroll-behavior","unset");
// 		}, 1000);
// 	});
// });
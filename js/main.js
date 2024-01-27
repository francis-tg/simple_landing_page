gsap.registerPlugin(TextPlugin);

const headerText = document.querySelector("header h1");
gsap.to(headerText, {
	duration: 3,
	text: "Je suis développeur web et mobile fullstack",
	ease: "in",
});

document.addEventListener("DOMContentLoaded", function () {
	const overlay = document.querySelector(".overlay");
	const colorThief = new ColorThief();
	const image = document.createElement("img");
	image.src = "../img/img.jpg"; // Replace with your actual background image class or tag

	image.addEventListener("load", () => {
		const color = colorThief.getColor(image);

		const colors = colorThief.getPalette(image);
		console.log(colors);
		overlay.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
	});
	document.addEventListener("mousemove", function (e) {
		const x = e.clientX;
		const y = e.clientY;
		overlay.style.transform = `translate(${x - 45}px, ${y - 45}px)`;
	});

	document.addEventListener("mouseenter", function () {
		overlay.style.display = "block";
	});

	document.addEventListener("mouseleave", function () {
		overlay.style.display = "none";
	});
});

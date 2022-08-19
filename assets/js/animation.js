gsap.registerPlugin(ScrollTrigger)

gsap.to(".card-astronaut-smoke", {
	duration: 2,
	x: "54vw",
	opacity: 1,
})

gsap.to(".card-goals-img-first", {
	duration: 2,
	x: "-75%",
	scrollTrigger: {
		trigger: ".card-goals",
		start: "-30% center",
		end: "20% center",
		toggleActions: "restart none none none",
		scrub: 4,
	},
})

gsap.to(".card-goals-img-content", {
	duration: 2,
	opacity: 1,

	scrollTrigger: {
		trigger: ".card-goals",
		start: "15% center",
		end: "20% center",
		scrub: 4,
	},
})

gsap.to(".card-goals-img-last", {
	duration: 2,
	x: "75%",
	scrollTrigger: {
		trigger: ".card-goals",
		start: "-30% center",
		end: "20% center",
		toggleActions: "restart none none none",
		scrub: 4,
	},
})

function displayWindowSize() {
	w = document.documentElement.clientWidth

	const recordImage = gsap.timeline({
		scrollTrigger: {
			trigger: ".card-record",
			start: "0% center",
			end: "50% center",
			scrub: 4,
		},
	})
	if (w > 1400) {
		recordImage
			.to(".card-record-img", { y: 200, x: -100, duration: 4 })
			.to(".card-record-img", { y: 450, x: -1100, duration: 10 })
			.to(".card-record-img", {
				y: 450,
				x: -1000,
				duration: 1,
				opacity: 0,
			})
			.to(".card-record-img", {
				y: 450,
				x: -1000,
				duration: 1,
				transform: "scaleX(-1)",
			})
			.to(".card-record-img", { opacity: 1 })
			.to(".card-record-img", { y: 400, x: -500 })
	} else if (w < 1400 && w > 1201) {
		recordImage
			.to(".card-record-img", { y: 100, x: -100, duration: 4 })
			.to(".card-record-img", { y: 350, x: -900, duration: 10 })
			.to(".card-record-img", {
				y: 350,
				x: -800,
				duration: 1,
				opacity: 0,
			})
			.to(".card-record-img", {
				y: 350,
				x: -800,
				duration: 1,
				transform: "scaleX(-1)",
			})
			.to(".card-record-img", { opacity: 1 })
			.to(".card-record-img", { y: 300, x: -250 })
	} else if (w < 1200 && w > 992) {
		console.log(w)
		recordImage
			.to(".card-record-img", { y: 100, x: -100, duration: 4 })
			.to(".card-record-img", { y: 350, x: -800, duration: 10 })
			.to(".card-record-img", {
				y: 350,
				x: -800,
				duration: 1,
				opacity: 0,
			})
			.to(".card-record-img", {
				y: 350,
				x: -700,
				duration: 1,
				transform: "scaleX(-1)",
			})
			.to(".card-record-img", { opacity: 1 })
			.to(".card-record-img", { y: 300, x: -200 })
	} else if (w < 991 && w > 768) {
		recordImage
			.to(".card-record-img", { y: 200, x: -100, duration: 4 })
			.to(".card-record-img", { y: 450, x: -700, duration: 10 })
			.to(".card-record-img", {
				y: 450,
				x: -700,
				duration: 1,
				opacity: 0,
			})
			.to(".card-record-img", {
				y: 450,
				x: -700,
				duration: 1,
				transform: "scaleX(-1)",
			})
			.to(".card-record-img", { opacity: 1 })

			.to(".card-record-img", { y: 400, x: -250 })
	} else if (w < 767 && w > 0) {
		recordImage.to(".card-record-img", { y: 450, x: 0, duration: 10 })
	}
}

window.addEventListener("resize", displayWindowSize)

displayWindowSize()

gsap.to(".card-circle-img", {
	duration: 2,
	x: 0,
	scrollTrigger: {
		trigger: ".card-circle",
		start: "-30% center",
		end: "0% center",
		toggleActions: "restart none none none",
		scrub: 4,
	},
})

gsap.to(".rocket-flag", {
	opacity: 1,
	duration: 2,
	transform: "translate(0, 0) ",
	scrollTrigger: {
		trigger: ".card-circle",
		start: "0% center",
		end: "50% center",
		toggleActions: "restart none none none",
		scrub: 4,
	},
})

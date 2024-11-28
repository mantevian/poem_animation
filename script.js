let time = -20;

let body = document.querySelector("body");
let hgroup = document.querySelector("hgroup");
let title = hgroup.querySelector("h1");
let author = hgroup.querySelector("p");
let div = document.querySelector("div");

/** @type {HTMLParagraphElement} */
let p = document.querySelector("p.main");

/** @type {{[key: string]: HTMLSpanElement[]}} */
let ws = Object.fromEntries([...p.querySelectorAll("span.word")].map(w => [w.dataset.word, [...w.querySelectorAll("span.letter")]]));

/** @type {{[key: string]: HTMLSpanElement}} */
let rs = Object.fromEntries([...p.querySelectorAll("span.word")].map(w => [w.dataset.word, w]));

let actions = {
	0: () => {
		hgroup.style.opacity = 0;

		body.style.background = `rgb(48, 38, 71)`;

		ws["пятнами"].forEach(l => {
			l.style.scale = 0;
			l.style.fontSize = `8em`;
			l.style.transition = `opacity 1s ease, scale 1s ease, rotate 1s ease`;
			l.style.translate = `100px 200px`;
			l.style.color = `white`;
		});
	},

	20: () => {
		let l = ws["пятнами"][0];
		l.style.scale = 1;
		l.style.opacity = 1;
		l.style.rotate = `0deg`;
	},

	25: () => {
		let l = ws["пятнами"][1];
		l.style.scale = 0.8;
		l.style.opacity = 1;
		l.style.rotate = `-5deg`;
	},

	30: () => {
		let l = ws["пятнами"][2];
		l.style.scale = 1.1;
		l.style.opacity = 1;
		l.style.rotate = `-10deg`;
	},

	35: () => {
		let l = ws["пятнами"][3];
		l.style.scale = 1;
		l.style.opacity = 1;
		l.style.rotate = `-15deg`;
	},

	40: () => {
		let l = ws["пятнами"][4];
		l.style.scale = 0.9;
		l.style.opacity = 1;
		l.style.rotate = `-20deg`;
	},

	45: () => {
		let l = ws["пятнами"][5];
		l.style.scale = 1.2;
		l.style.opacity = 1;
		l.style.rotate = `-25deg`;
	},

	50: () => {
		let l = ws["пятнами"][6];
		l.style.scale = 1;
		l.style.opacity = 1;
		l.style.rotate = `-30deg`;
	},

	70: () => {
		ws["света"].forEach(l => {
			l.style.transition = `scale 1s ease, opacity 0.5s ease`;
			l.style.color = `var(--sun)`;
			l.style.fontSize = `24em`;
			l.style.opacity = 1;
			l.style.translate = `600px 200px`;
		});

		ws["света"][0].style.scale = 1.1;
		ws["света"][1].style.scale = 1.5;
		ws["света"][2].style.scale = 1.9;
		ws["света"][3].style.scale = 1.5;
		ws["света"][4].style.scale = 1.1;
	},

	109: () => {
		ws["света"].forEach(l => {
			l.style.transition = `scale 2s ease`;
			l.style.scale = `1 1`;
		});
	},

	110: () => {
		ws["на1"].forEach(l => {
			l.style.transition = `scale 0.5s ease, opacity 0.5s ease`;
			l.style.fontSize = `5em`;
			l.style.scale = 1;
			l.style.opacity = 1;
			l.style.translate = `350px 600px`;
			l.style.color = `white`;
		});
	},

	129: () => {
		ws["взлётке"].forEach(l => {
			l.style.translate = `500px 800px`;
			l.style.color = `white`;
		});
	},

	132: () => {
		ws["взлётке"].forEach(l => {
			l.style.transition = `scale 0.4s ease, opacity 0.4s ease, translate 0.5s ease`;
			l.style.fontSize = `7em`;
			l.style.scale = 1;
			l.style.opacity = 1;
		});
	},

	133: () => {
		ws["взлётке"][0].style.translate = `500px 600px`;
	},

	136: () => {
		ws["взлётке"][1].style.translate = `500px 600px`;
	},

	139: () => {
		ws["взлётке"][2].style.translate = `500px 600px`;
	},

	142: () => {
		ws["взлётке"][3].style.translate = `500px 600px`;
	},

	145: () => {
		ws["взлётке"][4].style.translate = `500px 600px`;
	},

	148: () => {
		ws["взлётке"][5].style.translate = `500px 600px`;
	},

	151: () => {
		ws["взлётке"][6].style.translate = `500px 600px`;
	},

	170: () => {
		ws["блестит"].forEach(l => {
			l.style.transition = `opacity 0.5s ease`;
			l.style.fontSize = `7em`;
			l.style.opacity = 1;
			l.style.translate = `1000px 700px`;
			l.style.color = `white`;
		});
	},

	200: () => {
		p.style.transition = `translate 2s ease`;
		p.style.translate = `0 -400px`;
	},

	401: () => {
		rs["на1"].style.opacity = 0;
		rs["света"].style.opacity = 0;
	},

	230: () => {
		ws["бетон"].forEach(l => {
			l.style.transition = `opacity 0.5s ease`;
			l.style.fontSize = `32em`;
			l.style.opacity = 1;
			l.style.fontWeight = 900;
			l.style.translate = `125px 800px`;
			l.style.color = `white`;
		});
	},

	340: () => {
		ws["на1"].forEach(l => {
			l.style.transition = `translate 2s ease`;
			l.style.translate = `350px -500px`;
		});

		ws["взлётке"].forEach(l => {
			l.style.transition = `translate 2s ease`;
			l.style.translate = `500px 0`;
		});

		ws["блестит"].forEach(l => {
			l.style.transition = `translate 2s ease`;
			l.style.translate = `1000px 0`;
		});

		ws["бетон"].forEach(l => {
			l.style.transition = `translate 2s ease`;
			l.style.translate = `125px 1600px`;
		});

		ws["света"].forEach(l => {
			l.style.transition = `translate 2s ease`;
			l.style.translate = `600px -600px`;
		});
	},

	341: () => {
		ws["umerlo-background"].forEach(l => {
			l.style.transition = `opacity 1s ease, scale 2s ease`;
			l.style.opacity = 1;
			l.style.translate = `500px 600px`;
			l.style.width = `10px`;
			l.style.height = `10px`;
			l.style.scale = 300;
			l.style.background = `black`;
		});

		ws["умерло"].forEach(l => {
			l.style.transition = `opacity 0.5s ease, scale 0.5s ease`;
			l.style.opacity = 1;
			l.style.fontSize = `10em`;
			l.style.translate = `200px 600px`;
			l.style.color = `white`;
		});
	},

	385: () => {
		ws["умерло"].forEach(l => {
			l.style.transition = `opacity 4s ease, scale 4s ease, translate 4s ease`;
			l.style.opacity = 0.5;
			l.style.translate = `200px 800px`;
			l.style.scale = 0.8;
		});
	},

	390: () => {
		ws["лето"].forEach(l => {
			l.style.transition = `opacity 0.5s ease, scale 0.5s ease, color 3s ease, rotate 10s linear`;
			l.style.opacity = 1;
			l.style.fontSize = `16em`;
			l.style.translate = `800px 700px`;
			l.style.color = `var(--sun)`;
		});

		ws["лето"][1].style.rotate = `10turn`;
	},

	450: () => {
		ws["о"].forEach(l => {
			l.style.transition = `opacity 0.5s ease, scale 0.5s ease`;
			l.style.opacity = 1;
			l.style.fontSize = `10em`;
			l.style.translate = `250px 1100px`;
			l.style.color = `white`;
		});
	},

	460: () => {
		p.style.transition = `translate 4s ease`;
		p.style.translate = `0 -800px`;
	},

	480: () => {
		ws["нём"].forEach(l => {
			l.style.transition = `opacity 0.5s ease, scale 0.5s ease`;
			l.style.opacity = 1;
			l.style.fontSize = `10em`;
			l.style.translate = `400px 1100px`;
			l.style.color = `white`;
		});
	},

	510: () => {
		ws["погрустим"].forEach(l => {
			l.style.transition = `opacity 0.5s ease, scale 0.5s ease`;
			l.style.opacity = 1;
			l.style.fontSize = `10em`;
			l.style.translate = `400px 1250px`;
			l.style.color = `white`;
		});
	},

	520: () => {
		let w = rs["потом"];
		w.style.translate = `-1200px 1100px`;
		w.style.transformOrigin = `center`;
		w.style.rotate = `-60deg`;
		w.style.zIndex = 3;

		ws["потом"].forEach(l => {
			l.style.transition = `opacity 0.5s ease, scale 0.5s ease`;
			l.style.opacity = 1;
			l.style.fontSize = `16em`;
		});

		let bg = rs["potom-background"];
		bg.style.zIndex = 2;
		bg.style.background = `white`;
		bg.style.width = `4000px`;
		bg.style.height = `4000px`;
		bg.style.translate = `-3500px -600px`;
		bg.style.transformOrigin = `center`;
		bg.style.clipPath = `polygon(0 0, 100% 0, 40% 100%, 0 100%)`;
	},

	521: () => {
		let w = rs["потом"];
		w.style.transition = `translate 6s ease`;
		w.style.translate = `2300px 1100px`;

		let bg = rs["potom-background"];
		bg.style.transition = `translate 6s ease`;
		bg.style.translate = `0px -600px`;
	},

	649: () => {
		rs["погрустим"].style.opacity = 0;
		rs["о"].style.opacity = 0;
		rs["нём"].style.opacity = 0;
	},

	680: () => {
		p.style.translate = `0 -2000px`;
		body.style.background = `black`;
	},

	700: () => {
		rs["бетон"].style.display = `none`;

		let bg = rs["potom-background"];
		bg.style.transition = `opacity 1s ease`;
		bg.style.opacity = 0;
	},

	850: () => {
		let bg = rs["potom-background"];
		bg.style.display = `none`;

		ws["слякоть"].forEach(l => {
			l.style.transition = `opacity 0.5s ease, scale 1s ease`;
			l.style.opacity = 1;
			l.style.fontSize = `9em`;
			l.style.translate = `400px 2580px`;
			l.style.color = `var(--slyakot)`;
			setTimeout(() => {
				l.style.animation = `slyakot 2s cubic-bezier(0.68, -0.6, 0.32, 1.6)`;
			}, Math.floor(Math.random() * 500));
		});
	},

	900: () => {
		let l = ws["и"][0];

		l.style.transition = `opacity 0.5s ease`;
		l.style.opacity = 1;
		l.style.fontSize = `7em`;
		l.style.translate = `1050px 2600px`;
		l.style.color = `white`;
	},

	920: () => {
		ws["ветер"].forEach(l => {
			l.style.transition = `opacity 0.5s ease, transform 1s ease`;
			l.style.opacity = 1;
			l.style.fontSize = `16em`;
			l.style.translate = `-500px 2200px`;
			l.style.transform = `skew(20deg, 0deg)`;
			l.style.color = `var(--wind)`;
		});
	},

	921: () => {
		ws["ветер"].forEach(l => {
			l.style.transition = `translate 2s linear, transform 3s ease`;
			l.style.translate = `2000px 2200px`;
			l.style.transform = `skew(-50deg, 0deg)`;
		});
	},

	1020: () => {
		rs["слякоть"].style.transition = `translate 1s ease, opacity 1s ease`;
		rs["слякоть"].style.translate = `0 500px`;
		rs["слякоть"].style.opacity = 0;

		rs["и"].style.transition = `translate 1s ease, opacity 1s ease`;
		rs["и"].style.translate = `0 500px`;
		rs["и"].style.opacity = 0;

		rs["ветер"].style.transition = `opacity 1s ease`;
		rs["ветер"].style.opacity = 0;
	},

	1050: () => {
		ws["в"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `8em`;
			l.style.color = `white`;
			l.style.translate = `200px 2100px`;
			l.style.opacity = 1;
		});
	},

	1080: () => {
		ws["припухших"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.color = `white`;
			l.style.translate = `200px 2120px`;
			l.style.opacity = 1;
		});

		ws["припухших"][0].style.fontSize = `8em`;
		ws["припухших"][1].style.fontSize = `8.5em`;
		ws["припухших"][2].style.fontSize = `9.2em`;
		ws["припухших"][3].style.fontSize = `10em`;
		ws["припухших"][4].style.fontSize = `12em`;
		ws["припухших"][5].style.fontSize = `10em`;
		ws["припухших"][6].style.fontSize = `9.2em`;
		ws["припухших"][7].style.fontSize = `8.5em`;
		ws["припухших"][8].style.fontSize = `8em`;

		rs["припухших"].style.display = `flex`;
		rs["припухших"].style.alignItems = `end`;
	},

	1130: () => {
		ws["глазах"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `8em`;
			l.style.color = `white`;
			l.style.translate = `200px 2300px`;
			l.style.opacity = 1;
			l.style.width = "1ch";
		});

		let next = "_";
		setInterval(() => {
			ws["глазах"][2].innerHTML = next;
			ws["глазах"][4].innerHTML = next;
			next = next == "а" ? "_" : "а";
		}, 800);
	},

	1180: () => {
		rs["печаль"].style.display = `flex`;

		ws["печаль"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `28em`;
			l.style.color = `#555555`;
			l.style.translate = `180px 2300px`;
			l.style.opacity = 1;
			l.style.width = `0.45em`;
		});
	},

	1350: () => {
		let ls = [...ws["в"], ...ws["припухших"], ...ws["глазах"], ...ws["печаль"]];

		let interval = setInterval(() => {
			if (ls.length > 0) {
				let i = Math.floor(Math.random() * ls.length);
				ls[i].style.transition = `opacity 1s ease, scale 1s ease`;
				ls[i].style.opacity = 0;
				ls[i].style.scale = 0;
				ls.splice(i, 1);
			} else {
				clearInterval(interval);
			}
		}, 50);
	},

	1499: () => {
		p.style.transition = `translate 0s`;
		p.style.translate = `0 0`;

		body.style.backgroundColor = `white`;

		rs["взлётке"].style.display = `none`;
		rs["блестит"].style.display = `none`;
		rs["пятнами"].style.display = `none`;
		rs["умерло"].style.display = `none`;
		rs["лето"].style.display = `none`;
		rs["umerlo-background"].style.display = `none`;

		let stamp = rs["штамп"];
		stamp.style.fontSize = `8em`;
		stamp.style.color = `var(--stamp)`;
		stamp.style.translate = `550px 300px`;
		stamp.style.scale = 5;
		stamp.style.rotate = `-30deg`;
		stamp.style.zIndex = 2;
		stamp.style.display = `flex`;

		let na = rs["на2"];
		na.style.fontSize = `8em`;
		na.style.color = `var(--stamp)`;
		na.style.translate = `750px 400px`;
		na.style.scale = 5;
		na.style.rotate = `-30deg`;
		na.style.zIndex = 2;
		na.style.display = `flex`;

		let bilete = rs["билете"];
		bilete.style.fontSize = `28em`;
		bilete.style.color = `var(--paper)`;
		bilete.style.fontWeight = 900;
		bilete.style.translate = `470px 10px`;
		bilete.style.scale = 2;
		bilete.style.rotate = `-30deg`;
		bilete.style.display = `grid`;
		bilete.style.gridTemplateColumns = `auto auto`;
		bilete.style.gridTemplateRows = `auto auto auto`;
	},

	1500: () => {
		let w = rs["штамп"];
		w.style.transition = `opacity 0.5s ease, scale 0.5s ease`;
		w.style.scale = 1;

		ws["штамп"].forEach(l => {
			l.style.transition = `opacity 0.5s ease`;
			l.style.opacity = 1;
		});
	},

	1530: () => {
		let w = rs["на2"];
		w.style.transition = `opacity 0.5s ease, scale 0.5s ease`;
		w.style.scale = 1;

		ws["на2"].forEach(l => {
			l.style.transition = `opacity 0.5s ease`;
			l.style.opacity = 1;
		});
	},

	1560: () => {
		let w = rs["билете"];
		w.style.transition = `opacity 0.5s ease, scale 0.5s ease`;
		w.style.scale = 1;

		ws["билете"].forEach(l => {
			l.style.height = `0.5em`;
			l.style.transition = `opacity 0.5s ease`;
			l.style.opacity = 1;
		});
	},

	1690: () => {
		for (let l of [...ws["штамп"], ...ws["на2"], ...ws["билете"]]) {
			l.style.transition = `translate 2s ease`;
			l.style.translate = `-1500px -1000px`;
		}
	},

	1750: () => {
		let ne = rs["не1"];
		ne.style.fontSize = `12em`;
		ne.style.color = `var(--angry)`;
		ne.style.fontWeight = 600;
		ne.style.translate = `280px 100px`;
		ne.style.display = `flex`;

		let vzdumaj = rs["вздумай"];
		vzdumaj.style.fontSize = `12em`;
		vzdumaj.style.color = `var(--angry)`;
		vzdumaj.style.fontWeight = 600;
		vzdumaj.style.translate = `540px 100px`;
		vzdumaj.style.display = `flex`;

		for (let l of [...ws["не1"], ...ws["вздумай"]]) {
			l.style.transition = `opacity 0.5s ease, translate 0.2s ease`;
			l.style.opacity = 1;

			setInterval(() => {
				l.style.translate = `${Math.floor(Math.random() * 10 - 5)}px ${Math.floor(Math.random() * 10 - 5)}px`;
			}, 200);
		}
	},

	1790: () => {
		let w = rs["сказать"];
		w.style.fontSize = `12em`;
		w.style.color = `black`;
		w.style.fontWeight = 500;
		w.style.translate = `460px 300px`;
		w.style.display = `flex`;

		for (let l of ws["сказать"]) {
			l.style.transition = `opacity 0.5s ease`;
			l.style.opacity = 1;
		}
	},

	1850: () => {
		let w = rs["прощай"];
		w.style.fontSize = `24em`;
		w.style.color = `rgb(150, 150, 150)`;
		w.style.fontWeight = 500;
		w.style.translate = `120px 400px`;
		w.style.display = `flex`;

		for (let l of ws["прощай"]) {
			l.style.transition = `opacity 2s ease`;
			l.style.opacity = 1;
		}
	},

	2000: () => {
		for (let l of [...ws["не1"], ...ws["вздумай"], ...ws["сказать"], ...ws["прощай"]]) {
			setTimeout(() => {
				l.style.transition = `scale 5s ease, translate 5s cubic-bezier(0.55, 0, 1, 0.45), filter 2s ease, opacity 1s ease`;
				l.style.scale = `0.5 3`;
				l.style.filter = `blur(1em)`;
				l.style.translate = `0 -${Math.floor(Math.random() * 2000) + 4000}px`;
				l.style.opacity = 0;
			}, Math.floor(Math.random() * 400));
		}
	},

	2120: () => {
		for (let l of [...ws["не1"], ...ws["вздумай"], ...ws["сказать"], ...ws["прощай"]]) {
			l.style.display = `none`;
		}
	},

	2010: () => {
		body.style.backgroundColor = `var(--night)`;
	},

	2150: () => {
		ws["мокрыми"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `${Math.floor(Math.random() * 3 + 12)}em`;
			l.style.color = `var(--snow)`;
			l.style.translate = `100px -300px`;
			l.style.opacity = 1;
		});
	
		rs["мокрыми"].style.rotate = `5deg`;

		ws["хлопьями"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.color = `var(--snow)`;
			l.style.translate = `600px -600px`;
			l.style.opacity = 1;
		});

		rs["хлопьями"].style.rotate = `-10deg`;

		ws["падает"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.color = `var(--snow)`;
			l.style.translate = `300px -1000px`;
			l.style.opacity = 1;
		});

		rs["падает"].style.rotate = `8deg`;

		ws["снег"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.color = `var(--snow)`;
			l.style.translate = `800px -1050px`;
			l.style.opacity = 1;
		});
	},

	2151: () => {
		[rs["мокрыми"], rs["хлопьями"], rs["падает"]].forEach(w => {
			w.style.transition = `opacity 1s ease, translate 10s linear, rotate 10s linear`;
			w.style.translate = `0 4000px`;
		});

		[rs["снег"]].forEach(w => {
			w.style.transition = `opacity 1s ease, translate 8s linear, rotate 8s linear`;
			w.style.translate = `0 2900px`;
		});
	},

	2152: () => {
		p.style.transition = `translate 12s ease`;
		p.style.translate = `0 -1500px`;
	},

	2400: () => {
		for (let l of [...ws["не1"], ...ws["вздумай"], ...ws["сказать"], ...ws["прощай"]]) {
			l.style.display = `none`;
		}
	},

	2650: () => {
		ws["на3"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.color = `var(--slyakot)`;
			l.style.translate = `350px 1960px`;
			l.style.opacity = 1;
		});

		ws["плащ"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.color = `var(--slyakot)`;
			l.style.opacity = 1;
		});

		ws["плащ"][0].style.fontSize = `32em`;
		ws["плащ"][0].style.translate = `650px 1820px`;
		ws["плащ"][1].style.translate = `630px 1650px`;
		ws["плащ"][2].style.translate = `630px 1650px`;
		ws["плащ"][3].style.translate = `630px 1650px`;
	},

	2900: () => {
		p.style.transition = `translate 2s ease`;
		p.style.translate = `0 -600px`;

		body.style.backgroundColor = `var(--paper)`;
	},

	3020: () => {
		ws["осень"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `24em`;
			l.style.color = `var(--sun)`;
			l.style.opacity = 1;
			l.style.translate = `200px 600px`;
		});
	},

	3040: () => {
		ws["не2"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.opacity = 1;
			l.style.translate = `400px 900px`;
		});
	},

	3070: () => {
		ws["значит"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.opacity = 1;
			l.style.translate = `700px 900px`;
		});
	},

	3110: () => {
		ws["что"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.opacity = 1;
			l.style.translate = `200px 1050px`;
		});
	},

	3140: () => {
		ws["нас"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.color = `var(--sun)`;
			l.style.opacity = 1;
			l.style.translate = `600px 1050px`;
		});
	},

	3170: () => {
		ws["больше"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.opacity = 1;
			l.style.translate = `400px 1200px`;
		});
	},

	3210: () => {
		ws["нет"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.opacity = 1;
			l.style.translate = `1200px 1200px`;
		});
	},

	3350: () => {
		ws["осень"].forEach(l => {
			setTimeout(() => {
				l.style.transition = `opacity 2s ease, translate 3s ease, scale 3s ease, rotate 3s ease, filter 2s ease`;
				l.style.opacity = 0;
				l.style.translate = `${200 + Math.floor(Math.random() * 1000) - 500}px 0`;
				l.style.rotate = `${Math.floor(Math.random() * 90) - 45}deg`;
				l.style.scale = 2;
				l.style.filter = `blur(0.5em)`;
			}, Math.floor(Math.random() * 2000));
		});

		[...ws["не2"], ...ws["значит"], ...ws["что"], ...ws["нас"], ...ws["больше"], ...ws["нет"]].forEach(l => {
			setTimeout(() => {
				l.style.transition = `opacity 2s ease, translate 3s ease, scale 3s ease, rotate 3s ease, filter 2s ease`;
				l.style.opacity = 0;
				l.style.translate = `${200 + Math.floor(Math.random() * 1000) - 500}px 1500px`;
				l.style.rotate = `${Math.floor(Math.random() * 90) - 45}deg`;
				l.style.scale = 0.5;
				l.style.filter = `blur(0.5em)`;
			}, Math.floor(Math.random() * 2000));
		});
	},

	3695: () => {
		[...ws["осень"], ...ws["не2"], ...ws["значит"], ...ws["что"], ...ws["нас"], ...ws["больше"], ...ws["нет"]].forEach(l => {
			l.style.display = `none`;
		});
	},

	3450: () => {
		ws["не3"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `32em`;
			l.style.opacity = 1;
			l.style.translate = `450px 600px`;
			l.style.color = `var(--rain)`;
			l.style.filter = `blur(3em)`;
		});

		ws["плачь"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `24em`;
			l.style.opacity = 1;
			l.style.translate = `250px 1000px`;
			l.style.color = `var(--rain)`;
			l.style.filter = `blur(3em)`;
		});
	},

	3460: () => {
		[...ws["не3"], ...ws["плачь"]].forEach(l => {
			l.style.transition = `opacity 1s ease, filter 3s ease`;
			l.style.filter = `blur(1px)`;
		});
	},

	3660: () => {
		[...ws["не3"], ...ws["плачь"]].forEach(l => {
			l.style.transition = `opacity 2s ease, filter 4s ease, scale 2s ease`;
			l.style.filter = `blur(0.5em)`;
			l.style.scale = `0.5 3`;
			l.style.opacity = 0;
		});
	},

	3700: () => {
		rs["снег"].style.display = `none`;
		rs["на3"].style.display = `none`;
		rs["плащ"].style.display = `none`;
	},

	3800: () => {
		ws["это"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.opacity = 1;
			l.style.translate = `200px 700px`;
		});
	},

	3830: () => {
		ws["не4"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.opacity = 1;
			l.style.translate = `600px 700px`;
		});
	},

	3860: () => {
		ws["самая"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `24em`;
			l.style.opacity = 1;
			l.style.translate = `300px 800px`;
		});
	},

	3900: () => {
		ws["главная"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.opacity = 1;
			l.style.translate = `200px 1200px`;
		});
	},

	3930: () => {
		ws["боль"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `12em`;
			l.style.opacity = 1;
			l.style.color = `var(--angry)`;
			l.style.translate = `1050px 1200px`;
		});
	},

	4050: () => {
		[...ws["это"], ...ws["не4"], ...ws["самая"], ...ws["главная"], ...ws["боль"]].forEach(l => {
			l.style.opacity = 0;
		});
	},

	4051: () => {
		[...ws["не3"], ...ws["плачь"]].forEach(l => {
			l.style.transition = `opacity 3s ease, filter 2s ease`;
			l.style.filter = `blur(2em)`;
			l.style.opacity = 0;
		});
	},

	4060: () => {
		ws["дожди"].forEach(l => {
			l.style.transition = `opacity 2s ease`;
			l.style.fontSize = `20em`;
			l.style.opacity = 1;
			l.style.translate = `150px 810px`;
			l.style.color = `var(--rain)`;
			l.style.filter = `blur(1em)`;
		});
	},

	4070: () => {
		ws["дожди"].forEach(l => {
			l.style.transition = `opacity 2s ease, filter 1s ease`;
			l.style.filter = `blur(0)`;
		});
	},

	4160: () => {
		ws["дожди"].forEach(l => {
			l.style.transition = `opacity 2s ease, filter 1s ease, scale 2s ease`;
			l.style.filter = `blur(8px)`;
		});

		rs["дожди"].style.transition = `translate 10s ease`;
		rs["дожди"].style.translate = `0 1000px`;
	},

	4300: () => {
		ws["я"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.translate = `100px 300px`;
			l.style.fontSize = `72em`;
			l.style.opacity = 1;
		});
	},

	4330: () => {
		ws["обязательно"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.translate = `700px 720px`;
			l.style.fontSize = `8em`;
			l.style.opacity = 1;
		});
	},

	4360: () => {
		ws["буду"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.translate = `700px 896px`;
			l.style.fontSize = `8em`;
			l.style.opacity = 1;
		});
	},

	4390: () => {
		ws["с"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.translate = `700px 1073px`;
			l.style.fontSize = `8em`;
			l.style.opacity = 1;
		});
	},

	4420: () => {
		ws["тобой"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.translate = `700px 1250px`;
			l.style.fontSize = `8em`;
			l.style.opacity = 1;
		});
	},

	4490: () => {
		p.style.translate = `0 -1600px`;
	},

	4601: () => {
		[...ws["я"], ...ws["обязательно"], ...ws["буду"], ...ws["с"], ...ws["тобой"]].forEach(l => {
			l.style.opacity = 0;
		});
	},

	4500: () => {
		ws["дожди"].forEach(l => {
			l.style.transition = `opacity 2s ease, filter 1s ease, scale 2s ease`;
			l.style.filter = `blur(1em)`;
		});

		ws["сь"].forEach(l => {
			l.style.transition = `opacity 1s ease`;
			l.style.fontSize = `20em`;
			l.style.opacity = 1;
			l.style.translate = `1150px 1800px`;
			l.style.color = `var(--rain)`;
			l.style.filter = `blur(1em)`;
		});
	},

	4540: () => {
		ws["дожди"].forEach(l => {
			l.style.transition = `opacity 2s ease, filter 1s ease, scale 2s ease`;
			l.style.filter = `blur(0)`;
		});

		ws["сь"].forEach(l => {
			l.style.transition = `opacity 2s ease, filter 1s ease`;
			l.style.filter = `blur(0)`;
		});
	},

	4800: () => {
		ws["дожди"].forEach(l => {
			l.style.transition = `opacity 20s ease, filter 20s ease`;
			l.style.filter = `blur(2em)`;
			l.style.opacity = 0;
		});

		ws["сь"].forEach(l => {
			l.style.transition = `opacity 20s ease, filter 20s ease`;
			l.style.filter = `blur(2em)`;
			l.style.opacity = 0;
		});
	},
}

function tick() {
	time++;

	actions[time]?.();

	requestAnimationFrame(tick);
}

let button = document.querySelector("button");

button.addEventListener("click", () => {
	hgroup.style.transition = `translate 2s ease, opacity 3s ease`;
	hgroup.style.translate = `0 800px`;
	hgroup.style.opacity = 0;

	button.style.animation = `move 1.5s linear forwards`;
	button.classList.add("pressed");

	setTimeout(() => {
		p.style.display = "block";
		requestAnimationFrame(tick);
	}, 2000);

	
});

function resize() {
	div.style.width = `999999px`;
	div.style.transformOrigin = `left`;
	div.style.scale = Math.min(window.innerWidth / 1680, window.innerHeight / 991);
}

resize();

window.addEventListener("resize", () => {
	resize();
});
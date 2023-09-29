const persons = [
	{
		id: 1,
		"birth-year": "19BBY",
		"eye-color": "blue",
		gender: "male",
		"hair-color": "blond",
		height: 172,
		mass: 77.0,
		name: "Luke Skywalker",
		"skin-color": "fair",
		photo: 'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-1_5f370d5f.jpeg?region=233%2C0%2C342%2C341',
	},
	{
		id: 2,
		"birth-year": "112BBY",
		"eye-color": "yellow",
		height: 167,
		mass: 75.0,
		name: "C-3PO",
		"skin-color": "gold",
		photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrbf3FQrHDybuaKyeOZwnY484GJ6mGPC4Fg&usqp=CAU',
	},
	{
		id: 3,
		"birth-year": "33BBY",
		"eye-color": "red",
		height: 96,
		mass: 32.0,
		name: "R2-D2",
		"skin-color": "white, blue",
		photo: 'https://static.turbosquid.com/Preview/2017/07/20__13_33_08/R2D23dsmodel01.jpgF7CB355D-7B4A-4F39-AF13-DBD5BF6F84CDLarge.jpg'
	},
	{
		id: 4,
		"birth-year": "41.9BBY",
		"eye-color": "yellow",
		gender: "male",
		height: 202,
		mass: 136.0,
		name: "Darth Vader",
		"skin-color": "white",
		photo: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Darth-Vader.Star-Wars-Series.webp'
	},
	{
		id: 5,
		"birth-year": "19BBY",
		"eye-color": "brown",
		gender: "female",
		"hair-color": "brown",
		height: 150,
		mass: 49.0,
		name: "Leia Organa",
		"skin-color": "light",
		photo: 'https://external-preview.redd.it/4hpnprC9k6vbgDz8kmRH0DunbgdxPfkaadpycrMQVMM.jpg?auto=webp&s=e084b72137f26b5343c9d9f7e8f9a5d31ccf5c3a'
	},
];

const divGalary = document.querySelector(".sw-gallery");

const starWarsGallery = () =>{
	persons.forEach(el => {
		const divContainer = document.createElement('div');
		divGalary.append(divContainer);
		divContainer.className = "sw-item";

		const divAvatar = document.createElement('div');
		divContainer.append(divAvatar);
		divAvatar.className = "avatar";
		divAvatar.style.backgroundImage = `url(${el.photo})`;

		const title = document.createElement('h2');
		title.innerHTML = el.name;
		divContainer.append(title);

		const ul = document.createElement('ul');
		divContainer.append(ul);

		console.log(el)

		delete el.name;
		delete el.id;
		delete el.photo;

		const list = Object.entries(el);
		console.log(list)

		list.map((elem) => {
			const li = document.createElement('li');
			li.innerHTML = `${elem[0]}` + `:` + ` ${elem[1]}`;
			ul.append(li);
		})
	})

}

starWarsGallery()
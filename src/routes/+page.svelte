<script>
	import Card from '../lib/components/Card.svelte';

	import color from '$lib/assets/color.png';
	import { each } from 'svelte/internal';

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop - 50,
			behavior: 'smooth'
		});
	}

	let services = [
		{
			name: 'Manicure',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos.',
			img: 'https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			name: 'Pedicure',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos.',
			img: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
		},
		{
			name: 'Acrylic',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos.',
			img: 'https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		}
	];
	let gallery = [
		'https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		'https://images.unsplash.com/photo-1596740926849-2d473dee8d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		'https://images.unsplash.com/photo-1602585578130-c9076e09330d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		'https://images.unsplash.com/photo-1599206676335-193c82b13c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80',
		'https://images.pexels.com/photos/161737/pedicure-massage-therapist-spa-161737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		'https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
	];
</script>

<nav class="navbar bg-base-100 fixed top-0 z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="#home" on:click={handleAnchorClick}>Home</a></li>
				<li><a href="#about" on:click={handleAnchorClick}>About</a></li>
				<li><a href="#services" on:click={handleAnchorClick}>Services</a></li>
				<li><a href="#gallery" on:click={handleAnchorClick}>Gallery</a></li>
				<li><a href="#contact" on:click={handleAnchorClick}>Contact</a></li>
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-2xl text-primary">Nail Studio</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="#home" on:click={handleAnchorClick}>Home</a></li>
			<li><a href="#about" on:click={handleAnchorClick}>About</a></li>
			<li><a href="#services" on:click={handleAnchorClick}>Services</a></li>
			<li><a href="#gallery" on:click={handleAnchorClick}>Gallery</a></li>
			<li><a href="#contact" on:click={handleAnchorClick}>Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="" class="btn btn-primary gap-2"
			><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M19.95 21q-3.225 0-6.287-1.425t-5.425-3.8q-2.363-2.375-3.8-5.438T3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025l-2.85 2.875q1.05 1.8 2.638 3.375T13.1 17l2.9-2.9l5 1v5.85q-.25.025-.525.038T19.95 21Z"
				/></svg
			>(218) 454-0850</a
		>
	</div>
</nav>

<header class="bg-base-100 mt-8" id="home">
	<div
		class="container mx-auto flex flex-col md:flex-row justify-center items-center px-8 py-16 gap-12 md:gap-16"
	>
		<div
			class="md:h-96 md:w-72 lg:h-144 lg:w-128 card rounded-box place-items-center text-center md:text-left flex flex-col justify-center items-center md:items-stretch"
		>
			<h1 class="text-4xl lg:text-6xl mb-1">Welcome to</h1>
			<h1 class="text-4xl lg:text-6xl mb-4 lg:mb-8">Nail Studio</h1>
			<div class="h-[3px] w-24 bg-primary mb-4 lg:mb-8" />
			<p class="text-lg lg:text-2xl mb-4 lg:mb-8 max-w-md md:max-w-none md:w-full">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perspiciatis modi ea vel!
				Velit beatae necessitatibus tempore laboriosam vitae sint?
			</p>
			<div>
				<a href="" class="btn btn-primary shadow-lg gap-2"
					><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M19.95 21q-3.225 0-6.287-1.425t-5.425-3.8q-2.363-2.375-3.8-5.438T3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025l-2.85 2.875q1.05 1.8 2.638 3.375T13.1 17l2.9-2.9l5 1v5.85q-.25.025-.525.038T19.95 21Z"
						/></svg
					>(218) 454-0850</a
				>
			</div>
		</div>
		<div
			class="w-80 h-96 grid md:w-72 lg:h-144 lg:w-128 card rounded-box place-items-center bg-center bg-cover"
			style="background-image: url({color});"
		/>
	</div>
</header>

<section class="bg-base-200" id="about">
	<div
		class="container mx-auto flex flex-col md:flex-row justify-center items-center px-8 py-20 gap-12 md:gap-24 lg:gap-32"
	>
		<div
			class="w-80 h-80 grid md:h-112 lg:h-128 lg:w-112 card rounded-box place-items-center bg-center bg-cover shadow-xl order-2 md:order-1"
			style="background-image: url(https://images.unsplash.com/photo-1599206676335-193c82b13c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80);"
		/>
		<div
			class="md:h-112 md:w-72 lg:h-128 lg:w-112 card rounded-box place-items-center text-center md:text-left flex flex-col justify-center items-center md:items-stretch order-1 md:order-2"
		>
			<h1 class="text-4xl lg:text-5xl mb-4 lg:mb-8">About Us</h1>
			<div class="h-[2px] w-24 bg-primary mb-4 lg:mb-8" />
			<p class="lg:text-xl mb-2 lg:mb-4 max-w-md md:max-w-none md:w-full">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at dolorum nihil tenetur eos
				consectetur, cumque earum architecto impedit optio ducimus placeat possimus necessitatibus
				temporibus pariatur id laudantium amet hic.
			</p>
			<p class="lg:text-xl mb-4 lg:mb-8 max-w-md md:max-w-none md:w-full">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo modi non fugit maxime
				nostrum, rem repellendus. Natus ipsa rerum eos.
			</p>
			<div>
				<a href="#services" class="btn btn-primary shadow-lg" on:click={handleAnchorClick}
					>Our services</a
				>
			</div>
		</div>
	</div>
</section>

<section class="bg-base-100" id="services">
	<div class="py-12 container mx-auto">
		<h2 class="text-center text-4xl lg:text-5xl mb-4">Services</h2>
		<div class="h-[2px] w-24 bg-primary mx-auto mb-4" />
		<p class="text-center text-lg mb-4 px-12 max-w-3xl mx-auto block">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis voluptate laudantium
			ab quod quibusdam facilis vero molestiae? Consectetur, quod.
		</p>
		<div class="flex flex-row justify-center items-center flex-wrap">
			{#each services as service (service.name)}
				<Card {service} />
			{/each}
		</div>
	</div>
</section>

<section
	class="bg-center bg-cover bg-no-repeat text-center"
	style="background-image: url(https://images.unsplash.com/photo-1483095348487-53dbf97d8d5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);"
>
	<div class="w-full h-full p-8 flex flex-col justify-center items-center bg-black bg-opacity-60">
		<h2 class="text-4xl lg:text-5xl text-white mb-4">Nail Studio</h2>
		<div class="h-[2px] w-24 bg-primary mb-4" />
		<p class="text-white text-lg mb-4">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nam!
		</p>
		<a href="" class="btn btn-primary gap-2"
			><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M19.95 21q-3.225 0-6.287-1.425t-5.425-3.8q-2.363-2.375-3.8-5.438T3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025l-2.85 2.875q1.05 1.8 2.638 3.375T13.1 17l2.9-2.9l5 1v5.85q-.25.025-.525.038T19.95 21Z"
				/></svg
			>(218) 454-0850</a
		>
	</div>
</section>

<section class="bg-base-200" id="gallery">
	<div class="py-12 container mx-auto">
		<div class="flex flex-row justify-center items-center flex-wrap">
			{#each gallery as img, i (i)}
				<div
					class="w-64 h-64 bg-center bg-cover bg-no-repeat rounded-sm shadow-xl m-6"
					style="background-image: url({img});"
				/>
			{/each}
		</div>
	</div>
</section>

<section class="bg-base-100" id="contact">
	<div class="py-12 container mx-auto">
		<h2 class="text-center text-4xl lg:text-5xl mb-4">Contact</h2>
		<div class="h-[2px] w-24 bg-primary mx-auto mb-4" />
		<p class="text-center text-lg mb-12 px-12 max-w-3xl mx-auto block">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cumque.
		</p>
		<div
			class="flex flex-col lg:flex-row justify-center items-center w-fit mx-auto rounded overflow-hidden shadow-lg"
		>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.1073657246034!2d-94.2475993490378!3d46.34741348199371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b6bdc5d9952c29%3A0xce418acd30c1303b!2sDN%20Nail%20and%20Spa!5e0!3m2!1svi!2sus!4v1679610821639!5m2!1svi!2sus"
				class="sm:w-112 sm:h-128 hidden lg:block"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
			<div
				class="w-80 sm:w-112 sm:h-128 p-6 sm:p-8 bg-base-200 flex flex-col items-center justify-center"
			>
				<h2 class="text-center text-3xl sm:text-4xl mb-6 sm:mb-8 text-primary">Get Quote</h2>
				<div class="form-control w-full max-w-xs mb-2">
					<label class="label py-[2px]">
						<span class="label-text">Your name</span>
					</label>
					<input
						type="text"
						placeholder="Katty Smith"
						class="input w-full max-w-xs border-0 border-b-2 outline-none focus:outline-none focus:border-primary focus:text-black duration-300 h-10 sm:h-12"
					/>
				</div>
				<div class="form-control w-full max-w-xs mb-2">
					<label class="label py-[2px]">
						<span class="label-text">Phone number</span>
					</label>
					<input
						type="text"
						placeholder="(320) 123-4567"
						class="input w-full max-w-xs border-0 border-b-2 outline-none focus:outline-none focus:border-primary focus:text-black duration-300 h-10 sm:h-12"
					/>
				</div>
				<div class="form-control w-full max-w-xs mb-8">
					<label class="label py-[2px]">
						<span class="label-text">Message</span>
					</label>
					<textarea
						class="textarea textarea-bordered h-24 border-0 border-b-2 border-b-white outline-none focus:outline-none focus:border-primary focus:text-black duration-300"
						placeholder="I need help with the following:"
					/>
				</div>
				<button class="btn btn-primary w-full max-w-xs">Send message</button>
			</div>
		</div>
	</div>
</section>

<footer class="footer p-10 bg-base-200">
	<div>
		<span class="footer-title mb-0">Address</span>
		<a class="link link-hover mb-2">13508 Elmwood Drive Suite 1 Baxter, MN 56425 USA</a>
		<span class="footer-title mb-0">Contact number</span>
		<a class="link link-hover">(218) 454-0850</a>
	</div>
	<div>
		<span class="footer-title">Open hours</span>
		<p>MON-FRI: 10:00 AM - 8:00 PM</p>
		<p>SAT: 10:00 AM - 6:00 PM</p>
		<p>SUN: CLOSED</p>
	</div>
	<div>
		<span class="footer-title">Links</span>
		<a href="#home" class="link link-hover" on:click={handleAnchorClick}>Home</a>
		<a href="#services" class="link link-hover" on:click={handleAnchorClick}>Services</a>
		<a href="#gallery" class="link link-hover" on:click={handleAnchorClick}>Gallery</a>
	</div>
</footer>

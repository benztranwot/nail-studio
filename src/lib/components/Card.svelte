<script>
	export let service;
	const { name, description, img } = service;
</script>

<div class="card w-72 h-96 bg-base-100 shadow-xl m-8">
	<figure class="h-44">
		<img src={img} alt={name} />
	</figure>
	<div class="card-body text-center">
		<h2 class="card-title mx-auto">{name}</h2>
		<p>{description}</p>
	</div>
</div>

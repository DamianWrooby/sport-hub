<template>
	<div>
		<div id="heading">
			<nuxt-link to="/">
				<transition name="heading" appear>
					<h1 id="main-heading">SportHub</h1>
				</transition>
			</nuxt-link>
			<transition name="sub-heading" appear>
				<p id="sub-heading">Track your physical activities</p>
			</transition>
		</div>
	</div>
</template>

<style>
h1#main-heading {
	font-family: "Raleway";
	font-weight: 900;
	font-size: 85px;
	padding: 50px 0;
}

#sub-heading {
	position: relative;
	font-family: "Montserrat";
	font-weight: 400;
	text-transform: uppercase;
	top: -58px;
	letter-spacing: 4px;
	color: #9a88e4;
}

.heading-enter-active,
.heading-leave-active,
.sub-heading-enter-active,
.sub-heading-leave-active {
	transition: all 0.5s;
}

.heading-enter,
.heading-leave-to,
.sub-heading-enter,
.sub-heading-leave-to {
	opacity: 0;
}

.heading-enter {
	transform: translateY(-30px);
}

.sub-heading-enter {
	transform: translateX(-300px);
}

a,
a:hover {
	color: #fff;
	text-decoration: none;
}
</style>

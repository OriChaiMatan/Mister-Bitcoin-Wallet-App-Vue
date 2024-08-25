<template>
	<header>
		<h1>Mr.Bitcoin</h1>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/statistic">Statistic</RouterLink>
		</nav>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss">
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6vh;

    padding: 10px;
    border-bottom: 3px solid #2d2935;
    color: white;

    nav {
        display: flex;
        gap: 1em;
    }
}
</style>

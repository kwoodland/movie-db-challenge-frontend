<template>
    <div class="info">
        <DetailsHead/>
        <DetailsBody />
        <DetailsFooter />
    </div>
</template>

<script>
	import DetailsHead from './details/DetailsHead';
	import DetailsBody from './details/DetailsBody';
	import DetailsFooter from './details/DetailsFooter';

	export default {
		name: "DetailView",
		components: {DetailsFooter, DetailsBody, DetailsHead},
	};
</script>

<style scoped>

</style>
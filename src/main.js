import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Volodymyr',
		age: 36
	}
});

export default app;
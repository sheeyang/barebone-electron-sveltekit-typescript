/* eslint-disable @typescript-eslint/no-explicit-any */

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }: any) {
	const response = await resolve(event, {
		ssr: false
	});

	return response;
}

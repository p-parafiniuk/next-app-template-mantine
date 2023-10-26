import directus from '../../lib/directus';
import { notFound } from 'next/navigation';
import { readItem } from '@directus/sdk';

async function getPage(slug: string) {
	try {
        console.log(slug)
		const page = await directus.request(readItem('pages', slug));
		return page;
	} catch (error) {
		notFound();
	}
}

// : {slug: string}
export default async function DynamicPage({ params }) {
    console.log(params)
	const page = await getPage(params.slug);
	return (
		<div>
            lol
			<h1>{page.title}</h1>
            
			<div dangerouslySetInnerHTML={{ __html: page.content }}></div>
		</div>
	);
}
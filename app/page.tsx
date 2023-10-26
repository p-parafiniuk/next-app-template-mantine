import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

// export default function HomePage() {
//   return (
//     <>
//       <Welcome />
//       <ColorSchemeToggle />
//     </>
//   );
// }


import directus from "../lib/directus";
import { readItems } from '@directus/sdk';

async function getGlobals() {
	return directus.request(readItems('global'));
}


// {title?: string, description?: string}

export default async function HomePage() {
	const global  = await getGlobals();
	return (
		<div>
			<h1>{global.title}</h1>
			<p>{global?.description}</p>

      <Welcome />
      <ColorSchemeToggle />

		</div>
	);
}

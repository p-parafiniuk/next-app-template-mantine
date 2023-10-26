import { createDirectus } from '@directus/sdk';
import { rest } from '@directus/sdk';

const directus = createDirectus('http://localhost:8055').with(rest());

// const directus = createDirectus('http://localhost:8055').with(rest());
export default directus;
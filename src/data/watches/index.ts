import type {Watch} from '@/shared/types';
import rolexJson from './rolex.json';


export const rolex = rolexJson as Watch[];


export const allWatches:Watch[] = [
    ...rolex
];


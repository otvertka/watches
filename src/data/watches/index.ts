import type {Watch} from '@/shared/types';
import rolexJson from './rolex.json';
import patekJson from './patek.json'

export const rolex = rolexJson as Watch[];
export const patek = patekJson as Watch[];


export const allWatches:Watch[] = [
    ...rolex, ...patek
];


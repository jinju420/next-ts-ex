import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import requests from '@/utils/requests';
import { Movie, TV } from '@/typings';
import Banner from '@/components/Banner';

interface IndexProps {
	original: TV[];
	topRated: Movie[];
	crime: Movie[];
	drama: Movie[];
	fantasy: Movie[];
	action: Movie[];
	animation: Movie[];
}

const Home: NextPage<IndexProps> = ({ original, topRated, crime, drama, fantasy, action, animation }) => {
	// console.log(original);
	return (
		<div className='relative h-screen bg-gradient-to-b from-[#333] to-[#141414]'>
			<Head>
				<title>Netflix Clone-coding</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main className=''>
				<Banner original={original} />
				<section></section>
			</main>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const [original, top, crime, drama, fantasy, action, animation] = await Promise.all([
		fetch(requests.original).then((res) => res.json()),
		fetch(requests.top).then((res) => res.json()),
		fetch(requests.crime).then((res) => res.json()),
		fetch(requests.drama).then((res) => res.json()),
		fetch(requests.fantasy).then((res) => res.json()),
		fetch(requests.action).then((res) => res.json()),
		fetch(requests.animation).then((res) => res.json()),
	]);

	return {
		props: {
			original: original.results,
			topRated: top.results,
			crime: crime.results,
			drama: drama.results,
			fantasy: fantasy.results,
			action: action.results,
			animation: animation.results,
		},
	};
};

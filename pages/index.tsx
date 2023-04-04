import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import requests from '@/utils/requests';
import { Movie } from '@/typings';
import Banner from '@/components/Banner';
import Row from '@/components/Row';
import Modal from '@/components/Modal';
import { modalState } from '@/atoms/globalAtom';
import { useRecoilValue } from 'recoil';
import { auth } from '@/firebase';
import useAuth from '@/hooks/useAuth';

interface IndexProps {
	original: Movie[];
	topRated: Movie[];
	crime: Movie[];
	drama: Movie[];
	fantasy: Movie[];
	action: Movie[];
	animation: Movie[];
}

const Home: NextPage<IndexProps> = ({ original, topRated, crime, drama, fantasy, action, animation }) => {
	const showModal = useRecoilValue(modalState);
	const { user } = useAuth();
	return (
		<div className='relative h-screen bg-gradient-to-b from-[#333] to-[#141414]'>
			<Head>
				<title>Netflix Clone-coding</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main className='relative pl-4 pb-24 lg:space-y-18 lg:pl-16'>
				<Banner original={original} />
				<section>
					<Row title='Top Rated' movies={topRated} />
					<Row title='Crime' movies={crime} />
					<Row title='Drama' movies={drama} />
					<Row title='Fantasy' movies={fantasy} />
					<Row title='Action' movies={action} />
					<Row title='Animation' movies={animation} />
				</section>
			</main>

			{showModal && <Modal />}
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

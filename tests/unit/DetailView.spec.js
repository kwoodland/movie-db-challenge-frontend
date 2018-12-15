import { shallowMount } from '@vue/test-utils';
import DetailView from '../../src/components/DetailView';

const MOVIES = [
	{
		"id": "dr-no",
		"source": "http://www.themoviedb.org/movie/646-dr-no",
		"title": "Dr. No",
		"poster": "dr-no.jpg",
		"year": 1962,
		"director": "Terence Young",
		"actor": "Sean Connery",
		"tagline": "NOW meet the most extraordinary gentleman spy in all fiction!",
		"synopsis": "When Strangways, the British SIS Station Chief in Jamaica goes missing, MI6 send James Bond - Agent 007 to investigate. His investigation leads him to the mysterious Crab Key; the secret base of Dr No who he suspects is trying to sabotage the American space program using a radio beam. With the assistance of local fisherman Quarrel, who had been helping Strangways, Bond sneaks onto Crab Key where he meets the beautiful Honey Ryder. Can the three of them defeat an army of henchmen and a \"fire breathing dragon\" in order to stop Dr No, save the space program and get revenge for Strangways? Dr. No is the first film of legendary James Bond series starring Sean Connery in the role of Fleming's British super agent."
	},
	{
		"id": "from-russia-with-love",
		"source": "http://www.themoviedb.org/movie/657-from-russia-with-love",
		"title": "From Russia With Love",
		"poster": "from-russia-with-love.jpg",
		"year": 1963,
		"director": "Terence Young",
		"actor": "Sean Connery",
		"tagline": "The world's masters of murder pull out all the stops to destroy Agent 007!",
		"synopsis": "Bond is back and on the loose in exotic Istanbul looking for a super-secret coding machine. He's involved with a beautiful Russian spy and has the SPECTRE organization after him, including villainess Rosa Klebb (she of the killer shoe). Lots of exciting escapes but not an overreliance on the gadgetry of the later films. The second Bond feature, thought by many to be the best."
	},
	{
		"id": "goldfinger",
		"source": "http://www.themoviedb.org/movie/658-goldfinger",
		"title": "Goldfinger",
		"poster": "goldfinger.jpg",
		"year": 1964,
		"director": "Guy Hamilton",
		"actor": "Sean Connery",
		"tagline": "Everything he touches turns into excitement!",
		"synopsis": "Bond is in Miami on holiday when M tells him to observe Auric Goldfinger. Bond steals Goldfinger's girlfriend, Jill Masterson, but after being knocked out, he awakes to find her dead and covered in gold paint. Upon returning to London, Bond is told to further investigate Goldfinger who is believed to be smuggling gold out of Britain, but warned he will be replaced if he turns the mission into a personal vendetta. After failing to befriend Goldfinger, Bond is caught spying and taken to America as a captive. Bond learns of Goldfinger's plan, codenamed Operation Grand Slam, which involves attacking Fort Knox to increase his gold riches. Can 007 find a way to stop Goldfinger despite being held prisoner? This is the third film from the legendary James Bond series starring Sean Connery as the British super agent."
	}
];

describe('DetailView.vue', () => {
	it('renders props.msg when passed', () => {
		const wrapper = shallowMount(DetailView, {
			propsData: {
				selectedMovie: MOVIES[0],
				movies: MOVIES
			}
		});
		expect(wrapper.find('.credits').exists()).toBe(true);
		expect(wrapper.find('.title').exists()).toBe(true);
		expect(wrapper.find('.tagline').exists()).toBe(true);
		expect(wrapper.find('.tagline').text()).toBe(MOVIES[0].tagline);
	});
});

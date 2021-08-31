import React from 'react';

function Home(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-3 mt-5">
					<img src="/assets/bomber2.png" className="responsive-img" alt="bomber"></img>
				</div>
				<div className="col">
					<h1 className="mt-5 text-center">
						<br />
						They're coming for you... <br />
						<br />
						Are you ready?
					</h1>
				</div>
			</div>
			<div className="row row-content">
				<p id="about">
					<img src="/assets/divider.png" className="responsive-img mt-5 mb-5" alt="divider"></img>
				</p>
			</div>
			<div className="row row-content">
				<div className="col align-self-center">
					<h2 className="text-center">About the Game</h2>
					<p className="text-start">
						Kaboom Invaders is a retro styled shooter game, set in outer space in a far away future, where there are constant Kaboom Baby invasions threatening humanity as we know it. You
						must fight against the Kaboom Babies, eliminating them all - before they get to you!
					</p>
				</div>
				<div className="col-3 col-md-2">
					<img src="/assets/rocket1.png" className="responsive-img" alt="rocket"></img>
				</div>
			</div>
			<div className="row row-content align-items-center">
				<p id="rules">
					<img src="/assets/divider.png" className="responsive-img mt-5 mb-5" alt="divider"></img>
				</p>
			</div>
			<div className="row row-content">
				<div className="col-3 align-self-center">
					<img src="/assets/bomber1.png" className="responsive-img" alt="bomber"></img>
				</div>
				<div className="col align-self-center">
					<h2 className="text-center">How to Play</h2>
					<p className="text-start">
						If you've ever played a shoot 'em up arcade game, you'll find the mechanics of Kaboom Invaders to be very similar (think Space Invaders). To move your rocket around the screen,
						use the arrow keys. Not only can you move left and right, you can also move up and down, which might prove to be helpful, especially if you want to beat your previous high
						score. To shoot your laser, you just tap the spacebar. That's basically it for controls.
					</p>
				</div>
			</div>
			<div className="row row-content">
				<div className="col align-self-center">
					<p className="text-start">
						In order to win the game, you must shoot down all the Kaboom Babies before the timer runs out or before one collides with your rocket. These Kaboom Babies are particularly
						strong and your laser won't get them in one hit. You must hit a Kaboom Baby 3 times before it finally explodes. Another thing to watch out for are falling stars. They will
						damage your rocket if you get hit, and once they hit 4 times, your ship is gone! Pay attention to the health bar in the bottom left to see how you're holding up. However,
						shooting a falling star with your laser beam will give you an extra 100 points, so don't completely avoid them! Good luck!
					</p>
				</div>
				<div className="col-3 align-self-center">
					<img src="/assets/bomber3.png" className="responsive-img" alt="bomber"></img>
				</div>
			</div>
			<div className="row row-content align-items-center">
				<p id="demo">
					<img src="/assets/divider.png" className="responsive-img mt-5 mb-5" alt="divider"></img>
				</p>
			</div>
			<div className="row row-content">
				<div className="col align-self-center">
					<h2 className="text-center">Demo</h2>
					<p className="text-start">Watch the video below to see how the game works!</p>
					<div class="row row-content align-items-center">
						<iframe
							width="640"
							height="480"
							src="https://www.youtube.com/embed/FvnYVGn-efU"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
			<div className="row row-content align-items-center">
				<p id="developer">
					<img src="/assets/divider.png" className="responsive-img mt-5 mb-5" alt="divider"></img>
				</p>
			</div>
			<div className="row row-content">
				<div className="col-3 col-md-2">
					<img src="/assets/rocket2.png" className="responsive-img" alt="rocket"></img>
					<img src="/assets/rocket3.png" className="responsive-img" alt="rocket"></img>
					<img src="/assets/rocket4.png" className="responsive-img" alt="rocket"></img>
				</div>
				<div className="col align-self-center">
					<h2 className="text-center">About the Developer</h2>
					<p className="text-start">
						Hi there! My name is Amadeusz Sepko. I promise it's not as hard to pronounce as it looks. Here's my attempt at a phonetic spelling: AH-muh-DAY-uhs. Or you could just listen to
						the song{' '}
						<a className="text-link" href="https://youtu.be/cVikZ8Oe_XA">
							'Rock Me Amadeus' by Falco
						</a>
						. It's in there 70 times - I counted. Apologies in advance for the earworm if you do listen.
						<br />
						<br />I started coding less than a year ago and have loved every second of it (even the crazy frustrating bits)! I enjoy problem solving, learning, building, and experimenting
						with new things. Having worked previously as a 3rd grade teacher and a freelance violinist (along with a number of odd jobs), I have built up quite a unique skill set that has
						helped me develop professionally in many areas. I am currently on the look out for a developer position, so if you're looking for a new person to join your team, look no
						further!
					</p>
					<h2 className="text-center">About this Project</h2>
					<p className="text-start">
						This project definitely took me out of my comfort zone. Having worked mostly with React and a few other JavaScript libraries, exploring this new library was actually really
						fun! KaboomJS is a relatively new JS library that is built for creating games quickly. I heard about it for the first time at the beginning of a Mintbean hackathon, so I had
						less than a week to use that new knowledge to make this game. I think the project was a success and has definitely sparked an interest in me for developing games. It has also
						reignited an old interest of mine in pixel art, having created all the pixel art for this game and website. I really hope you enjoy playing it. Try beating my high score of
						3150!
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;

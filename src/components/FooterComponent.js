import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer(props) {
	return (
		<footer color="dark" dark className="site-footer fixed-bottom">
			<div className="container">
				<div className="row">
					<div className="col-6 col-sm-4 text-center">{/* nothing */}</div>
					<div className="col-6 col-sm-4 text-center">
						<h5>© 2021 Amadeusz Sepko</h5>
					</div>
					<div className="col-sm-4 text-center">
						<h5>
							<a className="btn-link" href="https://github.com/amad3usz">
								<GoMarkGithub value={{ className: 'react-icons' }} />
							</a>{' '}
							<a className="btn-link" href="https://www.linkedin.com/in/amad3usz/">
								<FaLinkedin value={{ className: 'react-icons' }} />
							</a>{' '}
							<a className="btn-link" href="mailto:a.sepko@gmail.com">
								<FaEnvelope value={{ className: 'react-icons' }} />
							</a>
						</h5>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

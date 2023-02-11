import React from "react";

import GoogleLogin from "react-google-login";
// import {useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import connectVideo from "../assets/connect-video.mp4";
import logo from "../assets/connect-logo-white.svg";

const Login = () => {
	return (
		<div className="flex justify-start items-center flex-column h-screen">
			<div className="relative h-full w-full">
				<video
					src={connectVideo}
					type="video/mp4"
					loop
					muted
					controls="false"
					autoPlay
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay">
				<div className="p-5">
					<img src={logo} width="180px" alt="logo" />
				</div>

				<div className="shadow-2xl">
					<GoogleLogin
						clientId=""
						render={(renderProps) => (
							<button
								type="button"
								className="bg-mainColor p-2 rounded-md"
							>
								<FcGoogle className="mr-4 " /> Sign in with
								Google
							</button>
						)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;

//NOTE:  to check for tailwind css use tailwindcss docs
//TODO: work on the logo from the logo site to makeit sharper and bigger from the site end
//FIX: to fix this logo issue you need to use a logo that doesn't have a padding around it

"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="xs:w-[250px] w-full"
			>
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
				>
					<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
						<Image
							src={icon}
							width={64}
							height={64}
							alt={title}
							className="w-16 h-16 object-contain"
						/>
						<h3 className="text-white text-[20px] font-bold text-center">
							{title}
						</h3>
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				{/* <p className="sectionSubText">Introduction</p> */}
				<h2 className="styles.sectionHeadText">About Me.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
			>
				I am a passionate Software Developer with 3+ years of experience specializing in the MERN stack and modern web technologies. Skilled in JavaScript, TypeScript, React, Next.js, Node.js, NestJS, and AWS, I build scalable, user-focused applications with robust architecture and seamless performance.

My expertise spans backend API development, authentication (JWT), cloud integration (AWS S3, Lambda, API Gateway), and real-time communication (Socket.IO). I also have experience with payment gateways (Stripe, Switch, Nets), Firebase Realtime DB, and report automation using tools like Puppeteer and OpenAPI.

Key Highlights:

Delivered FCRF | Diamond Reports, implementing dynamic reports (Diamond, Rarity, Argyle) with sharing, saving, and downloading features using React.js, NestJS, Puppeteer, and Google Sheets.

Built full-stack solutions including a multi-tenant healthcare platform, a matrimonial app with Next.js & Gemini API, and real-time chat applications.

Integrated advanced tools like Sentry.io for real-time error tracking and optimized performance in high-traffic applications.

Hands-on experience with version control, Agile (JIRA), and multi-environment deployments (Dev/Prod).

With 250+ LeetCode solutions, I am passionate about problem-solving and continuously improving my skills. My goal is to craft innovative, high-performance applications that deliver real business value.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");

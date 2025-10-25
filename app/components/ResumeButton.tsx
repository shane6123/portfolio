import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
	return (
		<Link
			href="/resume/shane_alam_cv.pdf"
			target="_blank"
			download
		>
			<button
				type="button"
				className="  font-medium text-center px-2 py-2 flex gap-1 justify-center rounded-md transition ease-in-out delay-150 bg-[#915EFF] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300"
			>
				<Image
					src="/resume.svg"
					width={18}
					height={18}
					alt="resume"
					className="object-contain animate-pulse"
				/>
				<span className="lg:block   hidden text-white">Resume</span>
			</button>
		</Link>
	);
};

export default ResumeButton;

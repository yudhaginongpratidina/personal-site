import { MdWebAsset } from "react-icons/md";
import { SiPostman } from "react-icons/si";
import { FaQuidditch } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div className="w-full h-[290px] md:h-[400px] px-6 flex flex-col items-start justify-center bg-gray-800 select-none">
                <div className="w-full container">
                    <div className="w-full max-w-lg flex flex-col gap-2.5">
                        <h2 className="text-white text-lg md:text-xl font-bold">HI, I AM YUDHA</h2>
                        <h1 className="text-white text-3xl md:text-5xl font-bold">Full Stack Developer</h1>
                        <p className="text-white text-sm md:text-lg text-justify">
                            A junior full stack developer who curently focused on Web Development. Other than that,
                            I also interested in Mobile and AI Development. I lover to learn new things and always open new opportunities.
                        </p>
                        <div className="flex gap-4">
                            <button className="py-1.5 px-4 bg-blue-500 hover:bg-blue-600 text-sm font-medium text-white rounded duration-200">Download CV</button>
                            <button className="py-1.5 px-4 border hover:bg-gray-700 hover:border-gray-700 text-sm font-medium text-white rounded duration-200">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full h-[340px] flex flex-col items-center justify-center gap-8 text-center select-none">
                <div className="w-full flex flex-col gap-2.5">
                    <h1 className="text-2xl md:text-4xl font-bold">SKILL AND EXPERTISE</h1>
                    <h2 className="text-sm md:text-lg">Explore some skill I m proficient in to deliver high quality solutions</h2>
                </div>
                <div className="w-full flex flex-wrap items-center justify-center gap-10 md:gap-14">
                    <div className="flex flex-col items-center justify-center gap-0.5">
                        <MdWebAsset className="w-8 h-8 md:w-9 md:h-9" />
                        <p className="text-sm font-medium">Web Development</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-0.5">
                        <SiPostman className="w-8 h-8 md:w-9 md:h-9" />
                        <p className="text-sm font-medium">RESTfull API</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-0.5">
                        <FaQuidditch className="w-8 h-8 md:w-9 md:h-9" />
                        <p className="text-sm font-medium">UI / UX</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-0.5">
                        <FaLinux className="w-8 h-8 md:w-9 md:h-9" />
                        <p className="text-sm font-medium">Linux</p>
                    </div>
                </div>
            </div>

            <div className="w-full py-6 h-[320px] max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-x-4 gap-y-6 select-none">
                <div className="w-full flex flex-col items-center gap-2.5">
                    <h1 className="text-xl font-bold">LANGUAGE & FRAMEWORKS</h1>
                    <div className="flex items-center justify-center flex-wrap gap-4">
                        <span className="text-sm font-medium">HTML</span>
                        <span className="text-sm font-medium">CSS</span>
                        <span className="text-sm font-medium">JavaScript</span>
                        <span className="text-sm font-medium">TypeScript</span>
                        <span className="text-sm font-medium">Golang</span>
                        <span className="text-sm font-medium">Python</span>
                        <span className="text-sm font-medium">ReactJS</span>
                        <span className="text-sm font-medium">NextJS</span>
                        <span className="text-sm font-medium">TailwindCSS</span>
                        <span className="text-sm font-medium">NodeJS</span>
                        <span className="text-sm font-medium">ExpressJS</span>
                        <span className="text-sm font-medium">MySQL</span>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-2.5 select-none">
                    <h1 className="text-xl font-bold">TOOLS</h1>
                    <div className="flex items-center justify-center flex-wrap gap-4">
                        <span className="text-sm font-medium">Visual Studio Code</span>
                        <span className="text-sm font-medium">Jet Brains</span>
                        <span className="text-sm font-medium">Git</span>
                        <span className="text-sm font-medium">GitHub</span>
                        <span className="text-sm font-medium">Figma</span>
                        <span className="text-sm font-medium">Postman</span>
                    </div>
                </div>
            </div>

            <div className="w-full py-8 flex flex-col items-center justify-center gap-8 text-center bg-gray-800 text-white select-none">
                <div className="w-full flex flex-col gap-2.5 px-6">
                    <h1 className="text-2xl md:text-4xl font-bold">MY PROJECT</h1>
                    <h2 className="text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur!</h2>
                </div>

                <div className="w-full flex flex-col justify-center items-center px-6 gap-4">
                    <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="w-full h-[260px] border rounded"></div>
                        <div className="w-full h-[260px] border rounded"></div>
                    </div>

                    <button className=" text-lg font-medium text-white hover:underline hover:underline-offset-8">More Project</button>
                </div>
            </div>
        </>
    );
}

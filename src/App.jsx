import './App.css'
import {useLayoutEffect} from "react";

function App() {
    const canvas = document.querySelector(".canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    const frameCount = 286;

    const currentFrame = (index) => `./ear1/${(index + 1).toString()}.ext`;

    const images = [];
    let ball = { frame: 0 };

    useLayoutEffect(() => {
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            console.log(currentFrame(i));
            images.push(img);
        }

        gsap.to(ball, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                scrub: 0.5,
                pin: "canvas",
                end: "500%",
            },
            onUpdate: render,
        });

        gsap.fromTo(
            ".ball-text",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                scrollTrigger: {
                    scrub: 1,

                    start: "50%",
                    end: "55%",
                },
                onComplete: () => {
                    gsap.to(".ball-text", { opacity: 0 });
                },
            }
        );

        images[0].onload = render;
    })

    function render() {
        context.canvas.width = images[0].width;
        context.canvas.height = images[0].height;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[ball.frame], 0, 0);
    }

    return (
    <div className="App">
        <h2 className="ball-text">Looks cool?</h2>
        <canvas className="canvas"></canvas>
        <div className="details">
            <nav
                className="fixed flex flex-row top-0 left-0 right-0 justify-between text-lg text-white space-x-4 font-extrabold"
            >
                <div className="m-4">@ THE NEW NOTHING SITE</div>
                <div className="flex">
                    <div
                        className="bg-white bg-opacity-10 p-2 pl-4 pr-4 mt-3 mr-3 rounded-lg drop-shadow-2xl hover:bg-opacity-20"
                    >
                        Phone 1
                    </div>
                    <div
                        className="bg-white bg-opacity-10 p-2 pl-4 pr-4 mt-3 mr-4 rounded-lg drop-shadow-2xl hover:bg-opacity-20"
                    >
                        Ear 1
                    </div>
                </div>
            </nav>
            <div className="shadow-2xl p-4 rounded-2xl flex">
                <h1 className="font-extrabold p-2">You know whats even more cool?</h1>
                <a href="https://www.soumik-das.com/"
                   className="end font-extrabold text-sm p-2 m-3 ml-0 bg-black bg-opacity-10 rounded-lg hover:bg-white hover:drop-shadow-lg">this</a>
            </div>
            <div className="fixed text-base font-black text-white bottom-0 left-0 right-0 ml-[78%] p-3 pl-5">
                <div>made with love ♥ by soumik das</div>
            </div>
        </div>
        <h2 className="ball-text">Looks cool?</h2>
        <canvas className="canvas"></canvas>
        <div className="details">
            <nav
                className="fixed flex flex-row top-0 left-0 right-0 justify-between text-lg text-white space-x-4 font-extrabold"
            >
                <div className="m-4">@ THE NEW NOTHING SITE</div>
                <div className="flex">
                    <div
                        className="bg-white bg-opacity-10 p-2 pl-4 pr-4 mt-3 mr-3 rounded-lg drop-shadow-2xl hover:bg-opacity-20"
                    >
                        Phone 1
                    </div>
                    <div
                        className="bg-white bg-opacity-10 p-2 pl-4 pr-4 mt-3 mr-4 rounded-lg drop-shadow-2xl hover:bg-opacity-20"
                    >
                        Ear 1
                    </div>
                </div>
            </nav>
            <div className="shadow-2xl p-4 rounded-2xl flex">
                <h1 className="font-extrabold p-2">You know whats even more cool?</h1>
                <a href="https://www.soumik-das.com/"
                   className="end font-extrabold text-sm p-2 m-3 ml-0 bg-black bg-opacity-10 rounded-lg hover:bg-white hover:drop-shadow-lg">this</a>
            </div>
            <div className="fixed text-base font-black text-white bottom-0 left-0 right-0 ml-[78%] p-3 pl-5">
                <div>made with love ♥ by soumik das</div>
            </div>
        </div>
        <h2 className="ball-text">Looks cool?</h2>
        <canvas className="canvas"></canvas>
        <div className="details">
            <nav
                className="fixed flex flex-row top-0 left-0 right-0 justify-between text-lg text-white space-x-4 font-extrabold"
            >
                <div className="m-4">@ THE NEW NOTHING SITE</div>
                <div className="flex">
                    <div
                        className="bg-white bg-opacity-10 p-2 pl-4 pr-4 mt-3 mr-3 rounded-lg drop-shadow-2xl hover:bg-opacity-20"
                    >
                        Phone 1
                    </div>
                    <div
                        className="bg-white bg-opacity-10 p-2 pl-4 pr-4 mt-3 mr-4 rounded-lg drop-shadow-2xl hover:bg-opacity-20"
                    >
                        Ear 1
                    </div>
                </div>
            </nav>
            <div className="shadow-2xl p-4 rounded-2xl flex">
                <h1 className="font-extrabold p-2">You know whats even more cool?</h1>
                <a href="https://www.soumik-das.com/"
                   className="end font-extrabold text-sm p-2 m-3 ml-0 bg-black bg-opacity-10 rounded-lg hover:bg-white hover:drop-shadow-lg">this</a>
            </div>
            <div className="fixed text-base font-black text-white bottom-0 left-0 right-0 ml-[78%] p-3 pl-5">
                <div>made with love ♥ by soumik das</div>
            </div>
        </div>
    </div>
  )
}

export default App

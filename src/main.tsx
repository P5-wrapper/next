import dynamic from "next/dynamic";

// noinspection JSUnusedGlobalSymbols
export const NextReactP5Wrapper = dynamic(
    async () => {
        const { ReactP5Wrapper } = await import('react-p5-wrapper');

        return ReactP5Wrapper;
    },
    {
        ssr: false
    },
);
import crowd from "../../assets/crowd.png";
import movie from "../../assets/movie.png";
import nft from "../../assets/nft.png";
import team from "../../assets/team.png";
import landing from "../../assets/ret.png";
import eazi from "../../assets/eazi.png";
import lend from "../../assets/lend.png";
import dash from "../../assets/dashboard.png";
import kanki from "../../assets/kanki.png";

export const enums = [
    {
        name: 'RetailLoop Dashboard',
        image: dash,
        live: "https://app.retailloop.co",
        stack: ["React", "Chakra-UI", "React-Redux", "Redux-Saga",]
    },
    {
        name: 'RetailLoop Landing Page',
        image: landing,
        live: "https://www.retailloop.co/",
        stack: ["React", "Chakra-UI"]
    },
    {
        name: 'EaziPay Assessment',
        image: eazi,
        live: "https://eazipay-assesment.vercel.app/",
        stack: ["React", "Chakra-UI", "Typescript"],
        github: "https://github.com/mystiexx/eazipay_assesment"
    },
    {
        name: 'LendSQR Assessment',
        image: lend,
        live: "https://lendsqr-fe-test-ebon.vercel.app/",
        stack: ["React", "Chakra-UI", "Typescript"],
        github: "https://github.com/mystiexx/lendsqr_fe_test"
    },
    {
        name: 'Kanki Studio Landing Page',
        image: kanki,
        live: "https://kanki-studio-landing-page.vercel.app/home",
        stack: ["React", "Chakra-UI",],
    },
    {
        id: 21,
        name: "Web 3 Crowdfunding Platform",
        github: "https://github.com/mystiexx/zues",
        live: "https://zues-steel.vercel.app",
        image: crowd,
    },
    {
        id: 22,
        name: "Movie Details",
        github: "https://github.com/mystiexx/movie_details",
        live: "https://movie-details-xi.vercel.app/",
        image: movie,
        stack: ["React", "Chakra-UI", "Thirdwebjs"]

    },

    {
        id: 23,
        name: "NFTs collection",
        github: "https://github.com/mystiexx/view-nft-collection",
        live: "https://view-nft-collection.vercel.app/",
        image: nft,
        stack: ["React"]
    },
    {
        id: 25,
        name: "Random Teams",
        github: "https://github.com/mystiexx/teamio",
        live: "https://teamio.vercel.app/",
        image: team,
    },
];

import styled from "styled-components";

import BgImg from "../../assets/images/landing.svg";
// import BgImg from "../../assets/images/landing.png";

export const PageLanding = styled.div`
    background: linear-gradient(
        329.54deg,
        var(--gradient-blue0) 0%,
        var(--gradient-blue100) 100%
    );

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1100px;

    height: 100%;
    max-height: 680px;

    display: flex;
    /* align-items: flex-start; */
    justify-content: space-between;
    flex-direction: column;

    position: relative;

    background: url(${BgImg}) no-repeat 80% center;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
        }

        a {
            /* width: 80px;
        height: 80px; */
            background-color: var(--blue-dark);
            color: var(--white);
            border-radius: 30px;
            padding: 13px 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            text-decoration: none;
            transition: background-color 0.2s;

            &:hover {
                color: var(--blue);
                background-color: var(--cyan);
            }
        }
    }

    main {
        max-width: 358px;

        h1 {
            font-size: 76px;
            font-weight: 900;
            line-height: 70px;
        }

        p {
            margin-top: 48px;
            font-size: 24px;
            line-height: 34px;
        }
    }

    > a {
        position: absolute;

        bottom: 0;
        right: 0;

        width: 80px;
        height: 80px;
        background-color: var(--yellow);
        color: var(--brown);
        border-radius: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        /* text-decoration: none; */
        transition: background-color 0.2s;

        &:hover {
            color: var(--blue);
            background-color: var(--cyan);
        }

        & [data-icon] {
            font-size: 32px;
        }
    }
`;

export const LocationCity = styled.div`
    position: absolute;

    /* top: 0; */
    left: 304px;

    font-size: 24;
    line-height: 34px;

    display: flex;
    flex-direction: column;
    text-align: left;

    strong {
        font-weight: 800;
    }

    span {
    }
`;

import styled from "styled-components";

export const PageMap = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
    display: flex;

    aside {
        width: 440px;
        padding: 80px;
        background: linear-gradient(
            329.54deg,
            var(--gradient-blue0) 0%,
            var(--gradient-blue100) 100%
        );

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
            /* max-width: 256px; */
            margin-top: 64px;

            font-size: 48px;
            font-weight: 800;
            line-height: 42px;
        }

        p {
            margin-top: 24px;
            line-height: 28px;
        }
    }

    footer {
        display: flex;
        flex-direction: column;

        line-height: 28px;

        strong {
            font-weight: 800;
        }
    }

    & > a {
        position: absolute;

        bottom: 40px;
        right: 40px;

        width: 80px;
        height: 80px;
        background-color: var(--blue);
        color: var(--white);
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

    .leaflet-container {
        /* <Map></Map */
        z-index: 0;

        .leaflet-control-attribution {
            a {
                display: none;
            }
        }
    }

    .map-popup {
        /* <Popup></Popup */

        .leaflet-popup-content-wrapper {
            background-color: var(--bga);
            border-radius: 15px;
            transition: background-color 0.2s;

            &:hover {
                background-color: var(--bg);
            }
        }

        .leaflet-popup-content {
            color: var(--blue);

            font-size: 20px;
            font-weight: 700;
            margin: 8px 12px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            position: relative;

            & > a {
                position: absolute;
                right: 0;

                width: 32px;
                height: 32px;
                background-color: var(--blue);
                box-shadow: 17.2868px 27.6589px 41.4884px var(--titles);
                color: var(--white);
                border-radius: 12px;

                display: flex;
                align-items: center;
                justify-content: center;

                transition: background-color 0.2s;

                &:hover {
                    color: var(--blue);
                    background-color: var(--cyan);
                }

                & [data-icon] {
                    font-size: 24px;
                }
            }
        }

        .leaflet-popup-tip-container {
            display: none;
        }
    }
`;

import styled from "styled-components";

export const PageOrphanage = styled.div`
    display: flex;
    min-height: 100vh;

    main {
        flex: 1;
    }
`;

export const Details = styled.div`
    width: 700px;
    margin: 64px auto;

    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 20px;

    overflow: hidden;

    > img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
`;

export const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 16px;

    margin: 16px 40px 0;

    button {
        border: 0;
        height: 88px;
        background: none;
        cursor: pointer;
        border-radius: 20px;
        overflow: hidden;
        outline: none;

        opacity: 0.6;
    }

    button.active {
        opacity: 1;
    }

    button img {
        width: 100%;
        height: 88px;
        object-fit: cover;
    }
`;

export const DetailsContent = styled.div`
    padding: 80px;

    & [data-icon] {
        font-size: 32px;
    }

    h1 {
        color: var(--titles);
        font-size: 54px;
        line-height: 54px;
        margin-bottom: 8px;
    }

    p {
        line-height: 28px;
        color: var(--text-gray);
        margin-top: 24px;
    }

    hr {
        width: 100%;
        height: 1px;
        border: 0;
        background: var(--border);
        margin: 64px 0;
    }

    h2 {
        font-size: 36px;
        line-height: 46px;
        color: var(--titles);
    }

    button {
        margin-top: 64px;

        width: 100%;
        height: 64px;
        border: 0;
        cursor: pointer;
        background: var(--green);
        border-radius: 20px;
        color: var(--white);
        font-weight: 800;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: background-color 0.2s;
    }

    button svg {
        margin-right: 16px;
    }

    button:hover {
        background: var(--green-hover);
    }
`;
export const MapContainer = styled.div`
    margin-top: 64px;
    background: var(--blue-low);
    border: 1px solid var(--blue-low);
    border-radius: 20px;

    footer {
        padding: 20px 0;
        text-align: center;
    }

    footer a {
        line-height: 24px;
        color: var(--text-blue);
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: var(--blue);
        }
    }

    .leaflet-container {
        border-bottom: 1px solid var(--border);
        border-radius: 20px 20px 0px 0px;

        .leaflet-control-attribution {
            a {
                display: none;
            }
        }
    }
`;

export const OpeningDetails = styled.div`
    margin-top: 24px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

    div {
        padding: 32px 24px;
        border-radius: 20px;
        line-height: 28px;
    }

    div svg {
        display: block;
        margin-bottom: 20px;
    }

    .Hours {
        background: linear-gradient(
            149.97deg,
            var(--blue-low) 8.13%,
            var(--white) 92.67%
        );
        border: 1px solid var(--border-blue-low);
        color: var(--blue);
    }

    .Open-On-Weekends {
        background: linear-gradient(
            154.16deg,
            var(--green-low) 7.85%,
            var(--white) 91.03%
        );
        border: 1px solid var(--border-green-low);
        color: var(--green);
    }

    .Dont-On-Weekends {
        background: linear-gradient(
            154.16deg,
            var(--red-low) 7.85%,
            var(--white) 91.03%
        );
        border: 1px solid var(--border-red-low);
        color: var(--red);
    }
`;

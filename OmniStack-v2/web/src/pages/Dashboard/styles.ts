import styled from "styled-components";

export const PageDashboard = styled.div`
    display: flex;
    min-height: 100vh;

    main {
        flex: 1;

        margin: 64px 112px 40px 208px;

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-bottom: 40px;
            padding-bottom: 24px;
            border-bottom: 1px solid var(--border);

            h1 {
                color: var(--titles);
                font-size: 54px;
                line-height: 54px;
            }

            span {
                line-height: 28px;
                color: var(--text-gray);
            }
        }
    }
`;

export const DashboardContent = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;
    gap: 32px 32px;
`;

export const MapContainer = styled.div`
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 20px;

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 20px 32px;

        h2 {
            font-size: 24px;
            line-height: 34px;
            color: var(--titles);
        }

        a + a {
            margin-left: 8px;
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

export const EditorSelection = styled.div`
    display: flex;

    a {
        width: 48px;
        height: 48px;
        background-color: var(--bg);
        color: var(--blue);
        border-radius: 16px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: background-color 0.2s;

        &:hover {
            color: var(--white);
            background-color: var(--blue);
        }

        & [data-icon] {
            font-size: 24px;
        }
    }
`;

export const LogoEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
    }

    p {
        color: var(--text-gray);
        font-size: 32px;
    }
`;


export const AsideContainer = styled.aside`
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(
        329.54deg,
        var(--gradient-blue0) 0%,
        var(--gradient-blue100) 100%
    );

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        width: 48px;
    }

    footer {
        /* a { */
        button {
            width: 48px;
            height: 48px;

            border: 0;

            background: var(--blue-dark);
            border-radius: 16px;
            border: 1px solid var(--blue);
            color: var(--white);

            cursor: pointer;

            transition: background-color 0.2s;

            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background: var(--cyan);
                color: var(--blue);
            }

            & [data-icon] {
                font-size: 24px;
            }
        }
    }
`;

export const CreatePendingSelection = styled.div`
    display: flex;
    flex-direction: column;

    button {
        width: 48px;
        height: 48px;

        border: 0;

        background: var(--blue-dark);
        border-radius: 16px;
        border: 1px solid var(--blue);
        color: var(--white);

        cursor: pointer;

        transition: background-color 0.2s;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background: var(--cyan);
            color: var(--blue);
        }

        & [data-icon] {
            font-size: 24px;
        }
    }

    button + button {
        margin-top: 16px;
    }

    .active {
        color: var(--text-blue);
        background: var(--yellow);
    }
`;
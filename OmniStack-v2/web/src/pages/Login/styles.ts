import styled from "styled-components";

export const PageLogin = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    grid-template-areas: "aside aside main";

    height: 100vh;

    aside {
        grid-area: aside;

        background: linear-gradient(
            329.54deg,
            var(--gradient-blue0) 0%,
            var(--gradient-blue100) 100%
        );

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    main {
        grid-area: main;

        background-color: var(--white);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: relative;

        > a {
            position: absolute;

            top: 40px;
            right: 40px;

            width: 48px;
            height: 48px;
            background-color: var(--bg);
            color: var(--blue);
            border-radius: 16px;

            display: flex;
            align-items: center;
            justify-content: center;

            /* text-decoration: none; */
            transition: background-color 0.2s;

            &:hover {
                color: var(--white);
                background-color: var(--blue);
            }

            & [data-icon] {
                font-size: 24px;
            }
        }

        form {
            width: 90%;

            fieldset {
                border: 0;
            }

            fieldset legend {
                width: 100%;

                font-size: 32px;
                line-height: 34px;
                color: var(--titles);
                font-weight: 700;

                /* border-bottom: 1px solid var(--border); */
                margin-bottom: 40px;
                /* padding-bottom: 24px; */
            }

            > button {
                margin-top: 42px;

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

                &:hover {
                    background: var(--green-hover);
                }
                & [data-icon] {
                    font-size: 24px;
                }

                > svg {
                    margin-right: 8px;
                }
            }
        }
    }
`;

export const LocationCity = styled.div`
    margin-top: 100px;

    font-size: 24;
    line-height: 34px;

    display: flex;
    flex-direction: column;
    text-align: center;

    strong {
        font-weight: 800;
    }

    span {
    }
`;

export const CheckLostContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
        color: var(--text-gray);
        text-decoration: none;
        justify-self: center;
        align-self: center;
        padding: 8px 0 8px 8px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const InputSeparator = styled.div`
    & + div {
        margin-top: 24px;
    }

    label {
        display: flex;
        color: var(--text-gray);
        margin-bottom: 8px;
        line-height: 24px;
        justify-content: space-between;
        align-items: center;

        /* & [data-icon] {
            color: var(--blue);
            font-size: 32px;
        } */
    }

    input {
        width: 100%;
        background: var(--inputs);
        border: 1px solid var(--border);
        border-radius: 20px;
        outline: none;
        color: var(--titles);
        height: 64px;
        padding: 0 16px;

        &:focus {
            border: 1px solid var(--green);
        }
    }
`;

export const CheckBoxContainer = styled.div`
    position: relative;
    cursor: pointer;
    /* user-select: none; */
    color: var(--text-gray);

    /* line-height: 2.4rem; */
    padding: 8px 8px 8px 48px;

    /* Hide the browser's default checkbox */
    label {
        &:hover {
            text-decoration: underline;
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        input {
            position: absolute;
            opacity: 0;
            height: 0;
            width: 0;

            /* Show the checkmark when checked */
            &:checked ~ span::after {
                display: block;
            }

            &:checked ~ span {
                background-color: var(--green);
                border-color: var(--green);
            }
        }

        /* Create a custom checkbox */
        span {
            cursor: pointer;
            position: absolute;
            /* top: 0; */
            left: 0;
            height: 24px;
            width: 24px;
            border-radius: 8px;
            border: 1px solid var(--border);
            background-color: var(--inputs);
            transition: 0.2s ease;

            /* Style the checkmark/indicator */
            &::after {
                content: "";
                position: absolute;
                display: none;
                left: 0.8rem;
                top: 0.4rem;
                width: 0.4rem;
                height: 0.8rem;

                border: solid var(--white);
                border-width: 0 0.3rem 0.3rem 0;

                transform: rotate(45deg);
            }
        }
    }
`;

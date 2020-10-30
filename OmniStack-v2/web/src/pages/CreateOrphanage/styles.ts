import styled from "styled-components";

export const PageCreateOrphanage = styled.div`
    display: flex;

    main {
        flex: 1;
    }
`;

export const Form = styled.form`
    width: 700px;
    margin: 64px auto;

    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;

    .leaflet-container {
        margin-bottom: 40px;
        border: 1px solid var(--border);
        border-radius: 20px;

        .leaflet-control-attribution {
            a {
                display: none;
            }
        }
    }

    fieldset {
        border: 0;
    }

    fieldset + fieldset {
        margin-top: 50px;
    }

    fieldset legend {
        width: 100%;

        font-size: 32px;
        line-height: 34px;
        color: var(--titles);
        font-weight: 700;

        border-bottom: 1px solid var(--border);
        margin-bottom: 40px;
        padding-bottom: 24px;
    }

    > button {
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

        & [data-icon] {
            font-size: 24px;
        }
    }

    > button svg {
        margin-right: 8px;
    }

    > button:hover {
        background: var(--green-hover);
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

        & [data-icon] {
            color: var(--blue);
            font-size: 32px;
        }
        
        > input {
            margin-left: 8px;
        }
    }

    label span {
        font-size: 12px;
        color: var(--text-gray);
        /* margin-left: 24px; */
        line-height: 24px;
    }

    input,
    textarea {
        width: 100%;
        background: var(--inputs);
        border: 1px solid var(--border);
        border-radius: 20px;
        outline: none;
        color: var(--titles);
    }

    input {
        height: 64px;
        padding: 0 16px;
    }

    textarea {
        min-height: 120px;
        max-height: 240px;
        resize: vertical;
        padding: 16px;
        line-height: 28px;
    }

    input[type="file"] {
        display: none;
        /* visibility: hidden; */
    }
`;

export const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 16px;

    img {
        width: 100%;
        height: 96px;
        object-fit: cover;
        border-radius: 20px;
    }

    .New-Image {
        /* width: 100%; */
        height: 96px;
        background: var(--inputs);
        border: 1px dashed var(--blue);
        border-radius: 20px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ButtonSelector = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
        height: 64px;
        background: var(--inputs);
        border: 1px solid var(--border);
        color: var(--titles);
        cursor: pointer;
    }

    button.active {
        background: linear-gradient(
            154.16deg,
            var(--green-low) 7.85%,
            var(--white) 91.03%
        );
        /* background: var(--green-low); */
        border: 1px solid var(--border-green-low);
        color: var(--green);
    }

    button:first-child {
        border-radius: 20px 0px 0px 20px;
    }

    button:last-child {
        border-radius: 0 20px 20px 0;
        border-left: 0;
    }
`;

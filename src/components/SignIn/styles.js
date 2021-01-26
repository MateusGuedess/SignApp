import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: #8257e6;

    form {
        width: 30%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        legend {
            text-align: center;
            font-size: 30px;
        }

        fieldset {
            width: 100%;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            p {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                
                input {
                    width: 270px;
                    height: 30px;
                    border-radius: 0;
                    border: 1px solid lightgrey;
                    padding-left: 15px;

                    &::placeholder {
                        color: lightgrey;
                    }
                }
            }
        }

        button {
            width: 300px;
            height: 30px;
            border: none;
            color: white;
            background-color: #8257e6;
        }

        a {
            font-size: 12px;
            text-decoration: none;
            color: lightgray;
            margin-top: 15px;

            &:hover {
                color: #8257e6;
                transition: 0.5s;
            }
        }
    }


`;
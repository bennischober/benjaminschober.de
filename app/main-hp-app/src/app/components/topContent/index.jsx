import React from "react";
import {Typography} from "@material-ui/core";

export function TopContent(props) {
    const text = props.text;

    // I need redux global theme states to decide whether to use light textShadow or dark textShadow!
    const h1Overwrites = (isFirst) => {
        return (
            {
                fontWeight: "700",
                textShadow: "0 2px 5px rgb(206 206 206 / 50%);",
                marginTop: isFirst ? "5rem" : "0",
                '@media (min-width:960px)': {
                    marginTop: isFirst ? "25vh" : "0",
                },
                '@media (min-width:1920px)': {
                    marginTop: isFirst ? "35vh" : "0",
                },
                marginBottom: !isFirst? "5rem" : "",
            }
        );
    }

    const h2Overwrites = {
        marginTop: "1.5rem",
    }

    return (
        <header className="css-typing">
            <Typography variant="h1" sx={h1Overwrites(true)} gutterBottom>{text.intro}</Typography>
            <Typography variant="h1" sx={h1Overwrites(false)}>{text.name}</Typography>
            <h1><Typography variant="typedSubheading" sx={h2Overwrites}>{text.sub}</Typography></h1>
        </header>
    );
}
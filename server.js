// ========================
// Packages
// ========================
import express from "express";
//import { fileURLToPath } from "url"; // Because ES modules.
//import { dirname } from "path"; // Because ES modules.
//import process from "process"; // Because ES modules.

// const express = require("express");
const app = express();
//const __filename = fileURLToPath(import.meta.url); // Because ES modules.
//const __dirname = dirname(__filename); // Because ES modules.

// ========================
// Middlewares
// ========================
app.use(express.static(__dirname + "/dist/")); // For Heroku deployment.

// ========================
// Routes
// ========================
const token = process.env.APP_TOKEN; // In Heroku, "NPS" token kept here.

app.get("/acad", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            //res.send({ trends: data });
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/arch", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=arch&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/badl", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=badl&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/bibe", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=bibe&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/bisc", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=bisc&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/blca", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=blca&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/brca", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=brca&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/cany", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=cany&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/care", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=care&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/cave", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=cave&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/chis", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=chis&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/cong", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=cong&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/crla", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=crla&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/cuva", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=cuva&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/deva", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=deva&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/dena", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=dena&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/drto", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=drto&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/ever", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=ever&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/gaar", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=gaar&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/jeff", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=jeff&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/glba", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=glba&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/glac", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=glac&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/grca", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=grca&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/grte", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=grte&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/grba", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=grba&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/grsa", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=grsa&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/grsm", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=grsm&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/gumo", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=gumo&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/hale", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=hale&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/havo", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=havo&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/hosp", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=hosp&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/indu", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=indu&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/isro", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=isro&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/jotr", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=jotr&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/katm", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=katm&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/kefj", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=kefj&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/kova", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=kova&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/lacl", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=lacl&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/lavo", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=lavo&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/maca", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=maca&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/meve", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=meve&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/mora", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=mora&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/npsa", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=npsa&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/npnh", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=npnh&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/neri", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=neri&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/noca", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=noca&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/olym", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=olym&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/pefo", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=pefo&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/pinn", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=pinn&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/romo", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=romo&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/sagu", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=sagu&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/seki", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=seki&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/shen", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=shen&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/thro", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=thro&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/viis", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=viis&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/voya", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=voya&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/whsa", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=whsa&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/wica", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=wica&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/wotr", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=wotr&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/wrst", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=wrst&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/yell", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=yell&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/yose", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=yose&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/zion", (req, res) => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=zion&api_key=${token}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

// ========================
// Listen
// ========================
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

/* app.listen(4040, () => {
    console.log("Server listening on port 4040");
}); */

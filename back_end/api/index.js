import app from "..";

app.get('/', async (req, resp) => {
    resp.send('hello ji! connect ho gya.');
})

export default app;
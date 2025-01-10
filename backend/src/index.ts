import Airtable from 'airtable';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Express } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

Airtable.configure({ apiKey: process.env.AIRTABLE_API_TOKEN });

const base = Airtable.base(`${process.env.AIRTABLE_BASE_ID}`);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});
app.use(jsonParser);
app.use(urlencodedParser);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// POST - LOGIN
app.post('/login', async (req, res) => {
    const { email, password } = req?.body;
    const filterByFormula = `AND(email="${email}", password="${password}")`;

    base('users')
        .select({
            maxRecords: 1,
            filterByFormula,
            view: 'Grid view',
        })
        .eachPage(
            function page(records, fetchNextPage) {
                try {
                    res.send(
                        JSON.stringify({
                            ...records[0].fields,
                            recordId: records[0].id,
                        })
                    );
                } catch (e) {
                    res.status(404).send('Not Found');
                }
                fetchNextPage();
            },
            function done(err) {
                if (err) {
                    console.error(err);
                }
            }
        );
});

// GET - SESSION USER
app.get('/session-user/:userId', async (req, res) => {
    const { userId } = req?.params;

    base('users').find(userId, (err, record) => {
        if (err) {
            res.status(404).send('Not Found');
        }
        if (record) {
            res.send(
                JSON.stringify({
                    ...record?.fields,
                    recordId: record?.id,
                })
            );
        }
    });
});

// GET - MENS DRAW
app.get('/mens', async (_req, res) => {
    const mensDraw: any[] = [];

    base('mens')
        .select({
            maxRecords: 128,
            view: 'Grid view',
            pageSize: 64,
            sort: [{ field: 'id', direction: 'asc' }],
        })
        .eachPage(
            function page(records, fetchNextPage) {
                records.forEach(function (record) {
                    mensDraw.push(record.fields);
                });
                fetchNextPage();
            },
            function done(err) {
                if (err) {
                    console.error(err);
                } else {
                    res.send(JSON.stringify(mensDraw));
                }
            }
        );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const express = require("express");

const { criarBanco } = require("./database");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.send(

        `
            <body style="font-family: Arial, sans-serif">
                <h1>Pessoas Voluntárias para Enchentes no Brasil</h1>
                <p>
                    Endpoint que leva as pessoas voluntárias cadastradas:
                    <code>/voluntarios</code>
                </p>
            </body>
        `
    );
});

app.get("/voluntarios", async (req, res) => {

    const db = await criarBanco();

    const voluntarios = await db.all(`SELECT * FROM voluntarios`);

    res.json(voluntarios);
});

app.get("/voluntarios/:id", async (req, res) => {

    const { id } = req.params;

    const db = await criarBanco();

    const voluntarioId = await db.all(`SELECT * FROM voluntarios WHERE id = ?`, [id]);

    res.json(voluntarioId);
});

app.post("/voluntarios", async (req, res) => {

    const { nome, idade, genero, email, telefone, cidade, estado, tipo_ajuda, disponibilidade } = req.body;

    const db = await criarBanco();

    await db.run(

        `
            INSERT INTO voluntarios (nome, idade, genero, email, telefone, cidade, estado, tipo_ajuda, disponibilidade) VALUES

            (?, ?, ?, ?, ?, ?, ?, ?, ?)

        `, [nome, idade, genero, email, telefone, cidade, estado, tipo_ajuda, disponibilidade]
    );

    res.send(`A pessoa voluntária com o id ${id} foi adicionada com suceso!`);
});

app.put("/voluntarios/:id", async (req, res) => {

    const { id } = req.params;

    const { idade, email, telefone, cidade, estado, tipo_ajuda, disponibilidade } = req.body;

    const db = await criarBanco();

    await db.run(

        `UPDATE voluntarios SET idade = ?, email = ?, telefone = ?, cidade = ?, estado = ?, tipo_ajuda = ?, disponibilidade = ?, WHERE id = ?`,

        [idade, email, telefone, cidade, estado, tipo_ajuda, disponibilidade, id]
    );

    res.send(`A pessoa voluntária com o id ${id} foi atualizada com sucesso!`);
});

app.delete("/voluntarios/:id", async (req, res) => {

    const { id } = req.params;

    const db = await criarBanco();

    await db.run(`DELETE FROM voluntarios WHERE id = ?`, [id]);

    res.send(`A pessoa voluntária com o id ${id} foi removida com sucesso!`)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});

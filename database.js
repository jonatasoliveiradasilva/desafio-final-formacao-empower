const sqlite3 = require("sqlite3");

const { open } = require("sqlite");

const criarBanco = async () => {

    const db = await open({
        filename: "./database.db",
        driver: sqlite3.Database,
    });

    await db.exec(

        `
            CREATE TABLE IF NOT EXISTS voluntarios (

                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                idade INTEGER NOT NULL,
                genero TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                telefone TEXT NOT NULL,
                cidade TEXT NOT NULL,
                estado TEXT NOT NULL,
                tipo_ajuda TEXT NOT NULL,
                disponibilidade TEXT NOT NULL
            );
        `
    );

    const voluntarios = await db.get(`SELECT COUNT(*) as total FROM voluntarios`);

    if (voluntarios.total === 0) {

        await db.exec(

            `
                INSERT INTO voluntarios (nome, idade, genero, email, telefone, cidade, estado, tipo_ajuda, disponibilidade) VALUES
                    
                ("Ana Souza", 28, "Feminino", "ana.souza@email.com", "11987654321", "São Paulo", "SP", "Alimentos", "Final de Semana"),
                ("Carlos Mendes", 35, "Masculino", "carlos.mendes@email.com", "21999887766", "Rio de Janeiro", "RJ", "Limpeza", "Período Integral"),
                ("Juliana Lima", 31, "Feminino", "juliana.lima@email.com", "31988776655", "Belo Horizonte", "MG", "Resgate", "Manhã"),
                ("Rafael Costa", 27, "Masculino", "rafael.costa@email.com", "41977665544", "Curitiba", "PR", "Alimentos", "Tarde"),
                ("Fernanda Alves", 42, "Feminino", "fernanda.alves@email.com", "11966554433", "Campinas", "SP", "Limpeza", "Final de Semana"),
                ("Bruno Rocha", 38, "Masculino", "bruno.rocha@email.com", "51955443322", "Porto Alegre", "RS", "Resgate", "Período Integral"),
                ("Mariana Santos", 29, "Feminino", "mariana.santos@email.com", "71944332211", "Salvador", "BA", "Alimentos", "Manhã"),
                ("Lucas Ferreira", 24, "Masculino", "lucas.ferreira@email.com", "61933221100", "Brasília", "DF", "Limpeza", "Tarde"),
                ("Patrícia Gomes", 33, "Feminino", "patricia.gomes@email.com", "81922110099", "Recife", "PE", "Resgate", "Final de Semana"),
                ("Diego Martins", 36, "Masculino", "diego.martins@email.com", "11911009988", "Guarulhos", "SP", "Resgate", "Período Integral");
            `
        );
    }

    const tabela = await db.all(`SELECT * FROM voluntarios`);
    console.table(tabela);

    const feminino = await db.all(`SELECT * FROM voluntarios WHERE genero = "Feminino"`);
    console.table(feminino);

    const masculino = await db.all(`SELECT * FROM voluntarios WHERE genero = "Masculino"`);
    console.table(masculino);

    const tipoAjudaAlimentos = await db.all(`SELECT * FROM voluntarios WHERE tipo_ajuda = "Alimentos"`);
    console.table(tipoAjudaAlimentos);

    const tipoAjudaLimpeza = await db.all(`SELECT * FROM voluntarios WHERE tipo_ajuda = "Limpeza"`);
    console.table(tipoAjudaLimpeza);

    const tipoAjudaResgate = await db.all(`SELECT * FROM voluntarios WHERE tipo_ajuda = "Resgate"`);
    console.table(tipoAjudaResgate);

    const disponibilidadeManha = await db.all(`SELECT * FROM voluntarios WHERE disponibilidade = "Manhã"`);
    console.table(disponibilidadeManha);

    const disponibilidadeTarde = await db.all(`SELECT * FROM voluntarios WHERE disponibilidade = "Tarde"`);
    console.table(disponibilidadeTarde);

    const disponibilidadeIntegral = await db.all(`SELECT * FROM voluntarios WHERE disponibilidade = "Período Integral"`);
    console.table(disponibilidadeIntegral);

    const disponibilidadeFinalSemana = await db.all(`SELECT * FROM voluntarios WHERE disponibilidade = "Final de Semana"`);
    console.table(disponibilidadeFinalSemana);

    return db;
}

module.exports = { criarBanco };

import { SiteClient } from "datocms-client";

export default async function recebedorDeRequest(request, response) {
  if (request.method === "POST") {
    const TOKEN = "6267970cad2fa4446cb1c64e65a3b5";

    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: "1230485",
      ...request.body,
      //nome: "Esdeath",
      //descricao: "Teste para Esdearh",
      //link: "https://i.pinimg.com/736x/21/4e/a6/214ea6d42112a87b4ce1660e194d2e4d.jpg",
      //tecnologias: "Esdeath e a melhor",
    });

    response.json({
      dados: "Algum Dado Qualqyer",
      registroCriado: registroCriado,
    });
    return;
  }
  response.status(404).json({
    message: "ainda não temos nada no GET, mas no POST tem!",
  });
}

export default function Home() {
  const objetos = [
    {nome: "João", idade: 18 },
    {nome: "Caique", idade: 20 },
    { nome: "Silas", idade: 21 },
  ];
  
  return (
    <main>
      <h1>Next.js</h1>
      <ul>
        {objetos.map((objeto) => (<li key={objeto.nome}>{objeto.nome} {objeto.idade}</li>))}
      </ul>
    </main>
  );
}

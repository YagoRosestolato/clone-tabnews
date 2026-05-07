function status (request, response) {
  response.status(200).json({ message: "Alunos do curso.dev sao pessoas acima da média" })
}


export default status
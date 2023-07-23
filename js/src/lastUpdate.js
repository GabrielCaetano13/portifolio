document.addEventListener("DOMContentLoaded", function() {
    const lastCommitDateElement = document.getElementById("lastCommitDate");
    const owner = "GabrielCaetano13"; // Substitua pelo nome do usuário ou organização do repositório
    const repo = "portifolio"; // Substitua pelo nome do repositório

    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const lastCommitDate = new Date(data[0].commit.author.date);
          const formattedDate = `${lastCommitDate.getDate()}/${lastCommitDate.getMonth() + 1}/${lastCommitDate.getFullYear()}`;
          lastCommitDateElement.textContent = formattedDate;
        } else {
          lastCommitDateElement.textContent = "Nenhum commit encontrado.";
        }
      })
      .catch(error => {
        console.log("Erro na requisição:", error);
        lastCommitDateElement.textContent = "Erro ao obter a data do último commit.";
      });
  });
document.getElementById("nao").addEventListener("click", function() {
    // Move o botão para uma posição aleatória na tela
    let container = document.getElementById("container");
    let maxX = window.innerWidth - 200; // Tamanho máximo da largura para o botão
    let maxY = window.innerHeight - 100; // Tamanho máximo da altura para o botão
  
    // Gera um valor aleatório para a posição
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;
  
    // Aplica a nova posição no botão
    this.style.position = 'absolute';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
  });
  
  document.getElementById("sim").addEventListener("click", function() {
    // Redireciona para a tela de escolha de esmalte
    window.location.href = "esmaltes.html";
  });
  esmalteBtn.addEventListener("click", function () {
    // Gira a roleta
    const randomDeg = Math.random() * 360 + 1080; // 3 voltas + ângulo aleatório
    roleta.style.transform = `rotate(${randomDeg}deg)`;
  
    // Calcula o segmento da roleta após o giro
    setTimeout(function () {
      const finalAngle = randomDeg % 360; // Ângulo após as rotações completas
      const segmentIndex = Math.floor(finalAngle / 45); // Cada segmento ocupa 45 graus
      const corEscolhida = roxos[segmentIndex];
  
      // Exibe a cor escolhida
      alert(`Tonalidade escolhida: ${corEscolhida}`);
    }, 3000); // Tempo da rotação
  });
  

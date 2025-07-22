// Seleção dos elementos
const form = document.getElementById('formulario');
const campos = document.querySelectorAll('.campo');

// Função para validar email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para validar telefone (formato brasileiro básico)
function validarTelefone(telefone) {
  const regex = /^[\(\)\s\-\+\d]{10,}$/;
  return regex.test(telefone.replace(/\s/g, ''));
}

// Função para mostrar erro
function mostrarErro(campo) {
  const container = campo.parentElement;
  const erro = container.querySelector('.erro');
  
  campo.classList.add('erro-campo');
  campo.classList.remove('sucesso-campo');
  erro.classList.add('mostrar');
}

// Função para mostrar sucesso
function mostrarSucesso(campo) {
  const container = campo.parentElement;
  const erro = container.querySelector('.erro');
  
  campo.classList.remove('erro-campo');
  campo.classList.add('sucesso-campo');
  erro.classList.remove('mostrar');
}

// Função para resetar campo
function resetarCampo(campo) {
  const container = campo.parentElement;
  const erro = container.querySelector('.erro');
  
  campo.classList.remove('erro-campo', 'sucesso-campo');
  erro.classList.remove('mostrar');
}

// Função para validar campo individual
function validarCampo(campo) {
  const valor = campo.value.trim();
  const tipo = campo.type;
  const nome = campo.name;

  // Verificar se o campo está vazio
  if (!valor) {
    mostrarErro(campo);
    return false;
  }

  // Validações específicas
  if (tipo === 'email' && !validarEmail(valor)) {
    mostrarErro(campo);
    return false;
  }

  if (nome === 'telefone' && !validarTelefone(valor)) {
    mostrarErro(campo);
    return false;
  }

  // Se chegou até aqui, o campo é válido
  mostrarSucesso(campo);
  return true;
}

// Event listeners para validação em tempo real
campos.forEach(campo => {
  // Validar quando o usuário sair do campo
  campo.addEventListener('blur', function() {
    if (this.value.trim()) {
      validarCampo(this);
    }
  });

  // Resetar erro quando o usuário começar a digitar
  campo.addEventListener('input', function() {
    if (this.classList.contains('erro-campo')) {
      resetarCampo(this);
    }
  });

  // Validar quando o usuário pressionar Enter
  campo.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim()) {
      validarCampo(this);
    }
  });
});

// Event listener para o submit do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault();

  let formularioValido = true;

  // Validar todos os campos
  campos.forEach(campo => {
    const campoValido = validarCampo(campo);
    if (!campoValido) {
      formularioValido = false;
    }
  });

  // Se o formulário for válido, simular envio
  if (formularioValido) {
    // Simular loading no botão
    const botao = form.querySelector('.botao');
    const textoOriginal = botao.textContent;
    
    botao.textContent = 'Enviando...';
    botao.disabled = true;
    
    // Simular delay de envio
    setTimeout(() => {
      alert('Formulário enviado com sucesso!');
      
      // Resetar formulário
      form.reset();
      campos.forEach(campo => resetarCampo(campo));
      
      // Restaurar botão
      botao.textContent = textoOriginal;
      botao.disabled = false;
    }, 1500);
  } else {
    // Focar no primeiro campo com erro
    const primeiroErro = form.querySelector('.erro-campo');
    if (primeiroErro) {
      primeiroErro.focus();
    }
  }
});

// Prevenir envio do formulário com Enter em campos de texto
campos.forEach(campo => {
  if (campo.tagName !== 'TEXTAREA') {
    campo.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        // Mover para o próximo campo
        const camposArray = Array.from(campos);
        const indiceAtual = camposArray.indexOf(this);
        const proximoCampo = camposArray[indiceAtual + 1];
        
        if (proximoCampo) {
          proximoCampo.focus();
        } else {
          // Se for o último campo, submeter o formulário
          form.dispatchEvent(new Event('submit'));
        }
      }
    });
  }
});


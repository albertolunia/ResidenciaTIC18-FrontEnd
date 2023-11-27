// Classe Tarefa
class Tarefa {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  // Função para adicionar tarefa ao DOM
  function adicionaTarefaDOM(tarefa) {
    const listaTarefas = document.getElementById('listaTarefas');
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = tarefa.nome;
    listaTarefas.appendChild(novaTarefa);
  }
  
  // Função para adicionar tarefa ao localStorage
  function adicionaTarefaNoStorage(tarefa) {
    let tarefas = [];
    if (localStorage.getItem('tarefas')) {
      tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
  
  // Evento ao clicar no botão de adicionar
  document.getElementById('btnAdicionar').addEventListener('click', function() {
    const inputTarefa = document.getElementById('inputTarefa');
    const nomeTarefa = inputTarefa.value.trim();
  
    if (nomeTarefa !== '') {
      const novaTarefa = new Tarefa(nomeTarefa);
  
      // Adiciona a tarefa no DOM
      adicionaTarefaDOM(novaTarefa);
  
      // Adiciona a tarefa no localStorage
      adicionaTarefaNoStorage(novaTarefa);
  
      // Limpa o campo de entrada
      inputTarefa.value = '';
    } else {
      alert('Por favor, digite o nome da tarefa.');
    }
  });
  
  // Carregar tarefas do localStorage ao carregar a página
  window.addEventListener('load', function() {
    let tarefas = [];
    if (localStorage.getItem('tarefas')) {
      tarefas = JSON.parse(localStorage.getItem('tarefas'));
      tarefas.forEach(tarefa => {
        adicionaTarefaDOM(tarefa);
      });
    }
  });
  
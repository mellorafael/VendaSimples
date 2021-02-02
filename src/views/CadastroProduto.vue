<template>
  <div id="app" class="mt-3">
    <h3>Cadastro de Produto</h3>
    <hr />
    <form>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          v-model="formulario.Nome"
          placeholder="Digite o nome do produto"
          maxlength="50"
        />
      </div>
      <div class="form-group row">
        <div class="col-6">
          <label for="preco">Preço</label>
          <input
            type="text"
            class="form-control"
            v-model="formulario.Preco"
            id="preco"
            placeholder="Digite o preço"
            maxlength="50"
          />
        </div>
        <div class="col-6">
          <label for="precocusto">Preço Custo</label>
          <input
            type="text"
            class="form-control"
            v-model="formulario.PrecoCusto"
            id="precocusto"
            placeholder="Digite o preço de custo"
            maxlength="50"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="unidade">Unidade</label>
        <select class="form-control" id="unidade" v-model="formulario.Unidade">
          <option value="UN">UN</option>
          <option value="PÇ">PÇ</option>
          <option value="CX">CX</option>
        </select>
      </div>
      <div class="form-group">
        <label for="imagem">Imagem</label>
        <input type="file" class="form-control" id="imagem" />
      </div>
      <div class="row">
        <div class="col-12 text-right">
          <button class="btn btn-primary">Salvar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "CadastroProduto",
  data() {
    return {
      formulario: {
        Nome: "",
        Preco: null,
        PrecoCusto: null,
        Unidade: "UN",
      },
    };
  },
};
</script>
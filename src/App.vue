<template>
  <div id="app" class="h-100">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Venda<strong>Simples</strong></a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" 
              >Home <span class="sr-only" >(TESTE)</span></a
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'CadastroProduto' }"> Cadastro Produto </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <main role="main" class="container" style="margin-top:70px;">
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <!-- /.container -->
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {};
  },

  methods: {},
};
</script>

<style>

</style>

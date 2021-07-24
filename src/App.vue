<template>
  <div>导航栏 | <router-link to="/">Zhi</router-link> | <router-link to="/xiao">Xiao</router-link> </div>
  <hr/>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

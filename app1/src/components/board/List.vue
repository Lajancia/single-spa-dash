<template>
  <div>
    <h2>게시판 리스트</h2>
    <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a>
  </div>
</template>

<script>
export default {
  methods: {
    getList() {
      this.$axios
        .get("http://localhost:3000/api/board")
        .then((res) => {
          console.log(res);
        })
        .then((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>

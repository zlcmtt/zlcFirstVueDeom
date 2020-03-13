<template>
    <div class="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号：" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入账号" size="small"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="ruleForm.password" show-password placeholder="请输入密码" size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  type="success" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            min: 5, max: 5, message: '账号为长度为5', trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6, max: 6, message: '密码长度为6', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    ...mapMutations(['setAuthor']),
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const author = 50;
          let name = '';
          switch (author) {
            case 50:
              name = 'daitishen';
              break;
            case 51:
              name = 'liebiao';
              break;
            case 52:
              name = 'guanli';
              break;
            default:
              break;
          }
          this.$router.push({ name });
          this.setAuthor(author);
        } else {
          console.log('error submit!!');
        }
      });
    },
  },
};
</script>

<style lang="less">
.login {
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
  background-color: #ece0ea;
 .el-form{
   width: 30%;
   margin: auto;
 }
}
</style>

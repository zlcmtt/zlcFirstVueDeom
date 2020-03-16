<template>
    <div class="upload">
      <el-upload
        ref="upload"
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
        :auto-upload="false"
        :on-change="handleChange"
        :before-upload="beforeUpload">
        <el-button size="small" type="primary">点击上传/预览</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button size="small" type="primary" @click="requestUpload">提交</el-button>
    </div>
</template>

<script>
export default {
  name: 'bohui',
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeUpload(file) {
      console.log(file);
    },
    requestUpload() {
      this.$refs.upload.submit();
    },
  },
};
</script>

<style lang="less">
  .upload{
    .upload-demo{
      padding-bottom: 20px;;
    }
  }
</style>

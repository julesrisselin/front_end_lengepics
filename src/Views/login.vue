<script setup> 
</script>

<template>
<form action="http://localhost:3000/auth/login" enctype="multipart/form-data" method="post">
            <div class="form-group">
                <input type="text" class="email" placeholder="email" name="email">
                <input type="text" class="password" placeholder="password" name="password">
            </div>
        </form>
</template>

<style scoped>
    
</style>
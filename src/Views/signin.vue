<script setup> 
</script>

<template>
<form action="http://localhost:3000/users" enctype="multipart/form-data" method="post">
            <div class="form-group">
                <input type="text" class="email" placeholder="email" name="email">
                <input type="text" class="password" placeholder="password" name="password">
                <input type="text" class="name" placeholder="name" name="name">
                <input type="text" class="firstname" placeholder="prénom" name="firstname">
            </div>
        </form>
</template>

<style scoped>
    
</style>
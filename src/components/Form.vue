<template>
    <form class="form-container">
        <div v-for="(input, index) in fields" :key="index" class="form-group">
            <label :for="input.name">{{ input.label }}</label>
            <input v-if="['text', 'email', 'number', 'password'].includes(input.type)" :type="input.type"
                :id="input.name" v-model="formData[input.name]" :placeholder="input.placeholder" />

            <div v-else-if="input.type === 'radio'">
                <label v-for="option in input.options" :key="option.value">
                    <input type="radio" :name="input.name" :value="option.value" v-model="formData[input.name]" />{{
                        option.label }}
                </label>
            </div>

            <div v-else-if="input.type === 'checkbox'">
                <label v-for="option in input.options" :key="option.value">
                    <input type="checkbox" :name="input.name" :value="option.value" v-model="formData[input.name]" />{{
                        option.label }}</label>
            </div>
        </div>
        <button type="button" @click="submitForm">{{ buttonText }}</button>
    </form>
</template>

<script>
export default {
    props: {
        fields: Array,
        buttonText: String,
    },
    data() {
        return {
            formData: {},
        };
    },
    created() {
        this.fields.forEach((field) => {
            if (field.type === 'checkbox') {
                this.formData[field.name] = [];
            } else {
                this.formData[field.name] = '';
            }
        });
        console.log(this.formData);
    },

    methods: {
        submitForm() {
            this.$emit('onSubmit', this.formData);
        },
    },
};
</script>

<style scoped>
.form-container {
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.form-group label {
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
</style>
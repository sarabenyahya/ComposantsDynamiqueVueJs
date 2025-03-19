<template>
    <div>
        <h2>ajouter un employé</h2>
        <Form :fields="fieldList" buttonText="Ajouter" @onSubmit="handleSubmit" />

    </div>

</template>

<script>
import { useEmployeeStore } from '@/store/employees';
import Form from '@/components/Form.vue';

export default {
    components: {
        Form,
    },
    data() {
        return {
            fieldList: [
                {
                    name: 'nom',
                    type: 'text',
                    placeholder: 'tapez votre nom',
                    label: 'Nom',
                },
                {
                    name: 'mail',
                    type: 'email',
                    placeholder: 'tapez votre adresse email',
                    label: 'Email',
                },
                {
                    name: 'age',
                    type: 'number',
                    placeholder: 'tapez votre âge',
                    label: 'Age',
                },
                {
                    name: 'password',
                    type: 'password',
                    placeholder: 'tapez votre mot de passe',
                    label: 'Mot de passe',
                },
                {
                    name: 'genre',
                    type: 'radio',
                    label: 'Genre',
                    options: [
                        { value: 'homme', label: 'Homme' },
                        { value: 'femme', label: 'Femme' },
                    ],
                },
                {
                    name: 'interets',
                    type: 'checkbox',
                    label: 'centres d intéret',
                    options: [
                        { value: 'musique', label: 'Musique' },
                        { value: 'sport', label: 'Sport' },
                    ],
                },
            ],

        }

    },
    methods: {
        handleSubmit(data) {
            const employeeStore = useEmployeeStore();

            console.log(data)
            employeeStore.addEmployee(data);
            this.$router.push('/');
        },
    },


};
</script>
<template>
    <div>
        <h2>{{ isEditMode ? 'Modifier' : 'Ajouter' }} un employé</h2>

        <Form :fields="fieldList" :buttonText="isEditMode ? 'Modifier' : 'Ajouter'" :initialValues="employeeData"
            @onSubmit="handleSubmit" />

    </div>

</template>

<script>
import { useEmployeeStore } from '@/store/employees';
import Form from '@/components/Form.vue';
import { mapActions, mapState } from 'pinia';

export default {
    components: {
        Form,
    },
    props: {
        id: {
            type: [String, Number],
            default: null,
        }
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
            employeeData: {},

        };

    },
    computed: {
        ...mapState(useEmployeeStore, ['employees', 'getEmployeeById']),
        isEditMode() {
            return !!this.id;
        }
    },
    created() {
        if (this.isEditMode) {
            const employee = this.getEmployeeById(this.id);
            if (employee) {
                this.employeeData = { ...employee };

            }
            else {
                alert('Employé introuvable');
                this.$router.push('/');
            }
        }
    },
    methods: {
        ...mapActions(useEmployeeStore, ['addEmployee', 'editEmployee']),
        handleSubmit(data) {
            if (this.isEditMode) {
                this.editEmployee(this.id, data);
            } else {
                this.addEmployee(data);
            }
            this.$router.push({ name: 'tableau' });
        },

    }
};
</script>